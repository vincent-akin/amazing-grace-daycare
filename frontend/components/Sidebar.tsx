"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <aside className="w-64 min-h-screen border-r bg-white p-6">
      <h1 className="mb-8 text-xl font-bold">
        Amazing Grace
      </h1>

      <nav className="space-y-4">
        <Link
          href="/dashboard"
          className="block rounded p-2 hover:bg-gray-100"
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/admissions"
          className="block rounded p-2 hover:bg-gray-100"
        >
          Admissions
        </Link>

        <Link
          href="/dashboard/children"
          className="block rounded p-2 hover:bg-gray-100"
        >
          Children
        </Link>

        <button
            onClick={logout}
            className="rounded-full border border-orange-300 px-5 py-2 text-orange-600 transition hover:bg-orange-100"
          >
            Logout
        </button>
      </nav>
    </aside>
  );
}