"use client";

import React, { useEffect } from "react";
import { useSetAtom } from "jotai";
import { entitiesAtom, Entity } from "../state/entities";
import socket from "../state/socket";
import EntityTable from "./EntityTable";
import StatusSummary from "./StatusSummary";
import { useHydrateAtoms } from "jotai/utils";

interface IEntityUpdaterProps {
  initialEntities: Entity[];
}

const EntityUpdater: React.FC<IEntityUpdaterProps> = ({
  initialEntities,
}: IEntityUpdaterProps) => {
  const setEntities = useSetAtom(entitiesAtom);

  useHydrateAtoms([[entitiesAtom, initialEntities]]);

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
      <StatusSummary />
      <EntityTable />
    </>
  );
};

export default EntityUpdater;
