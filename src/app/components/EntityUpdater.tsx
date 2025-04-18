"use client";

import React, { useEffect, useState } from "react";
import { Entity } from "../state/entities";
import socket from "../state/socket";

interface EntityUpdaterProps {
  initialEntities: Entity[];
  children: (entities: Entity[]) => React.ReactNode;
}

const EntityUpdater: React.FC<EntityUpdaterProps> = ({
  initialEntities,
  children,
}) => {
  const [entities, setEntities] = useState<Entity[]>(initialEntities);

  useEffect(() => {
    setEntities(initialEntities);
  }, [initialEntities]);

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
  }, []);

  return <>{children(entities)}</>;
};

export default EntityUpdater;
