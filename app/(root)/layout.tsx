import Navbar from "@/components/navigation/navbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar></Navbar>
      {children}
    </main>
  );
};

export default RootLayout;
