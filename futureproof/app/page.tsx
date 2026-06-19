"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { t, type Lang } from "@/lib/translations";

const CALENDLY_URL = "https://calendly.com/futureproof/discovery";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const tr = t[lang];

  return (
    <main className="flex flex-col">
      <Nav lang={lang} setLang={setLang} tr={tr.nav} />
      <Hero tr={tr.hero} />
      <About tr={tr.about} />
      <Services tr={tr.services} />
      <Discovery tr={tr.discovery} />
      <Contact tr={tr.contact} />
      <Footer tr={tr.footer} lang={lang} />
    </main>
  );
}

function LangToggle({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  return (
    <div className="flex items-center gap-1 font-sans text-xs tracking-widest text-muted">
      <button
        onClick={() => setLang("en")}
        className={`px-1.5 py-0.5 transition-colors ${lang === "en" ? "text-charcoal font-medium" : "hover:text-charcoal"}`}
      >
        EN
      </button>
      <span className="text-warm-border">|</span>
      <button
        onClick={() => setLang("de")}
        className={`px-1.5 py-0.5 transition-colors ${lang === "de" ? "text-charcoal font-medium" : "hover:text-charcoal"}`}
      >
        DE
      </button>
    </div>
  );
}

function Nav({
  lang,
  setLang,
  tr,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: typeof t.en.nav;
}) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-warm-border">
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <span className="font-serif text-xl font-medium tracking-wide text-charcoal">
          Futureproof
        </span>
        <nav className="hidden md:flex items-center gap-6 text-sm font-sans">
          <a
            href="#about"
            className="text-muted hover:text-charcoal transition-colors"
          >
            {tr.about}
          </a>
          <a
            href="#services"
            className="text-muted hover:text-charcoal transition-colors"
          >
            {tr.services}
          </a>
          <a
            href="#contact"
            className="text-muted hover:text-charcoal transition-colors"
          >
            {tr.contact}
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-terracotta text-white text-xs tracking-wide hover:bg-terracotta/85 transition-colors"
          >
            {tr.bookCall}
          </a>
          <LangToggle lang={lang} setLang={setLang} />
        </nav>
      </div>
    </header>
  );
}

function Hero({ tr }: { tr: typeof t.en.hero }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-cream/80" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-sage mb-8">
            {tr.eyebrow}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-charcoal leading-[1.05] mb-10">
            {tr.headline1}
            <br />
            <span className="italic text-terracotta">{tr.headline2}</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-3 border border-charcoal text-charcoal font-sans text-sm tracking-wide hover:bg-charcoal hover:text-cream transition-colors"
            >
              {tr.cta1}
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3 bg-terracotta text-white font-sans text-sm tracking-wide hover:bg-terracotta/85 transition-colors"
            >
              {tr.cta2}
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative h-[480px] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80"
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-sage-light flex items-center justify-center">
            <p className="font-serif text-3xl font-light text-sage text-center leading-none">
              10+
              <br />
              <span className="text-base">years</span>
            </p>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 pb-16 w-full">
        <p className="font-sans text-base md:text-lg text-muted max-w-xl leading-relaxed">
          {tr.body}
        </p>
      </div>
    </section>
  );
}

function About({ tr }: { tr: typeof t.en.about }) {
  return (
    <section id="about" className="bg-cream py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
          <div className="relative">
            <div className="relative h-[520px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                alt=""
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-sage p-8 max-w-[220px]">
              <p className="font-serif text-2xl font-light text-white italic leading-snug">
                "Serious but approachable."
              </p>
            </div>
          </div>

          <div className="pt-4 md:pt-12">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-sage mb-6">
              {tr.eyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight mb-4">
              {tr.headline1}
              <br />
              <span className="italic">{tr.headline2}</span>
            </h2>
            <div className="h-px w-12 bg-terracotta mb-8" />
            <div className="space-y-5 font-sans text-base leading-relaxed text-muted">
              <p>{tr.p1}</p>
              <p>{tr.p2}</p>
              <p>{tr.p3}</p>
            </div>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 sm:grid-cols-3 gap-px bg-warm-border">
          {[tr.stat1, tr.stat2, tr.stat3].map((stat, i) => (
            <div
              key={i}
              className="bg-cream px-8 py-10"
            >
              <p className="font-serif text-5xl font-light text-terracotta mb-2">
                {stat.number}
              </p>
              <p className="font-sans text-sm text-muted tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services({ tr }: { tr: typeof t.en.services }) {
  const images = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section id="services" className="bg-cream-dark py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-sage mb-6">
              {tr.eyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight">
              {tr.headline}
            </h2>
          </div>
          <p className="font-sans text-sm text-muted max-w-sm leading-relaxed">
            {tr.subtext}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tr.items.map((service, i) => (
            <div key={i} className="bg-cream group overflow-hidden">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={images[i]}
                  alt=""
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors" />
                <span className="absolute top-4 left-4 font-serif text-white/80 text-sm">
                  0{i + 1}
                </span>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-light text-charcoal mb-4">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  {service.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Discovery({ tr }: { tr: typeof t.en.discovery }) {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-terracotta mb-6">
          {tr.eyebrow}
        </p>
        <h2 className="font-serif text-4xl md:text-6xl font-light text-white leading-tight mb-8 max-w-2xl">
          {tr.headline}
        </h2>
        <p className="font-sans text-base text-white/70 max-w-lg leading-relaxed mb-12">
          {tr.body}
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-4 bg-terracotta text-white font-sans text-sm tracking-wide hover:bg-terracotta/85 transition-colors"
        >
          {tr.cta}
        </a>
      </div>
    </section>
  );
}

function Contact({ tr }: { tr: typeof t.en.contact }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organisation: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-cream py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-sage mb-6">
              {tr.eyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight mb-8">
              {tr.headline1}
              <br />
              <span className="italic">{tr.headline2}</span>
            </h2>
            <div className="h-px w-12 bg-terracotta mb-8" />
            <p className="font-sans text-base text-muted leading-relaxed max-w-sm">
              {tr.body}
            </p>

            <div className="mt-12 relative h-64 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="h-full flex flex-col justify-center py-12">
                <p className="font-serif text-3xl font-light text-charcoal mb-4">
                  {tr.thanks}
                </p>
                <p className="font-sans text-base text-muted leading-relaxed">
                  {tr.thanksBody}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                {[
                  { name: "name", label: tr.name, type: "text", required: true },
                  { name: "email", label: tr.email, type: "email", required: true },
                  { name: "organisation", label: tr.organisation, type: "text", required: false },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block font-sans text-xs tracking-[0.15em] uppercase text-muted mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      value={formState[field.name as keyof typeof formState]}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-warm-border py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block font-sans text-xs tracking-[0.15em] uppercase text-muted mb-2">
                    {tr.message}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-warm-border py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-charcoal transition-colors resize-none"
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-charcoal text-cream font-sans text-sm tracking-wide hover:bg-charcoal/80 transition-colors"
                  >
                    {tr.submit}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({
  tr,
  lang,
}: {
  tr: typeof t.en.footer;
  lang: Lang;
}) {
  return (
    <footer className="bg-charcoal py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-serif text-lg font-light text-cream/80 tracking-wide">
          Futureproof
        </span>
        <div className="flex items-center gap-6">
          <Link
            href={`/impressum?lang=${lang}`}
            className="font-sans text-xs text-cream/50 hover:text-cream/80 transition-colors tracking-wide"
          >
            {tr.impressum}
          </Link>
          <p className="font-sans text-xs text-cream/40 tracking-wide">
            © {new Date().getFullYear()} Futureproof. {tr.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
