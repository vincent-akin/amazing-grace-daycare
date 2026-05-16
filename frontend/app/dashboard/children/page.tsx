"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";

type Child = {
    id: string;
    name: string;
    gender: string;
    medicalNotes: string;
    parent: {
        name: string;
        phone: string;
    };
};

export default function ChildrenPage() {
    const [children, setChildren] = useState<Child[]>([]);

    useEffect(() => {
        const fetchChildren = async () => {
            const token = localStorage.getItem("token");

            const res = await api.get("/children", {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            });

            setChildren(res.data);
        };

        fetchChildren();
    }, []);

    return (
        <div>
        <h1 className="mb-6 text-2xl font-bold">
            Enrolled Children
        </h1>

        <div className="space-y-4">
            {children.map((child) => (
            <div
                key={child.id}
                className="rounded border p-4"
            >
                <p>
                <strong>Name:</strong> {child.name}
                </p>

                <p>
                <strong>Gender:</strong> {child.gender}
                </p>

                <p>
                <strong>Parent:</strong>{" "}
                {child.parent.name}
                </p>

                <p>
                <strong>Phone:</strong>{" "}
                {child.parent.phone}
                </p>

                <p>
                <strong>Medical Notes:</strong>{" "}
                {child.medicalNotes || "None"}
                </p>
            </div>
            ))}
        </div>
        </div>
    );
}