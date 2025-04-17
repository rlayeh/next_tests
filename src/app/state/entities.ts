import { atom } from "jotai";

export interface Entity {
  id: number;
  name: string;
  status: "active" | "inactive" | "pending";
}

export const entitiesAtom = atom<Entity[]>([]);

export const activeEntitiesAtom = atom((get) => {
  return get(entitiesAtom).filter((entity) => entity.status === "active");
});

export const inactiveEntitiesAtom = atom((get) => {
  return get(entitiesAtom).filter((entity) => entity.status === "inactive");
});

export const pendingEntitiesAtom = atom((get) => {
  return get(entitiesAtom).filter((entity) => entity.status === "pending");
});
