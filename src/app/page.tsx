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
  codenamePronunciation?: string;
  moniker: string;
  bio: string;
  education?: string;
  whiteCollarCareer?: string;
  blueCollarPassion?: string;
  definingQuote?: string;
};

const TEAM: TeamMember[] = [
  {
    codename: "November",
    moniker: "L.O.",
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
    moniker: "Levyne",
    bio: "Started with bicycles, graduated to small cars. If it has wheels and a problem, he's fixing it.",
    education: "Bsc. Computer Science.",
    whiteCollarCareer: "Upande ltd, Uber",
    blueCollarPassion:
      "Currently masquerading as Ops at Teleops.io Monitoring Server rooms and Warehouses and complex systems for Multinationals across the country. However, his real passion lies in bicycles. Two times riding from Nairobi to Mombasa, Two times Nairobi to Kisumu, countless times to Namanga. Got bored. Found his next passion in fixing the bicycles and organising bicycle Safaris and races. He finally got bored with spokes, two hubs and a chain. So now he services small cars, Demios, Mazda 2's and the likes.",
  },
  {
    codename: "The Catalyst",
    moniker: "Erick Kobia",
    bio: "A chemist who can't stop optimising systems — including yours. Precise, methodical, allergic to sloppy work.",
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
    moniker: "Brian Ochieng’",
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
    moniker: "Eric Gitonga",
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
    moniker: "Herbert",
    bio: "Solar PV engineer who moonlights on electrical installations and the e-mobility wave. Farms on the side, and always has advice for whoever needs a nudge forward.",
    education: "BEng. Electrical & Electronics Engineering",
    whiteCollarCareer: "Renewable Energy, Solar PV C&I industry.",
    blueCollarPassion:
      "Electrical installations and E-mobility enthusiast, farming, personal development guider.",
  },
  {
    codename: "The Tinkerer",
    moniker: "Kenneth Kinungi Mauwi",
    bio: "Still finishing his electronics engineering degree, already happier with a multimeter than a textbook. Takes gadgets apart to see how they break, then builds them back better.",
    education: "B.Sc. Electronics and Computer Engineering (Student)",
    whiteCollarCareer:
      "Electronics and Computer Engineering student with a growing passion for embedded systems, automation, software development, and emerging technologies. Constantly learning, experimenting, and building technical skills one project at a time.",
    blueCollarPassion:
      "A natural-born tinkerer who believes the best way to understand something is to take it apart and rebuild it. Fascinated by electronics, electrical installations, DIY projects, repairs, and figuring out how machines work. Whether it's fixing gadgets, wiring circuits, assembling hardware, or bringing old equipment back to life, curiosity is always the driving force. Still a student, but already happiest with a toolbox in one hand and a multimeter in the other.",
    definingQuote:
      "\"I don't just use technology—I want to know why it works, how it breaks, and how to build it even better.\"",
  },
  {
    codename: "El Nino",
    moniker: "Padre Pio",
    bio: "Computer nerd deep in Linux and engineering by day, pianist and poet the rest of the time. Lately hooked on engines, electric cars, and motorcycles.",
    education: "Bsc. Computer Science.",
    whiteCollarCareer:
      "A full-time computer nerd deep in engineering and Linux, part-time pianist, part-time poet, and athlete.",
    blueCollarPassion:
      "He has lately developed an unhealthy obsession with engines, electric cars, and motorcycles. He's currently working in and out of garages and boutique electrical installations, and anywhere else his passions lead him.",
  },
  {
    codename: "d3eikei",
    moniker: "Johnwillis Alande",
    bio: "Full-stack developer with a petrolhead's heart — builder behind G1ZMO, grease-stained veteran of Strathmore's Formula Student team, and an open-road wanderer with a camera in hand.",
    education: "BSc. Informatics and Computer Science",
    whiteCollarCareer:
      "Full-Stack Software Developer. By day, he masquerades as a modern digital architect, spinning high-level syntax into seamless software products.",
    blueCollarPassion:
      "While his head might be in the cloud, his pulse is decidedly mechanical. Strip away the user interfaces and databases, and you'll find a man whose true passion lies in the bare metal — an engine for a heart, and a dyed-in-the-wool petrolhead since childhood. He is the proud, hands-on mastermind behind G1ZMO, his meticulously crafted EP-91 Glanza S project (#SaveTheTwoDoors), and has earned his grease-stained stripes deep in the mechanical and powertrain trenches of the Strathmore Formula Student (FS) racing team. When he isn't turning wrenches or compiling code, he's out chasing the horizon — armed with a Nikon D3400, he roams the wild, hunting for the perfect shot. A true connoisseur of the open road, his downtime is fueled by a steady diet of nature, steep hikes, spontaneous road trips, and a killer soundtrack.",
    definingQuote:
      "\"Always effortlessly shifting gears between the soft and the hard wares.\"",
  },
  {
    codename: "VayAnsZweiDrei",
    codenamePronunciation: "Vee-Ains-Tsvai-Dkhai",
    moniker: "Means",
    bio: "Our faithful Caledonia Green mode of motion. Timeless design, mechanical simplicity, and outlives the dinosaurs.",
  },
];

const TEAM_DETAIL_FIELDS: Array<{
  label: string;
  key: keyof TeamMember;
}> = [
  { label: "Moniker", key: "moniker" },
  { label: "Code Name", key: "codename" },
  { label: "Education", key: "education" },
  { label: "White Collar Career", key: "whiteCollarCareer" },
  { label: "Blue Collar Passion", key: "blueCollarPassion" },
  { label: "Defining Quote", key: "definingQuote" },
];

function Modal({
  label,
  onClose,
  children,
}: {
  label: string;
  onClose: () => void;
  children: React.ReactNode;
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
        aria-label={label}
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
        <div className="space-y-4 pr-6">{children}</div>
      </div>
    </div>
  );
}

function TeamMemberModal({
  member,
  onClose,
}: {
  member: TeamMember;
  onClose: () => void;
}) {
  return (
    <Modal label={member.codename} onClose={onClose}>
      {TEAM_DETAIL_FIELDS.map(({ label, key }) => {
        const value = member[key];
        if (!value) return null;
        const displayValue =
          key === "codename" && member.codenamePronunciation
            ? `${value} (pron. ${member.codenamePronunciation})`
            : value;
        return (
          <p key={key} className="text-sm leading-6 text-slate-600">
            <span className="font-bold text-slate-900">{label}: </span>
            {displayValue}
          </p>
        );
      })}
    </Modal>
  );
}

type PartnerLinkPlatform = "instagram" | "facebook" | "twitter" | "website";

type PartnerLink = {
  platform: PartnerLinkPlatform;
  href: string;
};

const PARTNER_LINK_LABELS: Record<PartnerLinkPlatform, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  twitter: "Twitter",
  website: "Website",
};

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M18.9 3h3.1l-6.77 7.73L23.5 21h-6.36l-4.98-6.52L6.4 21H3.3l7.24-8.27L2.5 3h6.52l4.5 5.95L18.9 3Zm-1.09 16.17h1.72L7.28 4.74H5.44l12.37 14.43Z" />
    </svg>
  );
}

function PartnerLinkIcon({ platform }: { platform: PartnerLinkPlatform }) {
  if (platform === "instagram") return <InstagramIcon />;
  if (platform === "facebook") return <FacebookIcon />;
  if (platform === "twitter") return <TwitterIcon />;
  return null;
}

type Partner = {
  name: string;
  logoSrc?: string;
  logoWidth?: number;
  logoHeight?: number;
  description?: string;
  links?: PartnerLink[];
};

const PARTNERS: Partner[] = [
  {
    name: "South Ring Autos",
    logoSrc: "/partners/south-ring-autos.png",
    logoWidth: 551,
    logoHeight: 453,
    description:
      "When your car needs special attention and needs works done at a garage, we have partnered with South Rings as our go to garage.",
    links: [
      { platform: "instagram", href: "https://www.instagram.com/southring_autos/" },
      { platform: "facebook", href: "https://www.facebook.com/southringautos" },
      { platform: "twitter", href: "https://x.com/southringautos" },
      { platform: "website", href: "https://www.southringautos.com/" },
    ],
  },
  {
    name: "Finch Auto",
    logoSrc: "/partners/finch-auto.png",
    logoWidth: 400,
    logoHeight: 101,
    description: "For genuine service parts and specifically those for German Machines.",
    links: [
      { platform: "instagram", href: "https://www.instagram.com/finchautoparts/" },
      { platform: "facebook", href: "https://www.facebook.com/finchautoparts/" },
    ],
  },
  { name: "Asendi Spares" },
  {
    name: "GariScan",
    logoSrc: "/partners/gariscan.png",
    logoWidth: 1592,
    logoHeight: 518,
    description:
      "Need to monitor your car essentials without having to call for expensive diagnostics? GariScan is your first point of contact. A plug and play Bluetooth Scanner.",
    links: [
      { platform: "instagram", href: "https://www.instagram.com/gariscanapp" },
      { platform: "twitter", href: "https://x.com/GariScanApp" },
      { platform: "website", href: "https://gariscan.com/" },
    ],
  },
];

function PartnerModal({
  partner,
  onClose,
}: {
  partner: Partner;
  onClose: () => void;
}) {
  return (
    <Modal label={partner.name} onClose={onClose}>
      <h3 className="text-lg font-semibold text-slate-900">{partner.name}</h3>
      {partner.description && (
        <p className="text-sm leading-6 text-slate-600">{partner.description}</p>
      )}
      {partner.links && partner.links.length > 0 && (
        <div className="flex items-center gap-4">
          {partner.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={PARTNER_LINK_LABELS[link.platform]}
              className="flex items-center gap-1.5 font-medium text-amber-600 hover:text-amber-500"
            >
              <PartnerLinkIcon platform={link.platform} />
              {link.platform === "website" && PARTNER_LINK_LABELS.website}
            </a>
          ))}
        </div>
      )}
    </Modal>
  );
}

export default function Home() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  return (
    <div className="flex flex-col flex-1 font-sans">
      <header className="sticky top-0 z-50 bg-slate-900 text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <span className="text-2xl font-semibold tracking-tight">En Mascaradores</span>
          <nav className="flex items-center gap-6">
            <a href="#services" className="hidden text-sm font-medium text-slate-300 hover:text-white sm:inline">
              Services
            </a>
            <a href="#partners" className="hidden text-sm font-medium text-slate-300 hover:text-white sm:inline">
              Partners
            </a>
            <a href="#team" className="hidden text-sm font-medium text-slate-300 hover:text-white sm:inline">
              Team
            </a>
            <a
              href="#contact"
              className="rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-amber-400"
            >
              Get in touch
            </a>
          </nav>
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
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-400">
              Car care without the garage runaround
            </p>
            <h1 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Skip the garage. We&apos;ll come to you.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              No queuing at a garage counter, no losing half your day, no being
              talked over about what your car actually needs. We handle the
              car maintenance — plus the plumbing and electrical jobs piling
              up at home — on your schedule, done properly.
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

      <section id="services" className="scroll-mt-20 bg-white">
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

      <section id="partners" className="scroll-mt-20 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Our partners
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            This is the list of trusted partners we also work with. From car
            accessories to service parts. They have proven to deliver in
            terms of quality and that is why we work with them.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {PARTNERS.map((partner) => (
              <button
                key={partner.name}
                type="button"
                onClick={() => setSelectedPartner(partner)}
                className="flex min-h-[88px] items-center justify-center rounded-lg border border-slate-200 bg-white p-4 text-center transition-colors hover:border-slate-300 hover:bg-slate-100"
              >
                {partner.logoSrc ? (
                  <Image
                    src={partner.logoSrc}
                    alt={partner.name}
                    width={partner.logoWidth ?? 127}
                    height={partner.logoHeight ?? 32}
                    className="h-10 w-auto max-w-full object-contain"
                  />
                ) : (
                  <span className="text-base font-medium text-slate-700">
                    {partner.name}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="hours" className="scroll-mt-20 bg-white">
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

      <section id="team" className="scroll-mt-20 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Meet the team
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {TEAM.map((member) => (
              <button
                key={member.codename}
                type="button"
                onClick={() => setSelectedMember(member)}
                className="flex min-h-[88px] items-center justify-center rounded-lg border border-slate-200 bg-white p-4 text-center transition-colors hover:border-slate-300 hover:bg-slate-100"
              >
                <span className="text-base font-semibold text-slate-900">
                  {member.codename}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 bg-slate-900 text-white">
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

      {selectedPartner && (
        <PartnerModal
          partner={selectedPartner}
          onClose={() => setSelectedPartner(null)}
        />
      )}
    </div>
  );
}
