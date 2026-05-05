import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect } from "react";
import yousefPortrait from "@/assets/yousef.png";
import {
  Mail,
  Phone,
  MapPin,
  Cpu,
  CircuitBoard,
  Wrench,
  GraduationCap,
  ArrowUpRight,
  Linkedin,
  Github,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Yousef Maitah — Electrical Engineer" },
      {
        name: "description",
        content:
          "Yousef Maitah — Electrical Engineering at Michigan. Driveline mechatronics, embedded systems, and processor design.",
      },
      { property: "og:title", content: "Yousef Maitah — Electrical Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of Yousef Maitah: GM driveline integration, RISC-V design, embedded IoT, and control systems.",
      },
    ],
  }),
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -10% 0px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const fadeUpImmediate = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

function Index() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/70">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-tight">
          <span className="text-amber">/</span>ymaitah
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-mono text-muted-foreground">
          <a href="#experience" className="hover:text-foreground transition">experience</a>
          <a href="#projects" className="hover:text-foreground transition">projects</a>
          <a href="#skills" className="hover:text-foreground transition">skills</a>
          <a href="#contact" className="hover:text-foreground transition">contact</a>
        </nav>
        <a
          href="mailto:yousefm@umich.edu"
          className="text-sm font-mono px-4 py-2 border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition"
        >
          say hi →
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background portrait */}
      <div className="absolute inset-0 pointer-events-none flex justify-end items-center">
        <img
          src={yousefPortrait}
          alt=""
          aria-hidden
          className="h-[120%] max-h-[1000px] w-auto object-contain object-right opacity-[0.12] mix-blend-luminosity translate-x-[8%] md:translate-x-0 select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-32 md:pt-40 md:pb-48">
        <motion.div {...fadeUpImmediate} className="font-mono text-xs text-amber mb-8 flex items-center gap-3">
          <span className="h-px w-10 bg-amber" />
          ELECTRICAL ENGINEER · ANN ARBOR, MI
        </motion.div>

        <motion.h1
          {...fadeUpImmediate}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight"
        >
          Yousef
          <br />
          <span className="italic text-amber glow-amber">Maitah.</span>
        </motion.h1>

        <motion.p
          {...fadeUpImmediate}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-10 max-w-xl text-lg md:text-2xl text-muted-foreground leading-relaxed"
        >
          I design <span className="text-foreground font-medium">things</span>!
        </motion.p>

        <motion.div
          {...fadeUpImmediate}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 flex flex-wrap gap-3 font-mono text-xs"
        >
          {["Mechatronics", "Embedded", "FPGA / RTL", "Control Systems"].map((t) => (
            <span key={t} className="px-3 py-1.5 panel rounded-full">{t}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const experiences = [
  {
    company: "General Motors",
    role: "Engineering Intern — Driveline Development & Integration",
    location: "Milford, MI",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Supported driveline mechatronics and controls integration on the D2-2 AWD system (Chevy Equinox / GMC Terrain), investigating warranty and resolving system performance and software issues.",
      "Conducted on-road and off-road data collection for wheel torque and driveline dynamics — including −40°C cold-box and sand-dune terrain testing.",
      "Collaborated cross-functionally with technical specialists, DREs, and suppliers to assess halfshaft NVH characteristics.",
    ],
  },
  {
    company: "Nexteer Automotive",
    role: "Engineering Intern — Systems Application Team",
    location: "Saginaw, MI",
    period: "May 2024 – Aug 2024",
    bullets: [
      "Developed an ignition test box for a Steer-by-Wire project, expanding test coverage and reliability.",
      "Analyzed OEM design, safety, and software requirements to strengthen feature-function mapping.",
      "Authored detailed work instructions to accelerate testing and knowledge transfer.",
    ],
  },
  {
    company: "Nexteer Automotive",
    role: "Engineering Intern — ECU HiL Team",
    location: "Auburn Hills, MI",
    period: "May 2023 – Aug 2023",
    bullets: [
      "Designed and executed test procedures for ECU-based electric power steering, improving system reliability.",
      "Configured and debugged harness/test bench setups, cutting setup time and improving testing efficiency by 30%.",
      "Analyzed test data to identify patterns and anomalies, delivering detailed reports and recommendations.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <SectionHeader index="01" title="Experience" />
        <div className="mt-16 space-y-px">
          {experiences.map((e, i) => (
            <motion.article
              key={i}
              {...fadeUp}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="group grid md:grid-cols-12 gap-6 py-10 border-t border-border first:border-t-0"
            >
              <div className="md:col-span-3 font-mono text-xs text-muted-foreground">
                {e.period}
                <div className="flex items-center gap-1.5 mt-2 text-foreground/60">
                  <MapPin className="w-3 h-3" /> {e.location}
                </div>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-2xl md:text-3xl tracking-tight">
                  {e.role.split("—")[0].trim()}
                  <span className="text-amber"> @ {e.company}</span>
                </h3>
                <p className="font-mono text-xs text-muted-foreground mt-1">
                  {e.role.split("—")[1]?.trim()}
                </p>
                <ul className="mt-5 space-y-3 text-muted-foreground leading-relaxed">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="text-amber font-mono mt-1.5 text-xs">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
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
    period: "Oct – Dec 2025",
    icon: Cpu,
    desc: "A fully synthesizable N-way superscalar out-of-order processor with instruction prefetching and early branch resolution. MIPS R10000-style microarchitecture with register renaming.",
  },
  {
    title: "Smart Room Occupancy Monitoring",
    tag: "C · ESP32 · IoT",
    period: "Oct – Dec 2025",
    icon: CircuitBoard,
    desc: "An IoT room-occupancy sensor combining Time-of-Flight and PIR sensors for direction tracking. Wireless transmission to a central server for live monitoring — 90% detection accuracy.",
  },
  {
    title: "Maglev PID Controller",
    tag: "MATLAB · Simulink",
    period: "Mar – Apr 2025",
    icon: Wrench,
    desc: "A PID controller built on a linearized model of a nonlinear magnetic-levitation plant. Validated with hardware-in-the-loop testing — sub-3-second settling time and zero steady-state error.",
  },
];

function Projects() {
  return (
    <section id="projects" className="border-t border-border/50 bg-card/30">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <SectionHeader index="02" title="Selected Projects" />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="panel rounded-xl p-7 group hover:border-amber/40 transition-colors relative overflow-hidden"
              >
                <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-amber/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <Icon className="w-7 h-7 text-amber mb-6" strokeWidth={1.5} />
                  <div className="font-mono text-[10px] text-muted-foreground tracking-wider">
                    {p.period.toUpperCase()}
                  </div>
                  <h3 className="font-display text-2xl mt-2 leading-tight">{p.title}</h3>
                  <div className="font-mono text-xs text-amber mt-2">{p.tag}</div>
                  <p className="text-muted-foreground text-sm mt-4 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const groups = [
    { label: "Languages", items: ["C / C++", "Python", "SystemVerilog", "MATLAB", "HTML / CSS"] },
    {
      label: "Tools",
      items: ["Altium Designer", "Cadence Virtuoso", "Simulink", "Vector Tools", "Arduino", "Linux", "Git", "VS Code", "Oscilloscope"],
    },
    {
      label: "Techniques",
      items: ["Circuit Design", "FPGA", "Hardware Validation", "Communication Protocols", "Soldering", "System Design"],
    },
  ];

  return (
    <section id="skills" className="border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <SectionHeader index="03" title="Toolkit" />
        <div className="mt-16 grid md:grid-cols-3 gap-12">
          {groups.map((g) => (
            <motion.div key={g.label} {...fadeUp}>
              <div className="font-mono text-xs text-amber mb-5 tracking-wider">
                {g.label.toUpperCase()}
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="text-sm font-mono px-3 py-1.5 border border-border rounded-md hover:border-amber/50 transition"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          className="mt-20 panel rounded-xl p-8 flex flex-col md:flex-row md:items-center gap-6"
        >
          <GraduationCap className="w-10 h-10 text-amber shrink-0" strokeWidth={1.5} />
          <div className="flex-1">
            <h3 className="font-display text-2xl">University of Michigan</h3>
            <p className="text-muted-foreground mt-1">
              B.S. in Electrical Engineering · GPA 3.7 / 4.0 · Aug 2021 – Dec 2025
            </p>
            <p className="font-mono text-xs text-muted-foreground mt-3">
              James B. Angell Scholar · Dean's List · University Honors
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { icon: Mail, label: "yousefm@umich.edu", href: "mailto:yousefm@umich.edu" },
    { icon: Phone, label: "248-635-3775", href: "tel:+12486353775" },
    { icon: Linkedin, label: "linkedin.com/in/yousef-maitah", href: "https://linkedin.com/in/yousef-maitah/" },
    { icon: Github, label: "github.com/ymaitah", href: "https://github.com/ymaitah" },
  ];
  return (
    <section id="contact" className="border-t border-border/50 bg-card/30">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-40">
        <motion.div {...fadeUp}>
          <div className="font-mono text-xs text-amber mb-6">04 — GET IN TOUCH</div>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95]">
            Let's build something
            <br />
            <span className="italic text-amber">that actually works.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-3">
          {links.map((l, i) => {
            const Icon = l.icon;
            return (
              <motion.a
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group panel rounded-lg p-6 flex items-center justify-between hover:border-amber/50 transition"
              >
                <div className="flex items-center gap-4">
                  <Icon className="w-5 h-5 text-amber" strokeWidth={1.5} />
                  <span className="font-mono text-sm">{l.label}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-amber group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-6">
      <span className="font-mono text-xs text-amber">{index}</span>
      <h2 className="font-display text-4xl md:text-5xl tracking-tight">{title}</h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
        <div>© 2026 Yousef Maitah</div>
        <div>Put together with precision · Ann Arbor, MI</div>
      </div>
    </footer>
  );
}
