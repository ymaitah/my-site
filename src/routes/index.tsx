import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "#links", label: "Links" },
];

const experiences = [
  {
    org: "General Motors",
    text: "Engineering Intern — Driveline Development & Integration · Summer 2025",
  },
  {
    org: "Nexteer Automotive",
    text: "Engineering Intern — Systems Application Team · Summer 2024",
  },
  {
    org: "Nexteer Automotive",
    text: "Engineering Intern — ECU HiL Team · Summer 2023",
  },
];

const projects = [
  {
    title: "Out-of-Order RISC-V Processor",
    text: "A fully synthesizable N-way superscalar out-of-order processor with instruction prefetching and early branch resolution, using a MIPS R10000-style microarchitecture with register renaming.",
    report: "/EECS_470_Final_Project_Report.pdf",
  },
  {
    title: "Smart Room Occupancy Monitoring",
    text: "An IoT room-occupancy sensor combining Time-of-Flight and PIR sensors for direction tracking, transmitting to a central server for live monitoring at 90% detection accuracy.",
    report: "/smart-room-occupancy-report.pdf",
  },
  {
    title: "8-bit Dual-Mode Ripple-Carry Adder",
    text: "A dual-mode ripple-carry adder in Cadence Virtuoso — 1 GHz in high-speed mode and 17.2% lower power in low-power mode versus a traditional mirror adder.",
    report: "/EECS_312_Final_Project_Report.pdf",
  },
  {
    title: "Maglev PID Controller",
    text: "A PID controller on a linearized model of a nonlinear magnetic-levitation plant, validated with hardware-in-the-loop testing — sub-3-second settling and zero steady-state error.",
    report: "/MAGLEV_Report.pdf",
  },
];

function Index() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-sm navbar-light bg-secondary">
        <div className="container">
          <a className="navbar-brand" href="#top">
            Yousef Maitah
          </a>
          <button
            className="custom-toggler navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse${open ? " show" : ""}`}>
            <div className="navbar-nav">
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
      <div id="top" className="bg-secondary py-5 px-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <h1 className="text-primary fw-bold display-3">Yousef Maitah</h1>
              <p>
                Electrical Engineer @ General Motors · University of Michigan
              </p>
              <div className="text-center">
                <a className="btn btn-primary my-1 mx-3" href="#contact">
                  Contact Me
                </a>
                <a
                  className="btn btn-outline-primary my-1 mx-3"
                  href={RESUME}
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </div>
            </div>
            <div className="col-sm-6 text-center">
              <img
                className="img-fluid my-3 card-image"
                src={yousefPhoto}
                alt="Yousef Maitah"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div id="about" className="bg-white py-5 px-5">
        <div className="container">
          <h1 className="text-primary fw-bold">Introduction</h1>
          <div className="px-sm-5">
            <p>
              I&apos;m an Electrical Engineering graduate from the University of
              Michigan (December 2025).
            </p>
            <p>
              I&apos;m currently a Virtual Propulsion Engineer at General Motors
              within the Energy Model and Toolchain Development team, where I
              focus on advancing propulsion simulation and modeling
              capabilities.
            </p>
            <p>
              My professional background includes a previous role at GM in the
              Driveline Development and Integration group, as well as two
              internships at Nexteer Automotive where I specialized in the
              validation of electric power steering systems.
            </p>
            <p>
              <strong>Goal:</strong> work on innovative projects that make a
              meaningful impact on the world.
            </p>
          </div>
        </div>
      </div>

      {/* Work Experiences */}
      <div className="bg-secondary py-5 px-5">
        <div className="container">
          <h1 className="text-primary fw-bold">Work Experiences</h1>
          <div className="d-flex flex-row flex-wrap justify-content-center">
            {experiences.map((e, i) => (
              <div key={i} className="card py-3 px-3 mx-sm-4 my-4 card-work">
                <h4 className="text-primary">{e.org}</h4>
                <p className="text-dark">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="projects" className="bg-primary py-5 px-5">
        <div className="container">
          <h1 className="text-light fw-bold">Projects</h1>
          <div className="d-flex flex-row flex-wrap justify-content-center">
            {projects.map((p, i) => (
              <div key={i} className="card py-3 px-3 mx-sm-4 my-4 card-work">
                <h4 className="text-primary">{p.title}</h4>
                <p className="text-dark">{p.text}</p>
                <div className="text-end">
                  <a href={p.report} target="_blank" rel="noreferrer">
                    Report →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="bg-white py-5 px-5">
        <div className="container">
          <h1 className="text-primary fw-bold">Contact Info</h1>
          <div className="px-sm-5">
            <p>
              Feel free to reach me at{" "}
              <a href="mailto:yousefm@umich.edu">yousefm@umich.edu</a>!
            </p>
            <div>
              <a
                className="btn btn-primary my-1"
                href="mailto:yousefm@umich.edu"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div id="links" className="bg-secondary py-5 px-5">
        <div className="container">
          <h1 className="text-primary fw-bold">Links</h1>
          <div className="px-sm-5">
            <a
              className="btn btn-outline-primary my-1 me-3"
              href="https://linkedin.com/in/yousef-maitah/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn btn-outline-primary my-1 me-3"
              href="https://github.com/ymaitah"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn btn-outline-primary my-1 me-3"
              href={RESUME}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary py-4 px-5 border-top">
        <div className="container text-center text-muted">
          © 2026 Yousef Maitah · Ann Arbor, MI
        </div>
      </footer>
    </div>
  );
}
