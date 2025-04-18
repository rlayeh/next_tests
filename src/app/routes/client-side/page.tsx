"use client";

import React from "react";
import EntityList from "../../components/EntityList";
import { useEntities } from "../../hooks/useEntities";

const ClientSidePage: React.FC = () => {
  const { entities, isLoading, isError } = useEntities();

  if (isLoading) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
            <p className="mt-2">Loading entities...</p>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          <p>Error loading entities. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4">
      <div className="container mx-auto mb-6">
        <div className="bg-purple-50 border border-purple-200 text-purple-700 px-4 py-3 rounded">
          <p className="font-medium">Client-Only Rendered Page</p>
          <p className="text-sm">
            This page uses{" "}
            <code className="bg-purple-100 px-1 rounded">EntityList</code> which
            renders entirely on the client side. All data fetching and updates
            happen in the browser.
          </p>
        </div>
      </div>

      <EntityList initialEntities={entities} />
    </div>
  );
};

export default ClientSidePage;
