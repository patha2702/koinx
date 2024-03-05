import React from "react";
import PathIndicator from "@/components/shared/PathIndicator";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[#eff2f5] px-10 py-2">
      <PathIndicator />
      {children}
    </main>
  );
};

export default Layout;
