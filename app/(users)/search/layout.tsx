import React from "react";
import Search from "./Search";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex space-x-4 divide-x-2 p-5">
      <div>
        <h2>Search</h2>
      </div>

      <div className="flex-1 pl-5">
        <Search />
        <div>{children}</div>
      </div>
    </main>
  );
};

export default RootLayout;
