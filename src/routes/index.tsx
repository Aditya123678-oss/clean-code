import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  Stethoscope,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Sun,
  Microscope,
  Droplets,
  Leaf,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronLeft,
  ChevronRight,
  Star,
  MoveHorizontal,
} from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";
import baAcneBefore from "@/assets/ba-acne-before.jpg";
import baAcneAfter from "@/assets/ba-acne-after.jpg";
import baWrinkleBefore from "@/assets/ba-wrinkle-before.jpg";
import baWrinkleAfter from "@/assets/ba-wrinkle-after.jpg";
import baPigmentBefore from "@/assets/ba-pigment-before.jpg";
import baPigmentAfter from "@/assets/ba-pigment-after.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumière Dermatology — Expert Care for Radiant, Healthy Skin" },
      {
        name: "description",
        content:
          "Board-certified dermatologists offering medical and cosmetic skincare. Book your consultation today.",
      },
    ],
  }),
  component: Index,
});

const medicalServices = [
  { icon: Microscope, title: "Acne & Rosacea", desc: "Personalized treatment plans for clearer, calmer skin." },
  { icon: ShieldCheck, title: "Skin Cancer Screening", desc: "Comprehensive mole checks and early detection." },
  { icon: HeartPulse, title: "Eczema & Psoriasis", desc: "Long-term management for chronic skin conditions." },
  { icon: Stethoscope, title: "Pediatric Dermatology", desc: "Gentle, expert care for our youngest patients." },
];

const cosmeticServices = [
  { icon: Sparkles, title: "Signature Facials", desc: "Medical-grade treatments tailored to your skin." },
  { icon: Sun, title: "Laser & Light Therapy", desc: "Pigmentation, redness, and rejuvenation." },
  { icon: Droplets, title: "Injectables", desc: "Subtle, natural-looking results from expert hands." },
  { icon: Leaf, title: "Anti-Aging Therapies", desc: "Restore firmness, glow, and elasticity." },
];

const doctors = [
  {
    name: "Dr. Ananya Sharma",
    title: "Founder & Medical Director",
    creds: "MD, DVD · 18+ years",
    bio: "Board-certified dermatologist specializing in complex medical dermatology and skin cancer care.",
    img: doc1,
  },
  {
    name: "Dr. Rohan Iyer",
    title: "Cosmetic Dermatologist",
    creds: "MD, DNB · 12+ years",
    bio: "Leader in injectables and non-surgical aesthetic treatments with a natural-results philosophy.",
    img: doc2,
  },
  {
    name: "Dr. Priya Menon",
    title: "Pediatric Dermatologist",
    creds: "MD, DDVL · 10+ years",
    bio: "Trusted specialist in pediatric skin conditions, eczema, and sensitive-skin care.",
    img: doc3,
  },
];

const testimonials = [
  {
    quote:
      "The team transformed not just my skin, but my confidence. The care here is genuinely exceptional — thorough, kind, and effective.",
    name: "Sarah M.",
    note: "Patient since 2022 · Acne treatment",
  },
  {
    quote:
      "From the first consultation, I felt heard. Dr. Hayes built a plan that finally worked after years of struggling with rosacea.",
    name: "James K.",
    note: "Patient since 2021 · Rosacea",
  },
  {
    quote:
      "Subtle, natural, and exactly what I wanted. The cosmetic team has an incredible eye and treats every patient as an individual.",
    name: "Priya R.",
    note: "Patient since 2023 · Aesthetic care",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Trust />
      <Services />
      <Doctors />
      <Results />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}


function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="h-4 w-4" />
          </span>
          <span className="font-display text-xl">Lumière</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#doctors" className="hover:text-foreground">Doctors</a>
          <a href="#testimonials" className="hover:text-foreground">Patients</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90"
        >
          Book Appointment
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div className="space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" /> Board-certified dermatology
          </span>
          <h1 className="font-display text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            Expert care for <em className="font-display italic text-primary">radiant,</em> healthy skin.
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            A premium dermatology practice combining medical excellence with thoughtful, personalized care — for every age, every skin type, every concern.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              Explore Services
            </a>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-sage" /> FDA-approved care</div>
            <div className="flex items-center gap-2"><Star className="h-4 w-4 text-sage" /> 4.9 / 5 patient rating</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/60 via-secondary to-sage/30 blur-2xl" />
          <img
            src={heroImg}
            alt="Calm, modern dermatology clinic reception with soft blue accents"
            width={1600}
            height={1100}
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-card sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-sage/20 text-sage-foreground">
                <HeartPulse className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">12,000+ patients</div>
                <div className="text-xs text-muted-foreground">treated with care</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    "American Academy of Dermatology",
    "ASDS",
    "Mohs College",
    "ISAD",
    "Castle Connolly Top Doctors",
  ];
  return (
    <section className="border-y border-border/60 bg-secondary/40">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {items.map((i) => (
          <span key={i}>{i}</span>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const [tab, setTab] = useState<"medical" | "cosmetic">("medical");
  const list = tab === "medical" ? medicalServices : cosmeticServices;

  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Our Services</p>
        <h2 className="mt-3 text-4xl sm:text-5xl">Care, tailored to your skin.</h2>
        <p className="mt-4 text-muted-foreground">
          From everyday concerns to advanced treatments — explore the full range of dermatology services we offer.
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="inline-flex rounded-full border border-border bg-card p-1 shadow-card">
          {(["medical", "cosmetic"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition ${
                tab === t
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t} Dermatology
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {list.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            className="group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-card"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Doctors() {
  return (
    <section id="doctors" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Meet the Doctors</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">A team you can trust.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Each of our physicians is board-certified, deeply experienced, and committed to giving every patient unhurried, attentive care.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {doctors.map((d) => (
            <article key={d.name} className="overflow-hidden rounded-2xl bg-card shadow-card">
              <img
                src={d.img}
                alt={`Portrait of ${d.name}`}
                width={800}
                height={900}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl">{d.name}</h3>
                <p className="mt-1 text-sm text-primary">{d.title}</p>
                <p className="mt-3 text-sm text-muted-foreground">{d.bio}</p>
                <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-xs text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5 text-sage" /> {d.creds}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const prev = () => setI((i - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((i + 1) % testimonials.length);
  const t = testimonials[i];

  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Patient Stories</p>
        <h2 className="mt-3 text-4xl sm:text-5xl">Real results, real people.</h2>
      </div>

      <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-border bg-card p-10 text-center shadow-card sm:p-14">
        <div className="mx-auto flex justify-center gap-1 text-sage">
          {Array.from({ length: 5 }).map((_, k) => (
            <Star key={k} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="mt-6 font-display text-2xl leading-relaxed text-foreground sm:text-3xl">
          “{t.quote}”
        </p>
        <div className="mt-8">
          <div className="font-semibold">{t.name}</div>
          <div className="text-sm text-muted-foreground">{t.note}</div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background transition hover:bg-secondary"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Go to testimonial ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "w-8 bg-primary" : "w-1.5 bg-border"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background transition hover:bg-secondary"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Contact & Location</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Visit us, or book online.</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              We welcome new patients. Reach out and our team will help you find the right time and specialist.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <InfoRow icon={MapPin} label="Clinic" value="42 Linking Road, Bandra West, Mumbai 400050" />
              <InfoRow icon={Phone} label="Phone" value="+91 22 4567 8910" />
              <InfoRow icon={Mail} label="Email" value="hello@lumieredermatology.in" />
              <InfoRow icon={Clock} label="Hours" value="Mon–Fri 8a–6p · Sat 9a–2p · Sun closed" />
            </div>

          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you — we'll be in touch within one business day.");
            }}
            className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10"
          >
            <h3 className="text-2xl">Request an appointment</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill out the form and our team will respond within one business day.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="First name" name="first" />
              <Field label="Last name" name="last" />
              <Field label="Email" name="email" type="email" full />
              <Field label="Phone" name="phone" type="tel" full />
            </div>

            <div className="mt-4">
              <label className="text-xs font-medium text-muted-foreground">Reason for visit</label>
              <textarea
                rows={4}
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                placeholder="Tell us briefly what brings you in…"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90"
            >
              Request Appointment
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              We respect your privacy. Your information is kept confidential.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-foreground">{value}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  full = false,
}: {
  label: string;
  name: string;
  type?: string;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={name} className="text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="h-3.5 w-3.5" />
          </span>
          <span className="font-display text-base text-foreground">Lumière Dermatology</span>
        </div>
        <p>© {new Date().getFullYear()} Lumière Dermatology. All rights reserved.</p>
      </div>
    </footer>
  );
}

const beforeAfterCases = [
  {
    id: "acne",
    title: "Acne & Texture",
    duration: "12 weeks · medical protocol",
    desc: "Combination of topical therapy and in-clinic treatments to clear active acne and refine skin texture.",
    before: baAcneBefore,
    after: baAcneAfter,
  },
  {
    id: "wrinkle",
    title: "Fine Lines & Wrinkles",
    duration: "8 weeks · cosmetic protocol",
    desc: "Targeted injectables and skin-resurfacing therapy to soften expression lines while keeping movement natural.",
    before: baWrinkleBefore,
    after: baWrinkleAfter,
  },
  {
    id: "pigment",
    title: "Pigmentation & Sun Damage",
    duration: "10 weeks · laser protocol",
    desc: "Laser and light therapy paired with at-home routine to even tone and fade long-standing pigmentation.",
    before: baPigmentBefore,
    after: baPigmentAfter,
  },
];

function Results() {
  const [active, setActive] = useState(beforeAfterCases[0].id);
  const current = beforeAfterCases.find((c) => c.id === active)!;

  return (
    <section id="results" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Before &amp; After</p>
        <h2 className="mt-3 text-4xl sm:text-5xl">Visible results, thoughtfully achieved.</h2>
        <p className="mt-4 text-muted-foreground">
          Drag the slider to compare real treatment outcomes from our patients. Every plan is personalized and
          results may vary.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {beforeAfterCases.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              active === c.id
                ? "border-primary bg-primary text-primary-foreground shadow-soft"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <BeforeAfter key={current.id} before={current.before} after={current.after} alt={current.title} />
        <div className="space-y-5">
          <h3 className="text-3xl">{current.title}</h3>
          <p className="text-sm font-medium uppercase tracking-wider text-sage-foreground">{current.duration}</p>
          <p className="text-muted-foreground">{current.desc}</p>
          <ul className="space-y-3 pt-2">
            {[
              "Personalized plan after in-person consultation",
              "Performed by board-certified specialists",
              "Documented progress at every visit",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sage/30 text-sage-foreground">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-2 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90"
          >
            Discuss your plan
          </a>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-muted-foreground">
        Photos shown are representative outcomes. Individual results vary based on skin type, condition, and adherence to the treatment plan.
      </p>
    </section>
  );
}

function BeforeAfter({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      onMouseDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
      onMouseMove={(e) => dragging.current && setFromClientX(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => setFromClientX(e.touches[0].clientX)}
      onTouchMove={(e) => setFromClientX(e.touches[0].clientX)}
      className="relative aspect-square w-full cursor-ew-resize select-none overflow-hidden rounded-3xl border border-border bg-card shadow-card"
    >
      <img
        src={after}
        alt={`${alt} — after treatment`}
        width={800}
        height={800}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={`${alt} — before treatment`}
          width={800}
          height={800}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground backdrop-blur">
        Before
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground backdrop-blur">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-[2px] bg-background shadow-[0_0_0_1px_rgba(0,0,0,0.05)]"
        style={{ left: `calc(${pos}% - 1px)` }}
      />
      <div
        className="pointer-events-none absolute top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-background text-foreground shadow-card"
        style={{ left: `${pos}%` }}
      >
        <MoveHorizontal className="h-4 w-4" />
      </div>
    </div>
  );
}
