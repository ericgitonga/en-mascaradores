"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Service = {
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    title: "Car maintenance",
    description:
      "Routine servicing and small repairs — the checks that keep a car reliable between garage visits.",
  },
  {
    title: "Plumbing",
    description:
      "Leaking pipes, dripping faucets, and the small plumbing jobs that turn into big ones if ignored.",
  },
  {
    title: "Electrical",
    description:
      "Bulb replacements, faults, and general fixes for the everyday electrical issues around a home.",
  },
];

type TeamMember = {
  codename: string;
  bio: string;
  education?: string;
  whiteCollarCareer?: string;
  blueCollarPassion?: string;
  definingQuote?: string;
};

const TEAM: TeamMember[] = [
  {
    codename: "November",
    bio: "Engineer by trade, tinkerer by nature. Cars, plumbing, wiring — if it's broken, he's already reaching for a tool.",
    education: "Bsc. Geomatics Engineering",
    whiteCollarCareer: "Xoogler, GIS / IoT, Telcomms",
    blueCollarPassion:
      "Currently masquerading as a Techpreneur with Sasasignal.com & Teleops.io and freelancing as a digital Communications Expert. But his true passion lies in fixing stuff, from cars to painting to plumbing.",
    definingQuote:
      "“A Jack of all trades, but Master of None. But oftentimes Better than a Master of One”",
  },
  {
    codename: "The Dark Night",
    bio: "Started with bicycles, graduated to small cars. If it has wheels and a problem, he's fixing it.",
    education: "Bsc. Computer Science.",
    whiteCollarCareer: "Upande ltd, Uber",
    blueCollarPassion:
      "Currently masquerading as Ops at Teleops.io Monitoring Server rooms and Warehouses and complex systems for Multinationals across the country. However, his real passion lies in bicycles. Two times riding from Nairobi to Mombasa, Two times Nairobi to Kisumu, countless times to Namanga. Got bored. Found his next passion in fixing the bicycles and organising bicycle Safaris and races. He finally got bored with spokes, two hubs and a chain. So now he services small cars, Demios, Mazda 2's and the likes.",
  },
  {
    codename: "The Catalyst",
    bio: "A chemist who can't stop optimizing systems — including yours. Precise, methodical, allergic to sloppy work.",
    education: "Bsc. Industrial Chemistry, JKUAT.",
    whiteCollarCareer:
      "R&D Chemist / Product Development Lead, currently formulating an in-house beverage and running quality systems tight enough to survive back-to-back audits at Sobetra Uganda Ltd.",
    blueCollarPassion:
      "Founder, EliteShield Cleaning and Fumigation Services, quietly making sure Nairobi's homes and offices stay pest-free and spotless when the lab coat comes off.",
    definingQuote:
      "\"Formulates products by day, fumigates problems by night. Same instinct either way: find what's contaminating the system, and eliminate it.\"",
  },
  {
    codename: "Tactician",
    bio: "Built infrastructure by day for years, now just as happy solving the small stuff by hand.",
    education:
      "AHS, BSc. Civil Engineering, University of Nairobi, MSc. Civil Eng University of Glasgow",
    whiteCollarCareer:
      "Civil Engineer, State Department of Housing & Urban Development, Founder & Director Spacebar Energy & Construction and Beacons CleanUp Services",
    blueCollarPassion:
      "Currently masquerading as a Civil Engineer, turning blueprints into landmarks and ideas into infrastructure. He has supervised dam construction, highways, student apartments, markets and public infrastructure. So now he is equally obsessed with oratory, technology, design, and solving impossible problems, whether it's engineering structures, plumbing & electrical works, creating campaign media, mastering new software, or turning ideas into projects that leave a lasting impact. Still an engineer at heart. Still building. Just no longer limited to bricks and mortar.",
  },
  {
    codename: "The Fuser",
    bio: "Half art, half circuitry. Approaches every job like a design problem worth getting right.",
    education: "BSc. Electrical Engineering",
    whiteCollarCareer: "Fiddling 1s and 0s",
    blueCollarPassion:
      "Doodler, dudu-rer and data-rer. Fusing the Arts and the Sciences. The 1s and the 0s with the Mauves and Sapphires. The Lefts and the Rights.",
    definingQuote:
      '"Don’t think about making art, just get it done. Let everyone else decide if it’s good or bad, whether they love it or hate it. While they are deciding, make even more art." — Andy Warhol',
  },
  {
    codename: "Herb",
    bio: "Solar PV engineer who moonlights on electrical installations and the e-mobility wave. Farms on the side, and always has advice for whoever needs a nudge forward.",
    education: "BEng. Electrical & Electronics Engineering",
    whiteCollarCareer: "Renewable Energy, Solar PV C&I industry.",
    blueCollarPassion:
      "Electrical installations and E-mobility enthusiast, farming, personal development guider.",
  },
  {
    codename: "The Tinkerer",
    bio: "Still finishing his electronics engineering degree, already happier with a multimeter than a textbook. Takes gadgets apart to see how they break, then builds them back better.",
    education: "B.Sc. Electronics and Computer Engineering (Student)",
    whiteCollarCareer:
      "Electronics and Computer Engineering student with a growing passion for embedded systems, automation, software development, and emerging technologies. Constantly learning, experimenting, and building technical skills one project at a time.",
    blueCollarPassion:
      "A natural-born tinkerer who believes the best way to understand something is to take it apart and rebuild it. Fascinated by electronics, electrical installations, DIY projects, repairs, and figuring out how machines work. Whether it's fixing gadgets, wiring circuits, assembling hardware, or bringing old equipment back to life, curiosity is always the driving force. Still a student, but already happiest with a toolbox in one hand and a multimeter in the other.",
    definingQuote:
      "\"I don't just use technology—I want to know why it works, how it breaks, and how to build it even better.\"",
  },
];

const TEAM_DETAIL_FIELDS: Array<{
  label: string;
  key: keyof TeamMember;
}> = [
  { label: "Code Name", key: "codename" },
  { label: "Education", key: "education" },
  { label: "White Collar Career", key: "whiteCollarCareer" },
  { label: "Blue Collar Passion", key: "blueCollarPassion" },
  { label: "Defining Quote", key: "definingQuote" },
];

function TeamMemberModal({
  member,
  onClose,
}: {
  member: TeamMember;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={member.codename}
        className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-xl leading-none text-slate-400 hover:text-slate-700"
        >
          &times;
        </button>
        <div className="space-y-4 pr-6">
          {TEAM_DETAIL_FIELDS.map(({ label, key }) => {
            const value = member[key];
            if (!value) return null;
            return (
              <p key={key} className="text-sm leading-6 text-slate-600">
                <span className="font-bold text-slate-900">{label}: </span>
                {value}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

type Partner = {
  name: string;
  logoSrc?: string;
  href?: string;
};

const PARTNERS: Partner[] = [
  { name: "South Ring Motors" },
  {
    name: "Finch Auto",
    logoSrc: "/partners/finch-auto.png",
    href: "https://www.instagram.com/finchautoparts/",
  },
  { name: "Asendi Spares" },
  { name: "GariScan" },
];

export default function Home() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="flex flex-col flex-1 font-sans">
      <header className="bg-slate-900 text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <span className="text-2xl font-semibold tracking-tight">En Mascaradores</span>
          <a
            href="#contact"
            className="rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-amber-400"
          >
            Get in touch
          </a>
        </div>
      </header>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 pb-20 pt-10 sm:flex-row sm:pb-28 sm:pt-16">
          <Image
            src="/logo.png"
            alt="En Mascaradores logo"
            width={220}
            height={220}
            className="shrink-0"
          />
          <div>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              White-collar by day. The trade is where we actually live.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              We spend our lives in white-collar jobs while deep inside we&apos;re
              blue-collar folks who found our way back to it. Car maintenance,
              plumbing, and electrical work — done by people who do it because
              they want to, not because they have to.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-base font-medium text-slate-900 transition-colors hover:bg-amber-400"
            >
              Book a job
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Our services
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {SERVICES.map((service) => (
              <div key={service.title} className="rounded-lg border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hours" className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Working hours
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Weekends are for family and friends — why should we be working
            instead of hanging out with y&apos;all? So we only work Tuesdays,
            Wednesdays, and Thursdays. We have other careers, and we need the
            rest too. Weekend jobs are possible, just at a premium.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Tuesday", "Wednesday", "Thursday"].map((day) => (
              <span
                key={day}
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white"
              >
                {day}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Meet the team
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <button
                key={member.codename}
                type="button"
                onClick={() => setSelectedMember(member)}
                className="rounded-lg border border-slate-200 p-6 text-left transition-colors hover:border-slate-300 hover:bg-slate-50"
              >
                <h3 className="text-lg font-semibold text-slate-900">{member.codename}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{member.bio}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Our partners
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
            {PARTNERS.map((partner) =>
              partner.logoSrc ? (
                <a
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={partner.logoSrc}
                    alt={partner.name}
                    width={127}
                    height={32}
                  />
                </a>
              ) : (
                <span
                  key={partner.name}
                  className="text-base font-medium text-slate-700"
                >
                  {partner.name}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Reach out and we&apos;ll get back to you on our next working day.
          </p>
          <a
            href="mailto:gitonga@gmail.com"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-base font-medium text-slate-900 transition-colors hover:bg-amber-400"
          >
            gitonga@gmail.com
          </a>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm">
          © {new Date().getFullYear()} En Mascaradores.
        </div>
      </footer>

      {selectedMember && (
        <TeamMemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
}
