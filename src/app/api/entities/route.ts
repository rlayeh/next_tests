import { NextResponse } from "next/server";

export const mockEntities = [
  { id: 1, name: "Entity 1", status: "active" },
  { id: 2, name: "Entity 2", status: "inactive" },
  { id: 3, name: "Entity 3", status: "pending" },
  { id: 4, name: "Entity 4", status: "active" },
  { id: 5, name: "Entity 5", status: "inactive" },
];

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json({ entities: mockEntities });
}
