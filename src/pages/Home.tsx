
import Reveal from "../Components/UI/Reveal";

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

const highlights = [
  {
    title: "Research",
    description: "Methodological guidance and academic development",
  },
  {
    title: "Analytics",
    description: "Structured statistical analysis and data interpretation",
  },
  {
    title: "Advisory",
    description: "Research consultation and academic preparation",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A2332]">
      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative scroll-mt-24 overflow-hidden border-b border-stone-200 py-16 sm:py-24 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
            <Reveal>
              <div className="max-w-4xl">
                <div className="mb-5 flex items-center gap-3 sm:mb-7">
                  <span className="h-px w-10 shrink-0 bg-[#7A1C1C]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7A1C1C] sm:text-xs sm:tracking-[0.22em]">
                    Academic Research & Data Consultancy
                  </p>
                </div>

                <h1 className="max-w-4xl font-serif text-3xl font-medium leading-[1.15] tracking-tight text-[#1A2332] sm:text-5xl lg:text-7xl">
                  Professional Academic Consulting &{" "}
                  <span className="text-[#7A1C1C]">Data Analytics</span>{" "}
                  Services
                </h1>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-stone-600 sm:mt-8 sm:text-lg sm:leading-8">
                  Guiding undergraduate, master’s, and doctoral researchers
                  through rigorous data processing, statistical methodology,
                  and manuscript preparation.
                </p>

                <div className="mt-8 flex flex-row flex-wrap gap-3 sm:mt-10 sm:gap-4">
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 bg-[#7A1C1C] px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#5F1515] sm:gap-3 sm:px-7 sm:py-4 sm:text-sm"
                  >
                    Explore Services
                    <ArrowRight size={15} />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center border border-stone-300 px-4 py-3 text-xs font-semibold text-[#1A2332] transition-colors hover:border-[#7A1C1C] hover:text-[#7A1C1C] sm:px-7 sm:py-4 sm:text-sm"
                  >
                    Schedule Advisory Call
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Hero Highlights */}
            <div className="mt-12 grid grid-cols-3 gap-3 border-t border-stone-200 pt-6 sm:mt-20 sm:gap-8 sm:pt-8">
              {highlights.map((item, index) => (
                <Reveal key={item.title} delay={index * 120}>
                  <div>
                    <p className="font-serif text-base text-[#7A1C1C] sm:text-2xl">
                      {item.title}
                    </p>
                    <p className="mt-2 text-[10px] leading-4 text-stone-600 sm:text-sm sm:leading-6">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="scroll-mt-24 bg-stone-100/70 py-16 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
            <Reveal>
              <div className="mb-9 max-w-2xl sm:mb-14">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7A1C1C] sm:text-xs">
                  Our Expertise
                </p>
                <h2 className="mt-3 font-serif text-2xl leading-tight text-[#1A2332] sm:mt-4 sm:text-5xl">
                  Academic services built around research excellence.
                </h2>
                <p className="mt-4 text-sm leading-6 text-stone-600 sm:mt-5 sm:leading-7">
                  Practical research support designed to help students and
                  researchers navigate the technical and methodological
                  demands of academic work.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Reveal key={service.number} delay={index * 120}>
                    <article className="h-full border border-stone-200 bg-[#FDFBF7] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-md sm:p-6 lg:p-9">
                      <div className="flex items-center justify-between">
                        <div className="flex h-9 w-9 items-center justify-center bg-[#7A1C1C]/10 text-[#7A1C1C] sm:h-12 sm:w-12">
                          <Icon size={19} strokeWidth={1.6} />
                        </div>

                        <span className="font-serif text-lg text-stone-300 sm:text-2xl">
                          {service.number}
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-base leading-snug text-[#1A2332] sm:mt-7 sm:text-2xl">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-xs leading-5 text-stone-600 sm:mt-4 sm:text-sm sm:leading-7">
                        {service.description}
                      </p>

                      <ul className="mt-5 space-y-2 sm:mt-7 sm:space-y-3">
                        {service.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-2 text-[10px] leading-4 text-stone-700 sm:gap-3 sm:text-sm sm:leading-6"
                          >
                            <CheckCircle2
                              size={13}
                              className="mt-0.5 shrink-0 text-[#7A1C1C] sm:h-4 sm:w-4"
                            />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Methodology / Workflow */}
        <section
          id="methodology"
          className="scroll-mt-24 py-16 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
            <Reveal>
              <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-16">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7A1C1C] sm:text-xs">
                  Our Process
                </p>
                <h2 className="mt-3 font-serif text-2xl text-[#1A2332] sm:mt-4 sm:text-5xl">
                  A structured approach to research support.
                </h2>
                <p className="mt-4 text-sm leading-6 text-stone-600 sm:mt-5 sm:leading-7">
                  From initial consultation to analytical guidance, every
                  engagement follows a clear and collaborative process.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-3 gap-3 sm:gap-8">
              {workflow.map((step, index) => {
                const Icon = step.icon;

                return (
                  <Reveal key={step.number} delay={index * 120}>
                    <article className="relative h-full">
                      <div className="flex items-center justify-between border-b border-stone-200 pb-4 sm:pb-6">
                        <Icon
                          size={21}
                          strokeWidth={1.5}
                          className="text-[#7A1C1C] sm:h-7 sm:w-7"
                        />
                        <span className="font-serif text-2xl text-stone-300 sm:text-4xl">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-sm leading-snug text-[#1A2332] sm:mt-7 sm:text-xl">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-[10px] leading-4 text-stone-600 sm:mt-4 sm:text-sm sm:leading-7">
                        {step.description}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Research Tools */}
        <section
          id="tools"
          className="scroll-mt-24 bg-stone-100/70 py-14 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
            <Reveal>
              <div className="grid grid-cols-[1fr_1.5fr] items-center gap-5 sm:gap-10 md:grid-cols-[1fr_2fr]">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7A1C1C] sm:text-xs">
                    Analytical Resources
                  </p>
                  <h2 className="mt-3 font-serif text-2xl text-[#1A2332] sm:mt-4 sm:text-4xl">
                    Tools for rigorous research.
                  </h2>
                </div>

                <div>
                  <p className="text-xs leading-6 text-stone-600 sm:text-base sm:leading-8">
                    Our analytical workflow may incorporate established
                    statistical and research software, selected according
                    to the requirements of each study and the nature of
                    the available data.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
                    {["SPSS", "R", "Python", "Jamovi"].map((tool) => (
                      <span
                        key={tool}
                        className="border border-stone-300 bg-[#FDFBF7] px-3 py-2 font-serif text-sm text-[#1A2332] sm:px-5 sm:py-3 sm:text-lg"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact and Map */}
        <section
          id="contact"
          className="scroll-mt-24 py-16 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
            <Reveal>
              <div className="mb-9 max-w-2xl sm:mb-14">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7A1C1C] sm:text-xs">
                  Get in Touch
                </p>
                <h2 className="mt-3 font-serif text-2xl text-[#1A2332] sm:mt-4 sm:text-5xl">
                  Visit Our Research Advisory Office
                </h2>
                <p className="mt-4 text-sm leading-6 text-stone-600 sm:mt-5 sm:leading-7">
                  Connect with our team to discuss your research
                  requirements and explore how we can assist.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 items-start gap-4 sm:gap-10 lg:gap-14">
              {/* Contact Information */}
              <Reveal>
                <div>
                  <div className="space-y-5 sm:space-y-8">
                    <div className="flex gap-2 sm:gap-5">
                      <Mail
                        className="mt-1 shrink-0 text-[#7A1C1C]"
                        size={17}
                      />
                      <div className="min-w-0">
                        <h3 className="text-xs font-semibold text-[#1A2332] sm:text-base">
                          Email
                        </h3>
                        <p className="mt-2 break-words text-xs leading-5 text-stone-600 sm:text-sm sm:leading-7">
                          jnaeduc@yahoo.com.ph
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2 sm:gap-5">
                      <Phone
                        className="mt-1 shrink-0 text-[#7A1C1C]"
                        size={17}
                      />
                      <div className="min-w-0">
                        <h3 className="text-xs font-semibold text-[#1A2332] sm:text-base">
                          Phone
                        </h3>
                        <p className="mt-2 break-words text-xs leading-5 text-stone-600 sm:text-sm sm:leading-7">
                          +63 9985304047
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2 sm:gap-5">
                      <Clock
                        className="mt-1 shrink-0 text-[#7A1C1C]"
                        size={17}
                      />
                      <div className="min-w-0">
                        <h3 className="text-xs font-semibold text-[#1A2332] sm:text-base">
                          Operating Hours
                        </h3>
                        <p className="mt-2 break-words text-xs leading-5 text-stone-600 sm:text-sm sm:leading-7">
                          [Operating days and hours]
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2 sm:gap-5">
                      <MapPin
                        className="mt-1 shrink-0 text-[#7A1C1C]"
                        size={17}
                      />
                      <div className="min-w-0">
                        <h3 className="text-xs font-semibold text-[#1A2332] sm:text-base">
                          Address
                        </h3>
                        <p className="mt-2 break-words text-xs leading-5 text-stone-600 sm:text-sm sm:leading-7">
                          Calamba Laguna, Brgy Barandal
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="mailto:YOUR_EMAIL_ADDRESS"
                    className="mt-6 inline-flex items-center gap-2 bg-[#7A1C1C] px-3 py-3 text-[10px] font-semibold text-white transition-colors hover:bg-[#5F1515] sm:mt-10 sm:gap-3 sm:px-7 sm:py-4 sm:text-sm"
                  >
                    Request Consultation
                    <ArrowRight size={14} />
                  </a>
                </div>
              </Reveal>

              {/* Map */}
              <Reveal delay={150}>
                <div
                  id="location"
                  className="aspect-[4/5] min-h-[220px] scroll-mt-24 overflow-hidden rounded-sm border border-stone-200 bg-stone-100 shadow-sm sm:aspect-square sm:min-h-[350px]"
                >
                  <iframe
                    title="Casiciaco Research Advisory Office location"
                    src="https://www.google.com/maps?q=Calamba,+Laguna,+Philippines&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, width: "100%", height: "100%" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* Navbar and Footer are rendered globally in App.tsx */}
    </div>
  );
}

export default Home;
