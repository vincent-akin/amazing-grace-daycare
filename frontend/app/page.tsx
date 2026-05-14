import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-8 py-24 text-center">
        <h1 className="text-5xl font-bold">
          Welcome to Amazing Grace Daycare
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          A nurturing environment where children
          learn, grow, and thrive.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/apply"
            className="rounded bg-black px-6 py-3 text-white"
          >
            Apply Now
          </Link>

          <Link
            href="/about"
            className="rounded border px-6 py-3"
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-8">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Why Choose Us
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded border bg-white p-6">
              <h3 className="font-semibold">
                Safe Environment
              </h3>
              <p className="mt-2 text-gray-600">
                Secure and child-friendly spaces.
              </p>
            </div>

            <div className="rounded border bg-white p-6">
              <h3 className="font-semibold">
                Qualified Caregivers
              </h3>
              <p className="mt-2 text-gray-600">
                Experienced and compassionate staff.
              </p>
            </div>

            <div className="rounded border bg-white p-6">
              <h3 className="font-semibold">
                Holistic Learning
              </h3>
              <p className="mt-2 text-gray-600">
                Academic, social, and emotional growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}