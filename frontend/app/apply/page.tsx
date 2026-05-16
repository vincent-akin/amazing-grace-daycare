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
                setMessage(apiError.map((e: any) => e.message).join(", "));
            } else {
                setMessage(apiError || "Submission failed.");
            }

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-orange-50 py-16 px-6">
            <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-lg">
                <div className="mb-10 text-center">
                    <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
                        Amazing Grace Daycare
                    </p>

                    <h1 className="mt-3 text-4xl font-bold text-gray-900">
                        Admission Application
                    </h1>

                    <p className="mt-4 text-gray-600">
                        Complete the form below to begin your child’s enrollment journey.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    <input
                        name="parentName"
                        placeholder="Parent Name"
                        value={form.parentName}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-orange-200 p-4 focus:border-orange-500 focus:outline-none"
                    />

                    <input
                        name="parentEmail"
                        type="email"
                        placeholder="Parent Email"
                        value={form.parentEmail}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-orange-200 p-4 focus:border-orange-500 focus:outline-none"
                    />

                    <input
                        name="parentPhone"
                        placeholder="Parent Phone"
                        value={form.parentPhone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-orange-200 p-4 focus:border-orange-500 focus:outline-none"
                    />

                    <input
                        name="childName"
                        placeholder="Child Name"
                        value={form.childName}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-orange-200 p-4 focus:border-orange-500 focus:outline-none"
                    />

                    <input
                        name="childDob"
                        type="date"
                        value={form.childDob}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-orange-200 p-4 focus:border-orange-500 focus:outline-none"
                    />

                    <select
                        name="childGender"
                        value={form.childGender}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-orange-200 p-4 focus:border-orange-500 focus:outline-none"
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
                        className="w-full rounded-xl border border-orange-200 p-4 focus:border-orange-500 focus:outline-none"
                        rows={4}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-full bg-orange-500 p-4 font-medium text-white transition hover:bg-orange-600 disabled:opacity-50"
                    >
                        {loading ? "Submitting..." : "Submit Application"}
                    </button>
                </form>

                {message && (
                    <p
                        className={`mt-6 text-center ${
                            isError ? "text-red-600" : "text-green-600"
                        }`}
                    >
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
}