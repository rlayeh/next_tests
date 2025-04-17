import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { entitiesAtom, Entity } from "../state/entities";
import socket from "../state/socket";

const fetchEntities = async (): Promise<Entity[]> => {
  const response = await fetch("/api/entities");
  const data = await response.json();
  return data.entities;
};

export const useEntities = () => {
  const [entities, setEntities] = useAtom(entitiesAtom);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["entities"],
    queryFn: fetchEntities,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (data) {
      setEntities(data);
    }
  }, [data, setEntities]);

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

    socket.on("initialEntities", (initialEntities: Entity[]) => {
      setEntities(initialEntities);
    });

    return () => {
      socket.off("entityStatusChanged", handleStatusUpdate);
      socket.off("initialEntities");
    };
  }, [setEntities]);

  return {
    entities,
    isLoading,
    isError,
  };
};
