import Image from "next/image";

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
};

const TEAM: TeamMember[] = [
  {
    codename: "November",
    bio: "Engineer by trade, tinkerer by nature. Cars, plumbing, wiring — if it's broken, he's already reaching for a tool.",
  },
  {
    codename: "The Dark Night",
    bio: "Started with bicycles, graduated to small cars. If it has wheels and a problem, he's fixing it.",
  },
  {
    codename: "The Catalyst",
    bio: "A chemist who can't stop optimizing systems — including yours. Precise, methodical, allergic to sloppy work.",
  },
  {
    codename: "Tactician",
    bio: "Built infrastructure by day for years, now just as happy solving the small stuff by hand.",
  },
  {
    codename: "The Fuser",
    bio: "Half art, half circuitry. Approaches every job like a design problem worth getting right.",
  },
  {
    codename: "Herb",
    bio: "Solar PV engineer who moonlights on electrical installations and the e-mobility wave. Farms on the side, and always has advice for whoever needs a nudge forward.",
  },
  {
    codename: "The Tinkerer",
    bio: "Still finishing his electronics engineering degree, already happier with a multimeter than a textbook. Takes gadgets apart to see how they break, then builds them back better.",
  },
];

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
              <div key={member.codename} className="rounded-lg border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{member.codename}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{member.bio}</p>
              </div>
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
            href="mailto:hello@enmascaradores.example"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-base font-medium text-slate-900 transition-colors hover:bg-amber-400"
          >
            hello@enmascaradores.example
          </a>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm">
          © {new Date().getFullYear()} En Mascaradores.
        </div>
      </footer>
    </div>
  );
}
