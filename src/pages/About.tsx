import Reveal from "../Components/UI/Reveal";

function About() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1A2332]">

      {/* Page Introduction */}
      <section className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#7A1C1C]">
            About Casiciaco
          </p>

          <h1 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            Advancing research through knowledge, 
            methodology, and analytical expertise.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600">
            Introduce the organization, its background, 
            and the purpose behind its work.
          </p>
        </div>
      </section>

      {/* Organization Background */}
      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-widest text-[#7A1C1C]">
              Who We Are
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Our Story
            </h2>
          </div>

          <div className="leading-8 text-gray-600">
            <p>
              Add the organization's history, its establishment,
              experience, and the people behind its work.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

          <article className="border-t border-gray-300 pt-6">
            <h2 className="font-serif text-3xl">Our Mission</h2>
            <p className="mt-4 leading-7 text-gray-600">
              Add the organization's mission here.
            </p>
          </article>

          <article className="border-t border-gray-300 pt-6">
            <h2 className="font-serif text-3xl">Our Vision</h2>
            <p className="mt-4 leading-7 text-gray-600">
              Add the organization's vision here.
            </p>
          </article>

        </div>
      </section>

    </main>
  );
}

export default About;
