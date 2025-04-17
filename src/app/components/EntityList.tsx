import React from "react";
import { useEntities } from "../hooks/useEntities";
import { useAtom } from "jotai";
import {
  activeEntitiesAtom,
  inactiveEntitiesAtom,
  pendingEntitiesAtom,
} from "../state/entities";
import StatusBadge from "./StatusBadge";

const EntityList: React.FC = () => {
  const { isLoading, isError } = useEntities();
  const [activeEntities] = useAtom(activeEntitiesAtom);
  const [inactiveEntities] = useAtom(inactiveEntitiesAtom);
  const [pendingEntities] = useAtom(pendingEntitiesAtom);

  if (isLoading) {
    return <div className="flex justify-center p-8">Loading entities...</div>;
  }

  if (isError) {
    return <div className="text-red-500 p-8">Error loading entities</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Entity Status Dashboard</h1>
      <p className="mb-4 text-gray-600">
        This dashboard shows entities with their real-time statuses. The
        statuses are updated via WebSockets.
      </p>

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

      <div className="bg-white shadow overflow-hidden rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[...activeEntities, ...inactiveEntities, ...pendingEntities]
              .sort((a, b) => a.id - b.id)
              .map((entity) => (
                <tr key={entity.id} className="transition-colors duration-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {entity.id}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{entity.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={entity.status} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EntityList;
