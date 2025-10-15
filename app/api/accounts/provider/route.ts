import Account from "@/database/account.model";
import { handleError } from "@/lib/handlers/error";
import { NotFoundError, ValidationError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { AccountSchema } from "@/lib/validations";
import { NextResponse } from "next/server";
import z from "zod";

// GET /api/users/[id]
export async function POST(request: Request) {
  const { provideAccountId } = await request.json();

  try {
    await dbConnect();

    const validatedData = AccountSchema.partial().safeParse({
      provideAccountId,
    });

    if (!validatedData.success) {
      throw new ValidationError(
        z.flattenError(validatedData.error).fieldErrors
      );
    }
    const account = await Account.findOne({ provideAccountId });

    if (!account) throw new NotFoundError("Account");

    return NextResponse.json({ success: true, data: account }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
