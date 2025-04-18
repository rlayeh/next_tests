import { Entity } from "../state/entities";
import dynamic from "next/dynamic";
import React from "react";
import EntityTable from "./EntityTable";
import EntityDashboardHeader from "./EntityDashboardHeader";
import StatusSummary from "./StatusSummary";

const EntityUpdater = dynamic(() => import("./EntityUpdater"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

interface EntityListProps {
  initialEntities: Entity[];
}

const ServerEntityList = ({ initialEntities }: EntityListProps) => {
  return (
    <div className="container mx-auto p-4">
      <EntityDashboardHeader />
      <StatusSummary entities={initialEntities} />

      <EntityUpdater initialEntities={initialEntities}>
        {(entities: Entity[]) => <EntityTable entities={entities} />}
      </EntityUpdater>
    </div>
  );
};

export default ServerEntityList;
