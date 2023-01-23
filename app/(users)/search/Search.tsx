"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Enter Search Term"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="py-2 px-3 bg-blue-500 text-white rounded-lg"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
