export default function AboutPage() {
    return (
        <div className="min-h-screen bg-orange-50 py-20 px-6">
            <div className="mx-auto max-w-5xl rounded-3xl bg-white p-12 shadow-lg">
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
                        About Amazing Grace
                    </p>

                    <h1 className="mt-3 text-4xl font-bold text-gray-900">
                        Nurturing Young Minds with Love and Excellence
                    </h1>

                    <p className="mt-6 text-lg text-gray-600">
                        We are committed to providing a safe, loving, and
                        stimulating environment where every child can grow,
                        learn, and thrive.
                    </p>
                </div>

                <div className="mt-16 grid gap-10 md:grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-semibold text-orange-600">
                            Our Mission
                        </h2>

                        <p className="mt-4 text-gray-600">
                            To provide exceptional childcare that nurtures
                            confidence, creativity, and character in every child.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-orange-600">
                            Our Vision
                        </h2>

                        <p className="mt-4 text-gray-600">
                            To be a trusted foundation for early childhood
                            growth and lifelong learning.
                        </p>
                    </div>
                </div>

                <div className="mt-16 rounded-3xl bg-orange-100 p-8">
                    <h2 className="text-2xl font-semibold text-orange-700">
                        Why Families Trust Us
                    </h2>

                    <ul className="mt-6 space-y-3 text-gray-700">
                        <li>✓ Safe and secure environment</li>
                        <li>✓ Experienced and compassionate caregivers</li>
                        <li>✓ Structured early learning activities</li>
                        <li>✓ Focus on emotional and social development</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}