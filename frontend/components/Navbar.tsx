import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 border-b border-orange-100 bg-white/90 backdrop-blur-md dark:border-green-900 dark:bg-[#133126]/90">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
                <Link
                    href="/"
                    className="text-2xl font-bold text-orange-600 dark:text-lime-300"
                >
                    Amazing Grace
                </Link>

                <div className="flex items-center gap-6 text-gray-700 dark:text-lime-100">
                    <Link
                        href="/"
                        className="transition hover:text-orange-600 dark:hover:text-lime-300"
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className="transition hover:text-orange-600 dark:hover:text-lime-300"
                    >
                        About
                    </Link>

                    <Link
                        href="/apply"
                        className="transition hover:text-orange-600 dark:hover:text-lime-300"
                    >
                        Apply
                    </Link>

                    <Link
                        href="/contact"
                        className="transition hover:text-orange-600 dark:hover:text-lime-300"
                    >
                        Contact
                    </Link>

                    <Link
                        href="/login"
                        className="rounded-full bg-orange-500 px-5 py-2 text-white transition hover:bg-orange-600 dark:bg-[#1E5A43] dark:hover:bg-[#DFF7A1] dark:hover:text-[#081C15]"
                    >
                        Admin Login
                    </Link>
                </div>
            </div>
        </nav>
    );
}