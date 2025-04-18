"use client";

import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { Entity, entitiesAtom } from "../state/entities";
import socket from "../state/socket";
import EntityTable from "./EntityTable";
import StatusSummary from "./StatusSummary";

interface EntityUpdaterProps {
  initialEntities: Entity[];
  showStatusSummary?: boolean;
}

const EntityUpdater: React.FC<EntityUpdaterProps> = ({
  initialEntities,
  showStatusSummary = true,
}) => {
  const [entities, setEntities] = useAtom(entitiesAtom);

  useEffect(() => {
    setEntities(initialEntities);
  }, [initialEntities, setEntities]);

  useEffect(() => {
    const handleStatusUpdate = (updatedEntity: {
      id: number;
      status: "active" | "inactive" | "pending";
    }) => {
      setEntities((prevEntities) =>
        prevEntities.map((entity) =>
          entity.id === updatedEntity.id
            ? { ...entity, status: updatedEntity.status }
            : entity
        )
      );
    };

    socket.on("entityStatusChanged", handleStatusUpdate);

    return () => {
      socket.off("entityStatusChanged", handleStatusUpdate);
    };
  }, [setEntities]);

  return (
    <>
      {showStatusSummary && <StatusSummary entities={entities} />}
      <EntityTable entities={entities} />
    </>
  );
};

export default EntityUpdater;
