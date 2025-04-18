import React from "react";

const EntityDashboardHeader: React.FC = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Entity Status Dashboard</h1>
      <p className="mb-4 text-gray-600">
        This dashboard shows entities with their real-time statuses. The
        statuses are updated via WebSockets.
      </p>
    </>
  );
};

export default EntityDashboardHeader;
