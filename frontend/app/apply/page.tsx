"use client";

import { useState } from "react";
import api from "@/lib/api";

export default function ApplyPage() {
    const [form, setForm] = useState({
        parentName: "",
        parentEmail: "",
        parentPhone: "",
        childName: "",
        childDob: "",
        childGender: "",
        medicalNotes: "",
    });

    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);
        setMessage("");

        try {
            await api.post("/admissions", {
                ...form,
                childDob: new Date(form.childDob).toISOString(),
            });

            setIsError(false);
            setMessage("Application submitted successfully!");

            setForm({
                parentName: "",
                parentEmail: "",
                parentPhone: "",
                childName: "",
                childDob: "",
                childGender: "",
                medicalNotes: "",
            });

        } catch (error: any) {
            console.error(error.response?.data);

            setIsError(true);

            const apiError = error.response?.data?.message;

            if (Array.isArray(apiError)) {
                setMessage(apiError.map((e) => e.message).join(", "));
            } else {
                setMessage(apiError || "Submission failed.");
            }

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto max-w-2xl p-8">
            <h1 className="mb-6 text-3xl font-bold">
                Admission Application
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >
                <input
                    name="parentName"
                    placeholder="Parent Name"
                    value={form.parentName}
                    onChange={handleChange}
                    className="w-full rounded border p-3"
                />

                <input
                    name="parentEmail"
                    type="email"
                    placeholder="Parent Email"
                    value={form.parentEmail}
                    onChange={handleChange}
                    className="w-full rounded border p-3"
                />

                <input
                    name="parentPhone"
                    placeholder="Parent Phone"
                    value={form.parentPhone}
                    onChange={handleChange}
                    className="w-full rounded border p-3"
                />

                <input
                    name="childName"
                    placeholder="Child Name"
                    value={form.childName}
                    onChange={handleChange}
                    className="w-full rounded border p-3"
                />

                <input
                    name="childDob"
                    type="date"
                    value={form.childDob}
                    onChange={handleChange}
                    className="w-full rounded border p-3"
                />

                <select
                    name="childGender"
                    value={form.childGender}
                    onChange={handleChange}
                    className="w-full rounded border p-3"
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <textarea
                    name="medicalNotes"
                    placeholder="Medical Notes (optional)"
                    value={form.medicalNotes}
                    onChange={handleChange}
                    className="w-full rounded border p-3"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded bg-black p-3 text-white disabled:opacity-50"
                >
                    {loading ? "Submitting..." : "Submit Application"}
                </button>
            </form>

            {message && (
                <p
                    className={`mt-4 ${
                        isError ? "text-red-600" : "text-green-600"
                    }`}
                >
                    {message}
                </p>
            )}
        </div>
    );
}