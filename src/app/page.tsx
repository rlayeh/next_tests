import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Entity Dashboard Demo
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Welcome to the Entity Dashboard demonstration. This application
            showcases different rendering strategies in Next.js.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/routes/server-side"
              className="block p-6 bg-blue-50 border border-blue-200 hover:bg-blue-100 rounded-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                Server-Side Rendering
              </h2>
              <p className="text-blue-600">
                View the dashboard with initial server-side rendering followed
                by client-side hydration and updates.
              </p>
            </Link>

            <Link
              href="/routes/client-side"
              className="block p-6 bg-purple-50 border border-purple-200 hover:bg-purple-100 rounded-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold text-purple-700 mb-2">
                Client-Side Rendering
              </h2>
              <p className="text-purple-600">
                View the dashboard with complete client-side rendering and data
                fetching.
              </p>
            </Link>
          </div>

          <div className="mt-8 p-4 bg-gray-50 border rounded-lg">
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              About this demo
            </h3>
            <p className="text-gray-600">
              This demonstration shows how the same UI components can be used in
              different rendering strategies. It highlights the tradeoffs
              between server-side and client-side rendering in a Next.js
              application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
