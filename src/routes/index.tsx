import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import yousefPortrait from "@/assets/yousef.png";
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  ArrowUpRight,
  Menu,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";

const SITE_URL = "https://yousefmaitah.com";
const RESUME = "/yousef-maitah-resume.pdf";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Yousef Maitah - Electrical Engineer" },
      {
        name: "description",
        content:
          "Yousef Maitah - Electrical Engineer at General Motors and Michigan EE grad. Driveline mechatronics, embedded systems, and processor design.",
      },
      { property: "og:title", content: "Yousef Maitah - Electrical Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of Yousef Maitah: GM propulsion engineering, RISC-V design, embedded IoT, and control systems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}/og-image.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Yousef Maitah - Electrical Engineer" },
      {
        name: "twitter:description",
        content:
          "Portfolio of Yousef Maitah: GM propulsion engineering, RISC-V design, embedded IoT, and control systems.",
      },
      { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
});

function Index() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Nav />
      <Hero />
      <Introduction />
      <Experience />
      <Projects />
      <Contact />
      <Links />
      <Footer />
    </main>
  );
}

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "#links", label: "Links" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-secondary">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="text-lg font-bold text-primary">
          Yousef Maitah
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground sm:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition hover:text-primary sm:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <nav className="mt-10 flex flex-col gap-1 text-base font-medium">
              {navLinks.map((l) => (
                <SheetClose asChild key={l.href}>
                  <a
                    href={l.href}
                    className="rounded-md px-2 py-3 text-foreground transition hover:bg-secondary hover:text-primary"
                  >
                    {l.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-secondary px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-5xl font-bold text-primary md:text-6xl">
            Yousef Maitah
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Electrical Engineer @ General Motors · University of Michigan
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 font-medium text-white transition hover:bg-primary-hover"
            >
              Contact Me
            </a>
            <a
              href={RESUME}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-2.5 font-medium text-primary transition hover:bg-primary hover:text-white"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={yousefPortrait}
            alt="Yousef Maitah"
            className="card-image w-full max-w-xs object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section id="about" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">
          Introduction
        </h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground md:px-4">
          <p>
            I&apos;m an Electrical Engineering graduate from the University of
            Michigan (December 2025).
          </p>
          <p>
            I&apos;m currently a Virtual Propulsion Engineer at General Motors
            within the Energy Model and Toolchain Development team, where I
            focus on advancing propulsion simulation and modeling capabilities.
          </p>
          <p>
            My professional background includes a previous role at GM in the
            Driveline Development and Integration group, as well as two
            internships at Nexteer Automotive where I specialized in the
            validation of electric power steering systems.
          </p>
          <p className="text-muted-foreground">
            <span className="font-semibold text-primary">Goal:</span> work on
            innovative projects that make a meaningful impact on the world.
          </p>
        </div>
      </div>
    </section>
  );
}

const experiences = [
  {
    org: "General Motors",
    role: "Engineering Intern — Driveline Development & Integration",
    period: "May 2025 – Aug 2025 · Milford, MI",
    desc: "Supported driveline mechatronics and controls integration on the D2-2 AWD system (Chevy Equinox / GMC Terrain), and ran on-road and off-road data collection for wheel torque and driveline dynamics — including −40°C cold-box and sand-dune testing.",
  },
  {
    org: "Nexteer Automotive",
    role: "Engineering Intern — Systems Application Team",
    period: "May 2024 – Aug 2024 · Saginaw, MI",
    desc: "Developed an ignition test box for a Steer-by-Wire project to expand test coverage, and analyzed OEM design, safety, and software requirements to strengthen feature-function mapping.",
  },
  {
    org: "Nexteer Automotive",
    role: "Engineering Intern — ECU HiL Team",
    period: "May 2023 – Aug 2023 · Auburn Hills, MI",
    desc: "Designed and executed test procedures for ECU-based electric power steering, and configured and debugged harness/test bench setups — improving testing efficiency by 30%.",
  },
];

function Experience() {
  return (
    <section className="bg-secondary px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">
          Work Experience
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {experiences.map((e, i) => (
            <article
              key={i}
              className="card-work flex w-full flex-col rounded-lg border border-border bg-card p-6 md:w-[calc(50%-0.75rem)]"
            >
              <h3 className="text-xl font-semibold text-primary">{e.org}</h3>
              <p className="mt-1 font-medium">{e.role}</p>
              <p className="mt-1 text-sm text-muted-foreground">{e.period}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {e.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Out-of-Order RISC-V Processor",
    tag: "SystemVerilog",
    desc: "A fully synthesizable N-way superscalar out-of-order processor with instruction prefetching and early branch resolution. MIPS R10000-style microarchitecture with register renaming.",
    report: "/EECS_470_Final_Project_Report.pdf",
  },
  {
    title: "Smart Room Occupancy Monitoring",
    tag: "C · ESP32 · IoT",
    desc: "An IoT room-occupancy sensor combining Time-of-Flight and PIR sensors for direction tracking, with wireless transmission to a central server for live monitoring — 90% detection accuracy.",
    report: "/smart-room-occupancy-report.pdf",
  },
  {
    title: "8-bit Dual-Mode Ripple-Carry Adder",
    tag: "Cadence Virtuoso",
    desc: "A dual-mode ripple-carry adder optimized for addition and accumulation. Transistor sizing hit a 1 GHz clock in high-speed mode while cutting power 17.2% in low-power mode versus a mirror adder.",
    report: "/EECS_312_Final_Project_Report.pdf",
  },
  {
    title: "Maglev PID Controller",
    tag: "MATLAB · Simulink",
    desc: "A PID controller built on a linearized model of a nonlinear magnetic-levitation plant. Validated with hardware-in-the-loop testing — sub-3-second settling time and zero steady-state error.",
    report: "/MAGLEV_Report.pdf",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-primary px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Projects</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {projects.map((p, i) => (
            <article
              key={i}
              className="card-work flex w-full flex-col rounded-lg bg-card p-6 md:w-[calc(50%-0.75rem)]"
            >
              <h3 className="text-xl font-semibold text-primary">{p.title}</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {p.tag}
              </p>
              <p className="mt-4 flex-1 leading-relaxed text-foreground">
                {p.desc}
              </p>
              {p.report && (
                <a
                  href={p.report}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 font-medium text-primary transition hover:text-primary-hover"
                >
                  <FileText className="h-4 w-4" /> Read the report
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">
          Contact Info
        </h2>
        <div className="mt-6 md:px-4">
          <p className="text-lg text-foreground">
            Feel free to reach me at{" "}
            <a
              href="mailto:yousefm@umich.edu"
              className="font-medium text-primary hover:text-primary-hover"
            >
              yousefm@umich.edu
            </a>
            !
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="mailto:yousefm@umich.edu"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 font-medium text-white transition hover:bg-primary-hover"
            >
              <Mail className="h-4 w-4" /> Email Me
            </a>
            <a
              href={RESUME}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-2.5 font-medium text-primary transition hover:bg-primary hover:text-white"
            >
              <FileText className="h-4 w-4" /> Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const links = [
  {
    icon: Linkedin,
    label: "linkedin.com/in/yousef-maitah",
    href: "https://linkedin.com/in/yousef-maitah/",
  },
  {
    icon: Github,
    label: "github.com/ymaitah",
    href: "https://github.com/ymaitah",
  },
  {
    icon: Mail,
    label: "yousefm@umich.edu",
    href: "mailto:yousefm@umich.edu",
  },
];

function Links() {
  return (
    <section id="links" className="bg-secondary px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">Links</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="card-work group flex items-center gap-3 rounded-lg border border-border bg-card p-5 transition hover:border-primary"
              >
                <Icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="truncate text-sm font-medium">{l.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto max-w-5xl text-center text-sm text-muted-foreground">
        © 2026 Yousef Maitah · Ann Arbor, MI
      </div>
    </footer>
  );
}
