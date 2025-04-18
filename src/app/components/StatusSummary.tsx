import React from "react";
import { Entity } from "../state/entities";

interface StatusSummaryProps {
  entities: Entity[];
}

const StatusSummary: React.FC<StatusSummaryProps> = ({ entities }) => {
  const activeEntities = entities.filter(
    (entity) => entity.status === "active"
  );
  const inactiveEntities = entities.filter(
    (entity) => entity.status === "inactive"
  );
  const pendingEntities = entities.filter(
    (entity) => entity.status === "pending"
  );

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3">Status Summary</h2>
      <div className="flex gap-4">
        <div className="bg-white rounded-lg shadow p-4 flex-1">
          <h3 className="font-medium">Active</h3>
          <p className="text-2xl">{activeEntities.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex-1">
          <h3 className="font-medium">Inactive</h3>
          <p className="text-2xl">{inactiveEntities.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex-1">
          <h3 className="font-medium">Pending</h3>
          <p className="text-2xl">{pendingEntities.length}</p>
        </div>
      </div>
    </div>
  );
};

export default StatusSummary;
