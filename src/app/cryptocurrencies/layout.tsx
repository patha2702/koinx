import React from "react";
import PathIndicator from "@/components/shared/PathIndicator";
import RecommendedCoins from "@/components/RecommendedCoins";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[#eff2f5] px-10 py-2">
      <PathIndicator />
      {children}
      <RecommendedCoins />
    </main>
  );
};

export default Layout;
