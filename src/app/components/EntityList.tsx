"use client";

import React from "react";
import { Entity } from "../state/entities";
import EntityDashboardHeader from "./EntityDashboardHeader";
import EntityUpdater from "./EntityUpdater";

interface EntityListProps {
  initialEntities: Entity[];
}

const EntityList: React.FC<EntityListProps> = ({ initialEntities }) => {
  return (
    <div className="container mx-auto p-4">
      <EntityDashboardHeader />
      <EntityUpdater initialEntities={initialEntities} />
    </div>
  );
};

export default EntityList;
