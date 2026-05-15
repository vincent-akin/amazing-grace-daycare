import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between border-b px-8 py-4">
            <Link
                href="/"
                className="text-xl font-bold"
            >
                Amazing Grace
            </Link>

            <div className="flex gap-6">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/apply">Apply</Link>
                <Link href="/login">Admin</Link>
            </div>
        </nav>
    );
}