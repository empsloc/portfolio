import React from "react";
import TerminalProvider from "./TerminalProvider";

export default function Terminal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex relative z-[50] items-center justify-center w-screen h-screen bg-[#e1c9c9]">
        <TerminalProvider>
    {children}
    </TerminalProvider>
  </div>
  );
}
