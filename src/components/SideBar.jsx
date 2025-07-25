import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-800 text-blue-500  w-md">
      <h1 className="text-2xl font-bold mb-6">My sidebar</h1>
      <nav className="space-y-4">
        <Link
          href="/dashboard"
          className="block px-4 rounded hover:bg-gray-700"
        >
          Home
        </Link>
        <Link href="/profiile" className="block px-4 rounded hover:bg-gray-700">
          Profile
        </Link>
        <Link href="/settings" className="block px-4 rounded hover:bg-gray-700">
          Setting
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
