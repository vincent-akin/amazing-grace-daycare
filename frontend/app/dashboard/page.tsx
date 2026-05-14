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
    <div>
      <h1 className="mb-8 text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg border bg-white p-6 shadow">
          <h2 className="text-sm text-gray-500">
            Pending Admissions
          </h2>
          <p className="mt-2 text-4xl font-bold">
            {pending}
          </p>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow">
          <h2 className="text-sm text-gray-500">
            Enrolled Children
          </h2>
          <p className="mt-2 text-4xl font-bold">
            {approvedChildren}
          </p>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow">
          <h2 className="text-sm text-gray-500">
            Rejected Applications
          </h2>
          <p className="mt-2 text-4xl font-bold">
            {rejected}
          </p>
        </div>
      </div>
    </div>
  );
}