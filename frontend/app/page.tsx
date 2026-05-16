import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-orange-50">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-8 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-600">
              Welcome to Amazing Grace Daycare
            </p>

            <h1 className="text-5xl font-bold leading-tight text-gray-900">
              A Safe, Loving Place for Your Child to Learn and Grow
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              We provide nurturing childcare in a secure and engaging
              environment where every child is encouraged to thrive.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/apply"
                className="rounded-full bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
              >
                Apply Now
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-orange-300 px-6 py-3 font-medium text-orange-700 hover:bg-orange-100"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9"
              alt="Children learning"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-8">
          <h2 className="text-center text-4xl font-bold text-gray-900">
            Why Parents Choose Us
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            We combine compassionate care with structured early learning.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-orange-50 p-8">
              <h3 className="text-xl font-semibold text-orange-700">
                Safe Environment
              </h3>

              <p className="mt-3 text-gray-600">
                Secure facilities designed for comfort, learning, and play.
              </p>
            </div>

            <div className="rounded-3xl bg-orange-50 p-8">
              <h3 className="text-xl font-semibold text-orange-700">
                Caring Staff
              </h3>

              <p className="mt-3 text-gray-600">
                Experienced caregivers committed to every child’s wellbeing.
              </p>
            </div>

            <div className="rounded-3xl bg-orange-50 p-8">
              <h3 className="text-xl font-semibold text-orange-700">
                Holistic Growth
              </h3>

              <p className="mt-3 text-gray-600">
                Supporting emotional, social, and academic development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-orange-50 py-24">
        <div className="mx-auto max-w-6xl px-8">
          <h2 className="text-center text-4xl font-bold text-gray-900">
            Our Programs
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Carefully designed programs that support each stage of early childhood development.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-orange-600">
                Infants
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                6 months – 2 years
              </p>

              <p className="mt-4 text-gray-600">
                Gentle care, sensory stimulation, and nurturing routines
                for your little one.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-orange-600">
                Toddlers
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                2 – 4 years
              </p>

              <p className="mt-4 text-gray-600">
                Guided play, social interaction, and foundational learning
                experiences.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-orange-600">
                Preschool
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                4 – 5 years
              </p>

              <p className="mt-4 text-gray-600">
                Early academic preparation, creativity, and confidence-building
                activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-20 text-center text-white">
        <h2 className="text-4xl font-bold">
          Ready to Join Amazing Grace?
        </h2>

        <p className="mt-4 text-lg">
          Begin your child’s journey with us today.
        </p>

        <Link
          href="/apply"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-medium text-orange-600"
        >
          Start Application
        </Link>
      </section>
    </main>
  );
}