"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";

type Admission = {
  status: string;
};

type Child = {
  id: string;
};

export default function DashboardPage() {
  const [pending, setPending] = useState(0);
  const [approvedChildren, setApprovedChildren] = useState(0);
  const [rejected, setRejected] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem("token");

      const [admissionsRes, childrenRes] = await Promise.all([
        api.get("/admissions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        api.get("/children", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);

      const admissions: Admission[] = admissionsRes.data;
      const children: Child[] = childrenRes.data;

      setPending(
        admissions.filter((a) => a.status === "PENDING").length
      );

      setRejected(
        admissions.filter((a) => a.status === "REJECTED").length
      );

      setApprovedChildren(children.length);
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 rounded-3xl bg-white p-8 shadow-md">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
            Admin Dashboard
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-3 text-gray-600">
            Manage admissions, enrolled children, and daycare operations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-md">
            <h2 className="text-sm font-medium text-gray-500">
              Pending Admissions
            </h2>

            <p className="mt-4 text-5xl font-bold text-orange-600">
              {pending}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md">
            <h2 className="text-sm font-medium text-gray-500">
              Enrolled Children
            </h2>

            <p className="mt-4 text-5xl font-bold text-green-600">
              {approvedChildren}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md">
            <h2 className="text-sm font-medium text-gray-500">
              Rejected Applications
            </h2>

            <p className="mt-4 text-5xl font-bold text-red-500">
              {rejected}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}