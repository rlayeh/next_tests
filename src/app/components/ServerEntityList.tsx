import { Entity } from "../state/entities";
import React from "react";
import EntityDashboardHeader from "./EntityDashboardHeader";
import dynamic from "next/dynamic";

const EntityUpdater = dynamic(() => import("./EntityUpdater"), {
  loading: () => <p>Loading...</p>,
});

interface EntityListProps {
  initialEntities: Entity[];
}

const ServerEntityList = ({ initialEntities }: EntityListProps) => {
  return (
    <div className="container mx-auto p-4">
      <EntityDashboardHeader />
      <EntityUpdater initialEntities={initialEntities} />
    </div>
  );
};

export default ServerEntityList;
