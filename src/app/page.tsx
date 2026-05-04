import Image from "next/image";
import { cv } from "@/data/cv";
import { ProjectSlideshow } from "./components/ProjectSlideshow";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-col">
        <div className="mx-auto w-full max-w-6xl px-8 sm:px-12 pt-16 sm:pt-20 pb-16 sm:pb-20 space-y-20">
          <Section title="About" id="about">
            <About />
          </Section>
          <Section title="Experience" id="experience">
            <Experience />
          </Section>
        </div>

        <PassionProjects />

        <div className="mx-auto w-full max-w-6xl px-8 sm:px-12 pt-16 sm:pt-20 space-y-20">
          <Section title="Education" id="education">
            <Education />
          </Section>
          <Section title="Skills" id="skills">
            <Skills />
          </Section>
        </div>
      </main>

      <section
        id="open-source"
        aria-labelledby="open-source-heading"
        className="mx-auto w-full max-w-6xl px-8 sm:px-12 pt-16"
      >
        <OpenSourceCta />
      </section>

      <section
        id="cv"
        aria-labelledby="cv-heading"
        className="mx-auto w-full max-w-6xl px-8 sm:px-12 pb-20 pt-8"
      >
        <PdfCta />
      </section>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="relative overflow-hidden border-b border-beige-200 bg-gradient-to-b from-beige-100 via-beige-50 to-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-32 h-80 w-80 rounded-full bg-beige-300/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-beige-200/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-beige-300) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-8 sm:px-12 py-12 sm:py-16">
        <div className="flex items-start gap-5 sm:gap-6">
          <Image
            src="/vanja_slika.png"
            alt={`Portrait of ${cv.name}`}
            width={800}
            height={800}
            priority
            className="h-24 w-24 sm:h-28 sm:w-28 shrink-0 rounded-full object-cover ring-1 ring-beige-200 shadow-[0_1px_2px_rgba(60,40,15,0.06),0_8px_24px_-12px_rgba(60,40,15,0.18)]"
          />
          <div className="min-w-0">
            <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
              {cv.name}
            </h1>
            <div
              aria-hidden="true"
              className="mt-3 h-[3px] w-12 rounded-full bg-beige-900"
            />
            <p className="mt-3 text-lg text-beige-600">{cv.role}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-beige-200 bg-white/80 backdrop-blur-sm px-3 py-1 text-beige-700 shadow-[0_1px_2px_rgba(60,40,15,0.04)]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 text-beige-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21s-7-6.2-7-12a7 7 0 1 1 14 0c0 5.8-7 12-7 12z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            {cv.location}
          </span>

          <a
            href={`mailto:${cv.email}`}
            className="group inline-flex items-center gap-1.5 rounded-full border border-beige-200 bg-white/80 backdrop-blur-sm px-3 py-1 text-beige-700 shadow-[0_1px_2px_rgba(60,40,15,0.04)] transition-colors hover:border-beige-400 hover:text-beige-900"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 text-beige-500 transition-colors group-hover:text-beige-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            {cv.email}
          </a>

          {cv.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full border border-beige-200 bg-white/80 backdrop-blur-sm px-3 py-1 text-beige-700 shadow-[0_1px_2px_rgba(60,40,15,0.04)] transition-colors hover:border-beige-400 hover:text-beige-900"
            >
              {l.label}
              <span
                aria-hidden="true"
                className="text-beige-400 transition-colors group-hover:text-beige-700"
              >
                ↗
              </span>
            </a>
          ))}
        </div>

        <nav
          aria-label="Sections"
          className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-beige-500"
        >
          <a href="#about" className="hover:text-beige-900">About</a>
          <a href="#experience" className="hover:text-beige-900">Experience</a>
          <a href="#projects" className="hover:text-beige-900">Projects</a>
          <a href="#education" className="hover:text-beige-900">Education</a>
          <a href="#skills" className="hover:text-beige-900">Skills</a>
          <a href="#open-source" className="hover:text-beige-900">Open Source</a>
          <a href="#cv" className="hover:text-beige-900">PDF CV</a>
        </nav>
      </div>
    </header>
  );
}

function Section({
  title,
  id,
  children,
}: {
  title: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={`${id}-heading`}>
      <div className="mb-7 flex items-baseline gap-4 border-b border-beige-200 pb-3">
        <h2
          id={`${id}-heading`}
          className="text-2xl sm:text-3xl font-semibold tracking-tight scroll-mt-24"
        >
          {title}
        </h2>
      </div>
      <div id={id} className="scroll-mt-24">{children}</div>
    </section>
  );
}

function About() {
  return (
    <p className="max-w-3xl text-beige-700 leading-relaxed text-[1.0625rem]">
      {cv.about}
    </p>
  );
}

function Experience() {
  return (
    <ol className="space-y-10">
      {cv.experience.map((job) => (
        <li
          key={`${job.company}-${job.period}`}
          className="grid gap-3 md:grid-cols-[14rem_1fr] md:gap-10"
        >
          <div className="text-sm text-beige-500 md:pt-1">{job.period}</div>
          <div className="max-w-3xl">
            <h3 className="text-base font-medium">
              {job.role}
              <span className="text-beige-500"> · {job.company}</span>
            </h3>
            {job.location && (
              <p className="text-sm text-beige-500">{job.location}</p>
            )}
            <p className="mt-2 text-beige-700 leading-relaxed">
              {job.description}
            </p>
            {job.highlights && job.highlights.length > 0 && (
              <ul className="mt-3 list-disc pl-5 space-y-1 text-beige-700 marker:text-beige-400">
                {job.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

function Education() {
  return (
    <div className="space-y-10">
      {cv.education.map((ed) => (
        <div
          key={`${ed.school}-${ed.period}`}
          className="grid gap-3 md:grid-cols-[14rem_1fr] md:gap-10"
        >
          <div className="text-sm text-beige-500 md:pt-1">{ed.period}</div>
          <div className="max-w-3xl">
            <h3 className="text-base font-medium">
              {ed.degree}
              <span className="text-beige-500"> · {ed.school}</span>
            </h3>
            {ed.projects.length > 0 && (
              <div className="mt-5">
                <p className="text-xs uppercase tracking-[0.18em] text-beige-500">
                  College projects
                </p>
                <ul className="mt-3 space-y-3">
                  {ed.projects.map((p) => (
                    <li key={p.github} className="text-sm">
                      <span className="font-medium text-beige-900">
                        {p.name}
                      </span>
                      <span className="text-beige-700">
                        {" "}
                        — {p.description}{" "}
                      </span>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-beige-900 underline underline-offset-4 hover:text-beige-600"
                      >
                        GitHub
                        <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <div className="grid gap-12 md:grid-cols-[14rem_1fr] md:gap-10">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-beige-500">
          Languages
        </p>
        <ul className="mt-3 space-y-2 max-w-md">
          {cv.skills.languages.map((l) => (
            <li
              key={l.name}
              className="flex items-baseline justify-between gap-4 border-b border-dashed border-beige-200 pb-2"
            >
              <span className="text-beige-900">{l.name}</span>
              <span className="text-sm text-beige-500">{l.level}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.18em] text-beige-500">
          Technical
        </p>
        <dl className="space-y-5">
          {cv.skills.technical.map((group) => (
            <div
              key={group.label}
              className="grid gap-2 sm:grid-cols-[12rem_1fr] sm:gap-6"
            >
              <dt className="text-sm font-medium text-beige-900 sm:pt-1">
                {group.label}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-beige-300 bg-white px-3 py-1 text-sm text-beige-700"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function PassionProjects() {
  return (
    <section
      aria-labelledby="projects-heading"
      id="projects"
      className="scroll-mt-24 border-y border-beige-200 bg-beige-100"
    >
      <div className="mx-auto w-full max-w-6xl px-8 sm:px-12 py-20 sm:py-24">
        <div className="mb-10 flex items-baseline gap-4">
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            Passion Projects
          </h2>
          <span
            className="ml-auto h-px flex-1 bg-beige-200"
            aria-hidden="true"
          />
        </div>
        <p className="max-w-2xl text-beige-600 mb-12">
          Two things I built and ship myself. These are the projects I want you
          to see — open them and have a look around.
        </p>

        <div className="space-y-12">
          {cv.passionProjects.map((p, i) => (
            <article
              key={p.url}
              className="rounded-2xl border border-beige-200 bg-white shadow-[0_1px_2px_rgba(60,40,15,0.04),0_8px_24px_-12px_rgba(60,40,15,0.10)] overflow-hidden"
            >
              <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
                <div className="p-8 sm:p-10 lg:order-2 lg:border-l lg:border-beige-200">
                  <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-5 text-beige-700 leading-relaxed">
                    {p.description}
                  </p>

                  {p.stack.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-beige-300 bg-white px-3 py-1 text-xs text-beige-600"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-beige-900 bg-beige-900 px-5 py-2.5 text-sm font-medium text-beige-50 transition-colors hover:bg-white hover:text-beige-900"
                    >
                      Visit website
                      <span aria-hidden="true">→</span>
                    </a>
                    <span
                      className="inline-flex items-center text-sm text-beige-500"
                      aria-hidden="true"
                    >
                      {p.url.replace(/^https?:\/\//, "")}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:order-1 bg-beige-50 lg:bg-transparent">
                  <ProjectSlideshow images={p.images} orientation={p.orientation} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpenSourceCta() {
  return (
    <div className="rounded-2xl border border-beige-200 bg-white p-8 sm:p-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2
          id="open-source-heading"
          className="mt-2 text-2xl font-semibold tracking-tight scroll-mt-24"
        >
          Open Source
        </h2>
        <p className="mt-2 text-beige-600 max-w-md">
          {cv.openSource.intro} {cv.openSource.repoLabel}.
        </p>
      </div>
      <a
        href={cv.openSource.repoUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 self-start rounded-md border border-beige-900 bg-beige-900 px-5 py-2.5 text-sm font-medium text-beige-50 transition-colors hover:bg-white hover:text-beige-900"
      >
        View on GitHub
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}

function PdfCta() {
  return (
    <div className="rounded-2xl border border-beige-200 bg-white p-8 sm:p-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2
          id="cv-heading"
          className="mt-2 text-2xl font-semibold tracking-tight scroll-mt-24"
        >
          Looking for the PDF?
        </h2>
        <p className="mt-2 text-beige-600 max-w-md">
          Open or download a printable version of my CV.
        </p>
      </div>
      <a
        href={cv.pdfUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 self-start rounded-md border border-beige-900 bg-beige-900 px-5 py-2.5 text-sm font-medium text-beige-50 transition-colors hover:bg-white hover:text-beige-900"
      >
        View PDF CV
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-auto border-t border-beige-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-8 sm:px-12 py-8 flex flex-wrap items-center justify-between gap-3 text-sm text-beige-500">
        <p>
          © {new Date().getFullYear()} {cv.name}
        </p>
        <a
          href={`mailto:${cv.email}`}
          className="hover:text-beige-900 underline-offset-4 hover:underline"
        >
          {cv.email}
        </a>
      </div>
    </footer>
  );
}
