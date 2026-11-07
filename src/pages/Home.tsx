
import { useEffect } from "react";
import {
  BarChart3,
  BookOpen,
  FileCheck2,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Clock,
  Menu,
  ClipboardList,
  Microscope,
  Presentation,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: BarChart3,
    title: "Statistical & Quantitative Analytics",
    description:
      "Structured statistical support for research data, from preparation and cleaning to interpretation and presentation.",
    details: [
      "SPSS, R, Python, and Jamovi",
      "Data cleaning and preparation",
      "Hypothesis testing and statistical analysis",
      "Data visualization and interpretation",
    ],
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Research Methodology & Framework Design",
    description:
      "Methodological guidance to help researchers establish a coherent, defensible, and well-structured research design.",
    details: [
      "Research title and scope refinement",
      "Research question formulation",
      "Theoretical and conceptual frameworks",
      "Qualitative thematic coding guidance",
    ],
  },
  {
    number: "03",
    icon: FileCheck2,
    title: "Academic Editing & Compliance",
    description:
      "Editorial assistance to improve clarity, consistency, formatting, and adherence to academic documentation standards.",
    details: [
      "Academic proofreading and line-editing",
      "APA 7th and IEEE formatting",
      "Citation and reference consistency",
      "Similarity report screening guidance",
    ],
  },
  {
    number: "04",
    icon: GraduationCap,
    title: "Defense Preparation & Panel Coaching",
    description:
      "Practical preparation to help researchers communicate their work clearly and respond confidently during academic defenses.",
    details: [
      "Research presentation slide design",
      "Mock defense and panel questions",
      "Research findings presentation",
      "Oral communication coaching",
    ],
  },
];

const workflow = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Submit Guidelines & Research Draft",
    description:
      "Share your research draft, institutional guidelines, objectives, and current concerns so the requirements can be properly assessed.",
  },
  {
    number: "02",
    icon: Microscope,
    title: "Expert Methodology & Statistical Review",
    description:
      "Your requirements are reviewed to identify appropriate methodological approaches, analytical procedures, and areas needing improvement.",
  },
  {
    number: "03",
    icon: Presentation,
    title: "Receive Analytics Output & Defense Preparation",
    description:
      "Receive the agreed analytical outputs, explanations, and academic guidance to help you understand and present your research.",
  },
];

function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A2332]">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200 bg-[#FDFBF7]/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#home" className="max-w-[230px]">
            <span className="block font-serif text-lg font-bold tracking-wide text-[#1A2332] sm:text-xl">
              Casiciaco
            </span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-stone-600 sm:text-xs">
              Academic & Data Solutions
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            <a href="#services" className="text-sm text-stone-700 transition-colors hover:text-[#7A1C1C]">
              Services
            </a>
            <a href="#methodology" className="text-sm text-stone-700 transition-colors hover:text-[#7A1C1C]">
              Methodology
            </a>
            <a href="#tools" className="text-sm text-stone-700 transition-colors hover:text-[#7A1C1C]">
              Tools
            </a>
            <a href="#contact" className="text-sm text-stone-700 transition-colors hover:text-[#7A1C1C]">
              Contact
            </a>

            <a
              href="#contact"
              className="bg-[#7A1C1C] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#5F1515]"
            >
              Request Consultation
            </a>
          </div>

          <a
            href="#contact"
            aria-label="Go to consultation contact section"
            className="flex items-center gap-2 text-sm font-medium text-[#7A1C1C] lg:hidden"
          >
            <Menu size={21} />
            <span>Contact</span>
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative scroll-mt-24 overflow-hidden border-b border-stone-200 pt-36 pb-24 sm:pt-44 sm:pb-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-4xl" data-reveal>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#7A1C1C]" />
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7A1C1C]">
                  Academic Research & Data Consultancy
                </p>
              </div>

              <h1 className="max-w-4xl font-serif text-4xl font-medium leading-[1.15] tracking-tight text-[#1A2332] sm:text-5xl lg:text-7xl">
                Professional Academic Consulting &{" "}
                <span className="text-[#7A1C1C]">Data Analytics</span>{" "}
                Services
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                Guiding undergraduate, master’s, and doctoral researchers
                through rigorous data processing, statistical methodology,
                and manuscript preparation.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-3 bg-[#7A1C1C] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#5F1515]"
                >
                  Explore Services
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center border border-stone-300 px-7 py-4 text-sm font-semibold text-[#1A2332] transition-colors hover:border-[#7A1C1C] hover:text-[#7A1C1C]"
                >
                  Schedule Advisory Call
                </a>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 border-t border-stone-200 pt-8 sm:grid-cols-3" data-reveal>
              <div>
                <p className="font-serif text-2xl text-[#7A1C1C]">Research</p>
                <p className="mt-2 text-sm text-stone-600">
                  Methodological guidance and academic development
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[#7A1C1C]">Analytics</p>
                <p className="mt-2 text-sm text-stone-600">
                  Structured statistical analysis and data interpretation
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[#7A1C1C]">Advisory</p>
                <p className="mt-2 text-sm text-stone-600">
                  Research consultation and academic preparation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="scroll-mt-24 bg-stone-100/70 py-24 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mb-14 max-w-2xl" data-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1C1C]">
                Our Expertise
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#1A2332] sm:text-5xl">
                Academic services built around research excellence.
              </h2>
              <p className="mt-5 leading-7 text-stone-600">
                Practical research support designed to help students and
                researchers navigate the technical and methodological
                demands of academic work.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.number}
                    data-reveal
                    className="border border-stone-200 bg-[#FDFBF7] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-md sm:p-9"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center bg-[#7A1C1C]/10 text-[#7A1C1C]">
                        <Icon size={23} strokeWidth={1.6} />
                      </div>
                      <span className="font-serif text-2xl text-stone-300">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-7 font-serif text-2xl leading-snug text-[#1A2332]">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-stone-600">
                      {service.description}
                    </p>

                    <ul className="mt-7 space-y-3">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-3 text-sm text-stone-700"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-[#7A1C1C]"
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Methodology / Workflow */}
        <section
          id="methodology"
          className="scroll-mt-24 py-24 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mx-auto mb-16 max-w-2xl text-center" data-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1C1C]">
                Our Process
              </p>
              <h2 className="mt-4 font-serif text-3xl text-[#1A2332] sm:text-5xl">
                A structured approach to research support.
              </h2>
              <p className="mt-5 leading-7 text-stone-600">
                From initial consultation to analytical guidance, every
                engagement follows a clear and collaborative process.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-3 md:gap-8">
              {workflow.map((step) => {
                const Icon = step.icon;

                return (
                  <article key={step.number} data-reveal className="relative">
                    <div className="flex items-center justify-between border-b border-stone-200 pb-6">
                      <Icon size={28} strokeWidth={1.5} className="text-[#7A1C1C]" />
                      <span className="font-serif text-4xl text-stone-300">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-7 font-serif text-xl leading-snug text-[#1A2332]">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-stone-600">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section
          id="tools"
          className="scroll-mt-24 bg-stone-100/70 py-20"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-center" data-reveal>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1C1C]">
                  Analytical Resources
                </p>
                <h2 className="mt-4 font-serif text-3xl text-[#1A2332] sm:text-4xl">
                  Tools for rigorous research.
                </h2>
              </div>

              <div>
                <p className="leading-8 text-stone-600">
                  Our analytical workflow may incorporate established
                  statistical and research software, selected according
                  to the requirements of each study and the nature of
                  the available data.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {["SPSS", "R", "Python", "Jamovi"].map((tool) => (
                    <span
                      key={tool}
                      className="border border-stone-300 bg-[#FDFBF7] px-5 py-3 font-serif text-lg text-[#1A2332]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact and Map */}
        <section
          id="contact"
          className="scroll-mt-24 py-24 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mb-14 max-w-2xl" data-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1C1C]">
                Get in Touch
              </p>
              <h2 className="mt-4 font-serif text-3xl text-[#1A2332] sm:text-5xl">
                Visit Our Research Advisory Office
              </h2>
              <p className="mt-5 leading-7 text-stone-600">
                Connect with our team to discuss your research
                requirements and explore how we can assist.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              {/* Contact information */}
              <div data-reveal>
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <Mail className="mt-1 shrink-0 text-[#7A1C1C]" size={22} />
                    <div>
                      <h3 className="font-semibold text-[#1A2332]">Email</h3>
                      <p className="mt-2 text-sm text-stone-600">
                        [Organization email]
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <Phone className="mt-1 shrink-0 text-[#7A1C1C]" size={22} />
                    <div>
                      <h3 className="font-semibold text-[#1A2332]">Phone</h3>
                      <p className="mt-2 text-sm text-stone-600">
                        [Contact number]
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <Clock className="mt-1 shrink-0 text-[#7A1C1C]" size={22} />
                    <div>
                      <h3 className="font-semibold text-[#1A2332]">Operating Hours</h3>
                      <p className="mt-2 text-sm text-stone-600">
                        [Operating days and hours]
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <MapPin className="mt-1 shrink-0 text-[#7A1C1C]" size={22} />
                    <div>
                      <h3 className="font-semibold text-[#1A2332]">Office Address</h3>
                      <p className="mt-2 text-sm leading-7 text-stone-600">
                        [Complete office address]
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="mailto:YOUR_EMAIL_ADDRESS"
                  className="mt-10 inline-flex items-center gap-3 bg-[#7A1C1C] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#5F1515]"
                >
                  Request a Consultation
                  <ArrowRight size={17} />
                </a>
              </div>

              {/* Map placeholder */}
              <div
                data-reveal
                className="min-h-[350px] overflow-hidden rounded-sm border border-stone-200 bg-stone-100 shadow-sm"
              >
                <iframe
                title="Casiciaco Research Advisory Office location"
                src="https://www.google.com/maps?q=Calamba,+Laguna,+Philippines&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-[#F4F0E8]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1A2332]">
                Casiciaco
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-stone-600">
                Academic & Data Solutions
              </p>
              <p className="mt-5 max-w-md text-sm leading-7 text-stone-600">
                Supporting academic research through statistical analysis,
                methodological guidance, and research consultancy.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg text-[#1A2332]">
                Academic Ethics Notice
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Casiciaco Academic & Data Solutions provides independent
                statistical analysis, methodology coaching, data processing,
                and proofreading services. We strictly adhere to institutional
                academic integrity guidelines; we do not ghostwrite or
                manufacture academic papers for submission. Final authorship
                remains the sole responsibility of the student.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-stone-300 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Casiciaco Academic & Data Solutions.
              All rights reserved.
            </p>
            <a href="#home" className="transition-colors hover:text-[#7A1C1C]">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
