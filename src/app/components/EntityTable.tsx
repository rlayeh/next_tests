import React from "react";
import { entitiesAtom } from "../state/entities";
import StatusBadge from "./StatusBadge";
import { useAtomValue } from "jotai";

const EntityTable: React.FC = () => {
  const entities = useAtomValue(entitiesAtom);

  return (
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
          {entities
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
  );
};

export default EntityTable;
