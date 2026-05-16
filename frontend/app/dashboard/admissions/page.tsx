"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";

type Admission = {
  id: string;
  parentName: string;
  childName: string;
  status: string;
};

export default function AdmissionsPage() {
  const [admissions, setAdmissions] = useState<Admission[]>([]);

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null;

  const fetchAdmissions = async () => {
    const res = await api.get("/admissions", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setAdmissions(res.data);
  };

  const approveAdmission = async (id: string) => {
    await api.patch(
      `/admissions/${id}/approve`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchAdmissions();
  };

  const rejectAdmission = async (id: string) => {
    await api.patch(
      `/admissions/${id}/reject`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchAdmissions();
  };

  useEffect(() => {
    fetchAdmissions();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Admissions
      </h1>

      <div className="space-y-4">
        {admissions.map((admission) => (
          <div
            key={admission.id}
            className="rounded border p-4"
          >
            <p>
              <strong>Parent:</strong>{" "}
              {admission.parentName}
            </p>

            <p>
              <strong>Child:</strong>{" "}
              {admission.childName}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {admission.status}
            </p>

            {admission.status === "PENDING" && (
              <div className="mt-4 flex gap-3">
                <button
                  onClick={() =>
                    approveAdmission(admission.id)
                  }
                  className="rounded bg-green-600 px-4 py-2 text-white"
                >
                  Approve
                </button>

                <button
                  onClick={() =>
                    rejectAdmission(admission.id)
                  }
                  className="rounded bg-red-600 px-4 py-2 text-white"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}