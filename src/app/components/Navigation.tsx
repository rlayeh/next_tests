import React from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow mb-6">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">
            <Link href="/" className="hover:text-blue-600 transition">
              Entity Dashboard
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              href="/routes/server-side"
              className={`px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100`}
            >
              Server Rendering
            </Link>
            <Link
              href="/routes/client-side"
              className={`px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100`}
            >
              Client-side Rendering
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
