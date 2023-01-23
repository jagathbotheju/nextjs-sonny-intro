import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="p-5 bg-blue-500 flex justify-between">
      <h2 className="text-2xl uppercase font-semibold text-white">Todos</h2>
      <Link href="/" className="text-2xl uppercase text-white">
        Home
      </Link>
    </header>
  );
};

export default Header;
