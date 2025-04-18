import ServerEntityList from "../../components/ServerEntityList";
import { Entity } from "../../state/entities";

export default async function ServerSidePage() {
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
    }/api/entities`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch entities");
  }

  const data = await response.json();
  const entities = data.entities as Entity[];

  return (
    <div className="min-h-screen bg-gray-50 py-4">
      <div className="container mx-auto mb-6">
        <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded">
          <p className="font-medium">Server Rendered Page</p>
          <p className="text-sm">
            This page uses{" "}
            <code className="bg-blue-100 px-1 rounded">ServerEntityList</code>{" "}
            which renders on the server first, then hydrates with client-side
            updates via WebSockets.
          </p>
        </div>
      </div>

      <ServerEntityList initialEntities={entities} />
    </div>
  );
}
