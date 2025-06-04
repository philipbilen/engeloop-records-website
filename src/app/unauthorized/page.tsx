import Link from "next/link";
import { ShieldX, Home } from "lucide-react";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="text-center">
        <div className="mb-8">
          <ShieldX className="w-24 h-24 text-red-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-2">Access Denied</h1>
          <p className="text-xl text-gray-400 mb-4">
            You don´t have permission to access this area.
          </p>
          <p className="text-gray-500">
            Admin privileges are required to view this page.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-engeloop-orange hover:bg-engeloop-orange/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 no-underline"
          >
            <Home size={20} />
            Return Home
          </Link>

          <div className="text-gray-400 text-sm">
            <p>
              If you believe this is an error, please contact the administrator.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
