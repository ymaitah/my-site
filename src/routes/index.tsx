import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import yousefPhoto from "@/assets/yousef-photo.webp";

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

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const experiences = [
  {
    company: "General Motors",
    role: "Engineering Intern · Driveline Development & Integration",
    period: "May 2025 – Aug 2025",
    location: "Milford, MI",
    bullets: [
      "Supported driveline mechatronics and controls integration on the D2-2 AWD system (Chevy Equinox / GMC Terrain), investigating warranty and resolving system performance and software issues.",
      "Conducted on-road and off-road data collection for wheel torque and driveline dynamics — including −40°C cold-box and sand-dune terrain testing.",
      "Collaborated cross-functionally with technical specialists, DREs, and suppliers to assess halfshaft NVH characteristics.",
    ],
  },
  {
    company: "Nexteer Automotive",
    role: "Engineering Intern · Systems Application Team",
    period: "May 2024 – Aug 2024",
    location: "Saginaw, MI",
    bullets: [
      "Developed an ignition test box for a Steer-by-Wire project, expanding test coverage and reliability.",
      "Analyzed OEM design, safety, and software requirements to strengthen feature-function mapping.",
      "Authored detailed work instructions to accelerate testing and knowledge transfer.",
    ],
  },
  {
    company: "Nexteer Automotive",
    role: "Engineering Intern · ECU HiL Team",
    period: "May 2023 – Aug 2023",
    location: "Auburn Hills, MI",
    bullets: [
      "Designed and executed test procedures for ECU-based electric power steering, improving system reliability.",
      "Configured and debugged harness/test bench setups, cutting setup time and improving testing efficiency by 30%.",
      "Analyzed test data to identify patterns and anomalies, delivering detailed reports and recommendations.",
    ],
  },
];

const projects = [
  {
    title: "Out-of-Order RISC-V Processor",
    tag: "SystemVerilog",
    period: "Oct – Dec 2025",
    desc: "A fully synthesizable N-way superscalar out-of-order processor with instruction prefetching and early branch resolution. MIPS R10000-style microarchitecture with register renaming.",
    report: "/EECS_470_Final_Project_Report.pdf",
  },
  {
    title: "Smart Room Occupancy Monitoring",
    tag: "C · ESP32 · IoT",
    period: "Oct – Dec 2025",
    desc: "An IoT room-occupancy sensor combining Time-of-Flight and PIR sensors for direction tracking, transmitting to a central server for live monitoring at 90% detection accuracy.",
    report: "/smart-room-occupancy-report.pdf",
  },
  {
    title: "8-bit Dual-Mode Ripple-Carry Adder",
    tag: "Cadence Virtuoso",
    period: "Nov – Dec 2024",
    desc: "A dual-mode ripple-carry adder optimized for addition and accumulation. Transistor sizing hit a 1 GHz clock in high-speed mode while cutting power 17.2% in low-power mode versus a mirror adder.",
    report: "/EECS_312_Final_Project_Report.pdf",
  },
  {
    title: "Maglev PID Controller",
    tag: "MATLAB · Simulink",
    period: "Mar – Apr 2025",
    desc: "A PID controller built on a linearized model of a nonlinear magnetic-levitation plant. Validated with hardware-in-the-loop testing — sub-3-second settling time and zero steady-state error.",
    report: "/MAGLEV_Report.pdf",
  },
];

const skillGroups = [
  {
    label: "Languages",
    items: ["C / C++", "Python", "SystemVerilog", "MATLAB", "HTML / CSS"],
  },
  {
    label: "Tools",
    items: [
      "Altium Designer",
      "Cadence Virtuoso",
      "Simulink",
      "Vector Tools",
      "Arduino",
      "Linux",
      "Git",
      "VS Code",
      "Oscilloscope",
    ],
  },
  {
    label: "Techniques",
    items: [
      "Circuit Design",
      "FPGA",
      "Hardware Validation",
      "Communication Protocols",
      "Soldering",
      "System Design",
    ],
  },
];

const courses = [
  { code: "EECS 270", title: "Introduction to Logic Design" },
  { code: "EECS 312", title: "Digital Integrated Circuits" },
  { code: "EECS 320", title: "Semiconductor Devices" },
  { code: "EECS 370", title: "Computer Organization" },
  { code: "EECS 470", title: "Computer Architecture" },
  { code: "EECS 460", title: "Control Systems Analysis & Design" },
  { code: "EECS 216", title: "Signals and Systems" },
  { code: "EECS 215", title: "Introduction to Electrical Circuits" },
  { code: "EECS 230", title: "Engineering Electromagnetics" },
  { code: "EECS 250", title: "Electrical Sensing Systems" },
  { code: "EECS 280", title: "Programming and Data Structures" },
  { code: "EECS 301", title: "Probabilistic Methods in Engineering" },
];

function Eyebrow({ children, light }: { children: string; light?: boolean }) {
  return (
    <div className={`eyebrow mb-2${light ? " eyebrow--light" : ""}`}>
      <span className="eyebrow-tick" />
      {children}
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  // Starts "light" to match SSR; the inline head script has already applied the
  // real theme, so we sync to it on mount.
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (document.documentElement.getAttribute("data-bs-theme") === "dark") {
      setTheme("dark");
    }
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-bs-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable — theme still applies for this session */
    }
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-sm bg-secondary sticky-top border-bottom">
        <div className="container">
          <a className="navbar-brand" href="#top">
            Yousef Maitah
          </a>
          <div className="d-flex align-items-center gap-2 order-sm-3">
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <Sun size={16} strokeWidth={2} />
              ) : (
                <Moon size={16} strokeWidth={2} />
              )}
            </button>
            <button
              className="navbar-toggler"
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div
            className={`collapse navbar-collapse order-sm-2${open ? " show" : ""}`}
          >
            <div className="navbar-nav ms-auto">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  className="nav-link"
                  href={l.href}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="section bg-secondary">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-7">
              <Eyebrow>Electrical Engineer · Ann Arbor, MI</Eyebrow>
              <h1 className="display-2 fw-bold text-primary mb-3">
                Yousef Maitah
              </h1>
              <p
                className="fs-5 text-body-secondary mb-4"
                style={{ maxWidth: "34rem" }}
              >
                Electrical engineer working where hardware meets software — from
                driveline mechatronics and embedded systems to processor design.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a className="btn btn-primary px-4" href="#contact">
                  Get in touch
                </a>
                <a
                  className="btn btn-outline-primary px-4"
                  href={RESUME}
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </div>
            </div>
            <div className="col-md-5 text-center">
              <img
                className="img-fluid card-image"
                src={yousefPhoto}
                alt="Yousef Maitah"
              />
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <Eyebrow>Who I am</Eyebrow>
          <h2 className="section-title display-6">About</h2>
          <div className="row">
            <div className="col-lg-9">
              <p className="fs-5">
                I&apos;m an Electrical Engineering graduate from the{" "}
                <span className="text-primary fw-semibold">
                  University of Michigan
                </span>{" "}
                (December 2025), drawn to problems that span the whole stack —
                from transistors and PCBs up to the control software that ties
                them together.
              </p>
              <p className="fs-5">
                I&apos;m currently a{" "}
                <span className="text-primary fw-semibold">
                  Virtual Propulsion Engineer at General Motors
                </span>{" "}
                within the Energy Model and Toolchain Development team, where I
                focus on advancing propulsion simulation and modeling
                capabilities. Before that I spent three summers in automotive
                engineering — driveline mechatronics at GM, and steering systems
                validation at Nexteer Automotive.
              </p>
              <p className="fs-5 mb-0">
                My favorite work lives where hardware meets software: designing
                an out-of-order RISC-V processor, building embedded IoT sensors,
                and tuning control systems for real-world plants. My goal is to
                work on innovative projects that make a meaningful impact on the
                world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section bg-secondary">
        <div className="container">
          <Eyebrow>Where I studied</Eyebrow>
          <h2 className="section-title display-6">Education</h2>
          <div className="card border-0 shadow-sm p-4">
            <div className="row align-items-center g-3">
              <div className="col-md-8">
                <h3 className="h4 mb-1 text-primary">University of Michigan</h3>
                <p className="mb-2">
                  B.S. in Electrical Engineering · GPA 3.7 / 4.0
                </p>
                <div className="eyebrow">
                  James B. Angell Scholar · Dean&apos;s List · University Honors
                </div>
              </div>
              <div className="col-md-4 text-md-end">
                <span className="mono text-body-secondary">
                  Aug 2021 – Dec 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <div className="container">
          <Eyebrow>Where I&apos;ve worked</Eyebrow>
          <h2 className="section-title display-6">Experience</h2>
          <div>
            {experiences.map((e, i) => (
              <div key={i} className="exp-item row py-4">
                <div className="col-md-4 mb-2 mb-md-0">
                  <div className="mono small text-primary">{e.period}</div>
                  <div className="mono small text-body-secondary mt-1">
                    {e.location}
                  </div>
                </div>
                <div className="col-md-8">
                  <h3 className="h4 mb-1 text-primary">{e.company}</h3>
                  <div className="mono small text-body-secondary mb-3">
                    {e.role}
                  </div>
                  <ul className="exp-list">
                    {e.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section band">
        <div className="container">
          <Eyebrow light>Things I&apos;ve built</Eyebrow>
          <h2 className="section-title display-6 text-white">
            Selected Projects
          </h2>
          <div className="row g-4">
            {projects.map((p, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="card card-work h-100 border-0 p-4">
                  <div
                    className="mono text-body-secondary"
                    style={{ fontSize: "0.72rem" }}
                  >
                    {p.period.toUpperCase()}
                  </div>
                  <h3 className="h5 mt-2 mb-1 text-primary">{p.title}</h3>
                  <div className="mono small text-body-secondary mb-3">
                    {p.tag}
                  </div>
                  <p className="text-body-secondary flex-grow-1 small">
                    {p.desc}
                  </p>
                  <a
                    className="mono small text-decoration-none"
                    href={p.report}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read report →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="container">
          <Eyebrow>What I work with</Eyebrow>
          <h2 className="section-title display-6">Toolkit</h2>
          <div className="row g-4">
            {skillGroups.map((g) => (
              <div key={g.label} className="col-md-4">
                <div className="eyebrow mb-3">{g.label}</div>
                <div className="d-flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coursework */}
      <section id="coursework" className="section bg-secondary">
        <div className="container">
          <Eyebrow>Selected coursework</Eyebrow>
          <h2 className="section-title display-6">Coursework</h2>
          <div className="row g-3">
            {courses.map((c) => (
              <div key={c.code} className="col-sm-6 col-lg-4">
                <div className="course">
                  <span className="mono fw-semibold text-primary">
                    {c.code}
                  </span>
                  <span className="text-body-secondary small ms-2">
                    {c.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <Eyebrow>Say hello</Eyebrow>
          <h2 className="section-title display-6">Get in touch</h2>
          <p className="fs-5" style={{ maxWidth: "34rem" }}>
            I&apos;m always happy to talk hardware, software, or something in
            between. Reach me at{" "}
            <a href="mailto:yousefm@umich.edu">yousefm@umich.edu</a>.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <a className="btn btn-primary px-4" href="mailto:yousefm@umich.edu">
              Email Me
            </a>
            <a
              className="btn btn-outline-primary px-4"
              href="https://linkedin.com/in/yousef-maitah/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn btn-outline-primary px-4"
              href="https://github.com/ymaitah"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn btn-outline-primary px-4"
              href={RESUME}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-4 border-top">
        <div className="container d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
          <span className="mono small text-body-secondary">
            © 2026 Yousef Maitah
          </span>
          <span className="mono small text-body-secondary">
            Built in Ann Arbor, MI
          </span>
        </div>
      </footer>
    </div>
  );
}
