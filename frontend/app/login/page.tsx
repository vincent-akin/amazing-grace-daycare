"use client";

import { useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {
            const res = await api.post("/auth/login", {
                email,
                password,
            });

            localStorage.setItem("token", res.data.token);
            router.push("/dashboard");

        } catch (err: any) {
            setError(err.response?.data?.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-orange-50 flex items-center justify-center px-6">
            <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-lg">
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
                        Admin Access
                    </p>

                    <h1 className="mt-3 text-3xl font-bold text-gray-900">
                        Welcome Back
                    </h1>

                    <p className="mt-3 text-gray-600">
                        Sign in to manage admissions and daycare records.
                    </p>
                </div>

                <form
                    onSubmit={handleLogin}
                    className="mt-8 space-y-5"
                >
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-orange-200 p-4 focus:border-orange-500 focus:outline-none"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-xl border border-orange-200 p-4 focus:border-orange-500 focus:outline-none"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-full bg-orange-500 p-4 font-medium text-white transition hover:bg-orange-600 disabled:opacity-50"
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </button>
                </form>

                {error && (
                    <p className="mt-5 text-center text-red-600">
                        {error}
                    </p>
                )}
            </div>
        </div>
    );
}