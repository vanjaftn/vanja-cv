import { cv } from "@/data/cv";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-16 space-y-16">
        <About />
        <Experience />
        <Education />
        <Skills />
        <FeaturedProjects />
        <PdfCta />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto w-full max-w-3xl px-6 py-10 sm:py-14">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
          Curriculum Vitae
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
          {cv.name}
        </h1>
        <p className="mt-2 text-lg text-neutral-600">{cv.role}</p>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
          <span>{cv.location}</span>
          <a className="hover:text-neutral-900 underline-offset-4 hover:underline" href={`mailto:${cv.email}`}>
            {cv.email}
          </a>
          {cv.phone && <span>{cv.phone}</span>}
          {cv.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 underline-offset-4 hover:underline"
            >
              {l.label}
            </a>
          ))}
        </div>

        <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-500">
          <a href="#about" className="hover:text-neutral-900">About</a>
          <a href="#experience" className="hover:text-neutral-900">Experience</a>
          <a href="#education" className="hover:text-neutral-900">Education</a>
          <a href="#skills" className="hover:text-neutral-900">Skills</a>
          <a href="#projects" className="hover:text-neutral-900">Projects</a>
          <a href="#cv" className="hover:text-neutral-900">PDF CV</a>
        </nav>
      </div>
    </header>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-baseline justify-between border-b border-neutral-200 pb-3">
      <h2 id={id} className="text-2xl font-semibold tracking-tight scroll-mt-24">
        {children}
      </h2>
    </div>
  );
}

function About() {
  return (
    <section aria-labelledby="about">
      <SectionHeading id="about">About</SectionHeading>
      <p className="text-neutral-700 leading-relaxed">{cv.about}</p>
    </section>
  );
}

function Experience() {
  return (
    <section aria-labelledby="experience">
      <SectionHeading id="experience">Experience</SectionHeading>
      <ol className="space-y-8">
        {cv.experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="grid gap-2 sm:grid-cols-[10rem_1fr]">
            <div className="text-sm text-neutral-500 sm:pt-1">{job.period}</div>
            <div>
              <h3 className="text-base font-medium">
                {job.role}
                <span className="text-neutral-500"> · {job.company}</span>
              </h3>
              {job.location && (
                <p className="text-sm text-neutral-500">{job.location}</p>
              )}
              <p className="mt-2 text-neutral-700 leading-relaxed">
                {job.description}
              </p>
              {job.highlights && job.highlights.length > 0 && (
                <ul className="mt-3 list-disc pl-5 space-y-1 text-neutral-700">
                  {job.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Education() {
  return (
    <section aria-labelledby="education">
      <SectionHeading id="education">Education</SectionHeading>
      <div className="space-y-10">
        {cv.education.map((ed) => (
          <div key={`${ed.school}-${ed.period}`} className="grid gap-2 sm:grid-cols-[10rem_1fr]">
            <div className="text-sm text-neutral-500 sm:pt-1">{ed.period}</div>
            <div>
              <h3 className="text-base font-medium">
                {ed.degree}
                <span className="text-neutral-500"> · {ed.school}</span>
              </h3>
              {ed.description && (
                <p className="mt-2 text-neutral-700 leading-relaxed">
                  {ed.description}
                </p>
              )}

              {ed.projects.length > 0 && (
                <div className="mt-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                    College projects
                  </p>
                  <ul className="mt-3 space-y-3">
                    {ed.projects.map((p) => (
                      <li key={p.github} className="text-sm">
                        <span className="font-medium text-neutral-900">{p.name}</span>
                        <span className="text-neutral-700"> — {p.description} </span>
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-neutral-900 underline underline-offset-4 hover:text-neutral-600"
                        >
                          GitHub
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
    </section>
  );
}

function Skills() {
  return (
    <section aria-labelledby="skills">
      <SectionHeading id="skills">Skills</SectionHeading>
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
            Languages
          </p>
          <ul className="mt-3 space-y-2">
            {cv.skills.languages.map((l) => (
              <li key={l.name} className="flex items-baseline justify-between gap-4">
                <span className="text-neutral-900">{l.name}</span>
                <span className="text-sm text-neutral-500">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
            Technical
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {cv.skills.technical.map((t) => (
              <li
                key={t}
                className="rounded-full border border-neutral-300 px-3 py-1 text-sm text-neutral-700"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section aria-labelledby="projects">
      <SectionHeading id="projects">Featured Projects</SectionHeading>
      <div className="space-y-6">
        {cv.featuredProjects.map((p, i) => (
          <article
            key={p.url}
            className="group rounded-lg border border-neutral-300 bg-white p-6 sm:p-8 transition-colors hover:border-neutral-900"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                  Project {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-1 text-neutral-600">{p.tagline}</p>
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 inline-flex items-center gap-2 rounded-md border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-neutral-900 transition-colors"
              >
                Visit website
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <p className="mt-5 text-neutral-700 leading-relaxed">
              {p.description}
            </p>

            {p.stack.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-600"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function PdfCta() {
  return (
    <section aria-labelledby="cv" className="border-t border-neutral-200 pt-10">
      <h2 id="cv" className="text-2xl font-semibold tracking-tight scroll-mt-24">
        Looking for the PDF?
      </h2>
      <p className="mt-2 text-neutral-600">
        You can view or download a printable version of my CV.
      </p>
      <div className="mt-5">
        <a
          href={cv.pdfUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-neutral-900 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
        >
          View PDF CV
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-200">
      <div className="mx-auto w-full max-w-3xl px-6 py-8 flex flex-wrap items-center justify-between gap-3 text-sm text-neutral-500">
        <p>
          © {new Date().getFullYear()} {cv.name}
        </p>
        <a
          href={`mailto:${cv.email}`}
          className="hover:text-neutral-900 underline-offset-4 hover:underline"
        >
          {cv.email}
        </a>
      </div>
    </footer>
  );
}
