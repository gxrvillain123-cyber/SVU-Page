"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BookOpenCheck,
  Building2,
  ChevronRight,
  GraduationCap,
  Leaf,
  LibraryBig,
  MapPin,
  Menu,
  Microscope,
  Quote,
  Sparkles,
  Trophy,
  Users,
  X,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Campus", href: "#campus" },
  { label: "Stories", href: "#stories" },
  { label: "Apply", href: "#apply" },
];

const campusImages = [
  "/images/campus-hero.avif",
  "/images/campus-green.avif",
  "/images/smart-classroom.avif",
  "/images/practical-lab.avif",
  "/images/library.jpg",
];

const stats = [
  { value: "10K+", label: "students on campus" },
  { value: "50+", label: "career-led courses" },
  { value: "300+", label: "faculty members" },
  { value: "500+", label: "research scholars" },
];

const programGroups = [
  {
    id: "technology",
    label: "Technology",
    title: "Engineering, Computer Science & Applied Tech",
    description:
      "Build for industry with labs, live projects, coding culture, and a curriculum shaped around fast-moving technology careers.",
    courses: ["Computer Science & Engineering", "Data Science", "Cyber Security", "Mechanical Engineering"],
    image: "/images/technology-lab.avif",
    icon: Microscope,
  },
  {
    id: "health",
    label: "Health Sciences",
    title: "Allied Health, Life Science & Nutrition",
    description:
      "Hands-on healthcare learning across clinical, diagnostic, food science, psychology, biotechnology, and microbiology pathways.",
    courses: ["Physiotherapy", "Optometry", "Medical Laboratory Technology", "Biotechnology"],
    image: "/images/health-lab.avif",
    icon: Leaf,
  },
  {
    id: "business",
    label: "Management",
    title: "Management, Law, Media & Social Sciences",
    description:
      "A multidisciplinary route for students who want leadership, communication, entrepreneurship, public service, and legal careers.",
    courses: ["Management Studies", "Legal Studies", "Journalism", "English"],
    image: "/images/campus-life.avif",
    icon: Users,
  },
];

const experiences = [
  {
    icon: LibraryBig,
    title: "Central Library",
    text: "Quiet study zones and digital resources for interdisciplinary learning.",
  },
  {
    icon: Building2,
    title: "Smart Classrooms",
    text: "Modern teaching spaces designed for hybrid, ICT-enabled learning.",
  },
  {
    icon: Sparkles,
    title: "Open-Air Culture",
    text: "A campus rhythm shaped by seminars, cultural programs, workshops, and student events.",
  },
  {
    icon: Trophy,
    title: "Career Momentum",
    text: "Placement support, industry collaborations, skill labs, and professional readiness.",
  },
];

const testimonials = [
  {
    quote:
      "The best part of campus life is how quickly classroom learning connects with workshops, lab practice, and real project ideas.",
    name: "Ananya Sen",
    role: "Computer Science student",
  },
  {
    quote:
      "SVU feels energetic. There is always a seminar, a cultural event, or a faculty mentor helping us shape the next step.",
    name: "Ritwik Das",
    role: "Management student",
  },
  {
    quote:
      "The campus has a calm green feel, but the academic pace is serious. That mix keeps you grounded and ambitious.",
    name: "Moumita Paul",
    role: "Allied Health Sciences student",
  },
];

function scrollToApply() {
  document.querySelector("#apply")?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProgram, setActiveProgram] = useState(programGroups[0].id);

  const selectedProgram = useMemo(
    () => programGroups.find((program) => program.id === activeProgram) ?? programGroups[0],
    [activeProgram],
  );

  const ProgramIcon = selectedProgram.icon;

  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-ink/80 text-white backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="SVU home">
            <Image
              src="/images/svu-logo.png"
              alt="Swami Vivekananda University logo"
              width={88}
              height={58}
              className="h-11 w-auto rounded bg-white p-1"
            />
            <span className="hidden flex-col leading-none sm:flex">
              <span className="text-sm font-semibold">Swami Vivekananda University</span>
              <span className="mt-1 text-xs text-white/68">Barrackpore, West Bengal</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/74 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollToApply}
            className="hidden items-center gap-2 rounded-full bg-saffron px-5 py-3 text-sm font-semibold text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-white lg:inline-flex"
          >
            Apply Now
            <ArrowRight size={16} />
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-ink px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-3 py-2 text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative min-h-screen bg-ink pt-20 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/campus-hero.avif"
            alt="Swami Vivekananda University campus"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(13,63,54,0.92),rgba(31,111,139,0.58),rgba(143,47,69,0.46))]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-8 px-5 pb-12 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-14 lg:pt-14">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm text-white/82 backdrop-blur">
              <MapPin size={16} />
              Telinipara, Barasat-Barrackpore Road
            </div>

            <h1 className="max-w-4xl font-serif text-5xl leading-[1.04] sm:text-6xl lg:text-6xl">
              Learn boldly. Build wisely. Lead with purpose.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
              A modern admissions experience for Swami Vivekananda University, shaped around innovation,
              values-based learning, green campus life, and career-ready programs.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={scrollToApply}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-7 py-4 text-base font-bold text-ink shadow-soft transition hover:-translate-y-1 hover:bg-white"
              >
                Start Your Application
                <ArrowRight size={18} />
              </button>
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/24 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/18"
              >
                Explore Programs
                <ChevronRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="animate-float rounded-[2rem] border border-white/18 bg-white/12 p-3 shadow-soft backdrop-blur-md">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-white">
                <Image
                  src="/images/smart-classroom.avif"
                  alt="Smart classroom at SVU"
                  width={900}
                  height={1125}
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[5/4]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 pt-3">
                <div className="rounded-2xl bg-white p-4 text-ink">
                  <div className="text-3xl font-black">2019</div>
                  <div className="mt-1 text-sm text-ink/62">Established</div>
                </div>
                <div className="rounded-2xl bg-pine p-4 text-white">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <BookOpenCheck size={17} />
                    Academic focus
                  </div>
                  <div className="mt-3 text-xl font-bold">Excellence + Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-y border-white/14 bg-white/10 py-4 backdrop-blur">
          <div className="campus-mask mx-auto max-w-7xl overflow-hidden">
            <div className="flex w-max animate-marquee gap-8 text-sm font-semibold uppercase text-white/76">
              {["Smart classrooms", "Green campus", "Research culture", "Industry readiness", "Student life", "Scholarship support", "Modern laboratories", "Barrackpore connectivity", "Smart classrooms", "Green campus", "Research culture", "Industry readiness"].map(
                (item, index) => (
                  <span key={`${item}-${index}`} className="flex items-center gap-8">
                    {item}
                    <span className="h-2 w-2 rounded-full bg-saffron" />
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-[1.75rem] border border-ink/8 bg-ink/8 shadow-soft sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white px-5 py-7 text-center">
              <div className="text-3xl font-black text-pine sm:text-4xl">{stat.value}</div>
              <div className="mt-2 text-sm text-ink/62">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-paper px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-pine/10 px-4 py-2 text-sm font-semibold text-pine">
              <GraduationCap size={16} />
              About SVU Barrackpore
            </div>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              A young university with a practical, ambitious learning culture.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-ink/70">
            <p>
              Swami Vivekananda University was founded in 2019 and has grown as a multidisciplinary
              private university in Eastern India. This redesign presents the university through a
              warmer, clearer, and more contemporary admissions experience.
            </p>
            <p>
              The page highlights what prospective students care about first: programs, campus life,
              facilities, mentorship, placements, and the feeling of joining a place that is still
              building forward.
            </p>
          </div>
        </div>
      </section>

      <section id="programs" className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-saffron/14 px-4 py-2 text-sm font-semibold text-rosewood">
              <Microscope size={16} />
              Program Explorer
            </div>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Choose a path with room to grow.</h2>
            <p className="mt-5 text-lg leading-8 text-ink/68">
              The academic ecosystem spans technology, allied health, management, law, agriculture,
              humanities, life sciences, and foundational sciences.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {programGroups.map((program) => (
              <button
                key={program.id}
                type="button"
                onClick={() => setActiveProgram(program.id)}
                className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                  activeProgram === program.id
                    ? "bg-ink text-white shadow-lift"
                    : "border border-ink/10 bg-paper text-ink/68 hover:border-pine hover:text-pine"
                }`}
              >
                {program.label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="overflow-hidden rounded-[2rem] bg-pine shadow-soft">
              <Image
                src={selectedProgram.image}
                alt={`${selectedProgram.label} program visual`}
                width={980}
                height={760}
                className="h-full min-h-[360px] w-full object-cover opacity-92 transition duration-500"
              />
            </div>

            <div className="rounded-[2rem] border border-ink/8 bg-paper p-6 shadow-soft sm:p-9">
              <div className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-pine text-white">
                <ProgramIcon size={25} />
              </div>
              <h3 className="text-3xl font-black leading-tight">{selectedProgram.title}</h3>
              <p className="mt-5 text-lg leading-8 text-ink/66">{selectedProgram.description}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {selectedProgram.courses.map((course) => (
                  <div key={course} className="rounded-2xl border border-ink/8 bg-white px-4 py-4 font-semibold">
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="campus" className="bg-ink px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/84">
                <Leaf size={16} />
                Campus Life
              </div>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                Green spaces, smart rooms, labs, library, and student energy.
              </h2>
            </div>
            <p className="text-lg leading-8 text-white/66">
              The campus story is designed as a visual walkthrough: learning spaces, practical labs,
              library corners, open-air gathering points, and the everyday movement of student life.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {campusImages.map((image, index) => (
              <div
                key={image}
                className={`group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/8 ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <Image
                  src={image}
                  alt={`SVU campus gallery ${index + 1}`}
                  width={760}
                  height={620}
                  className="h-full min-h-[220px] w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {experiences.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/8 p-6">
                  <Icon className="text-saffron" size={26} />
                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/64">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="stories" className="bg-paper px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-river/10 px-4 py-2 text-sm font-semibold text-river">
                <Quote size={16} />
                Student Stories
              </div>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                A page should feel like people study here, not just buildings.
              </h2>
            </div>
            <a href="#apply" className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-pine">
              Join the next batch
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((story) => (
              <article key={story.name} className="rounded-[1.5rem] border border-ink/8 bg-white p-7 shadow-soft">
                <Quote className="text-saffron" size={28} />
                <p className="mt-6 text-lg leading-8 text-ink/72">{story.quote}</p>
                <div className="mt-7 border-t border-ink/8 pt-5">
                  <div className="font-black">{story.name}</div>
                  <div className="mt-1 text-sm text-ink/56">{story.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2rem] bg-pine p-6 text-white shadow-soft sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
          <div className="flex flex-col justify-between gap-10">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-semibold text-white/84">
                <Sparkles size={16} />
                Admissions CTA
              </div>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                Ready to begin your SVU journey?
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/68">
                Share your interest, explore the right program, and take the next step toward a
                campus experience built around learning, mentorship, and career growth.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
              <div className="text-sm uppercase text-white/56">Official contact reference</div>
              <div className="mt-3 space-y-2 text-white/82">
                <p>info@swamivivekanandauniversity.ac.in</p>
                <p>+91 7044086270 / +91 7980333922</p>
                <p>Telinipara, Barasat - Barrackpore Rd, Bara Kanthalia</p>
              </div>
            </div>
          </div>

          <form className="rounded-[1.5rem] bg-white p-5 text-ink shadow-lift sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-ink/64">Full Name</span>
                <input className="mt-2 w-full rounded-2xl border border-ink/10 bg-paper px-4 py-4 outline-none transition focus:border-pine" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-ink/64">Phone Number</span>
                <input className="mt-2 w-full rounded-2xl border border-ink/10 bg-paper px-4 py-4 outline-none transition focus:border-pine" placeholder="+91 XXXXX XXXXX" />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-ink/64">Email</span>
                <input className="mt-2 w-full rounded-2xl border border-ink/10 bg-paper px-4 py-4 outline-none transition focus:border-pine" placeholder="you@example.com" />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-ink/64">Interested Program</span>
                <select className="mt-2 w-full rounded-2xl border border-ink/10 bg-paper px-4 py-4 outline-none transition focus:border-pine">
                  <option>Computer Science & Engineering</option>
                  <option>Management Studies</option>
                  <option>Allied Health Sciences</option>
                  <option>Legal Studies</option>
                  <option>Humanities & Social Sciences</option>
                </select>
              </label>
              <button
                type="button"
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-saffron px-6 py-4 text-base font-black text-ink transition hover:-translate-y-1 hover:bg-ink hover:text-white"
              >
                Submit Enquiry
                <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-ink px-5 py-10 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-xl font-black">Swami Vivekananda University</div>
            <p className="mt-2 max-w-2xl text-white/58">
              Responsive university admissions website built with Next.js and Tailwind CSS.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/62">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#programs">Programs</a>
            <a className="hover:text-white" href="#campus">Campus</a>
            <a className="hover:text-white" href="#apply">Apply</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
