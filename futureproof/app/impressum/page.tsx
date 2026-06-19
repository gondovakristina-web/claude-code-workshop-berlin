"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ImpressumContent() {
  const params = useSearchParams();
  const lang = params.get("lang") === "de" ? "de" : "en";
  const isDE = lang === "de";

  return (
    <main className="min-h-screen bg-cream pt-32 pb-24">
      <div className="max-w-2xl mx-auto px-6 md:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-muted hover:text-charcoal transition-colors mb-12"
        >
          ← {isDE ? "Zurück" : "Back"}
        </Link>

        <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-12">
          Impressum
        </h1>

        <div className="space-y-10 font-sans text-sm text-muted leading-relaxed">
          <section>
            <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-charcoal mb-4">
              {isDE ? "Angaben gemäß § 5 TMG" : "Information according to § 5 TMG"}
            </h2>
            <p>
              [Your Name]<br />
              [Street and Number]<br />
              [Postcode] [City]<br />
              Germany
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-charcoal mb-4">
              {isDE ? "Kontakt" : "Contact"}
            </h2>
            <p>
              {isDE ? "Telefon" : "Phone"}: [+49 ...] <br />
              E-Mail: [hello@futureproof.com]
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-charcoal mb-4">
              {isDE ? "Umsatzsteuer-ID" : "VAT ID"}
            </h2>
            <p>
              {isDE
                ? "Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:"
                : "VAT identification number according to § 27a of the German VAT Act:"}
              <br />
              [DE ...]
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-charcoal mb-4">
              {isDE
                ? "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV"
                : "Responsible for content according to § 55 Abs. 2 RStV"}
            </h2>
            <p>
              [Your Name]<br />
              [Street and Number]<br />
              [Postcode] [City]
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-charcoal mb-4">
              {isDE ? "Streitschlichtung" : "Dispute Resolution"}
            </h2>
            <p>
              {isDE
                ? "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
                : "The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr/. Our email address can be found above in the legal notice. We are not willing or obligated to participate in dispute resolution proceedings before a consumer arbitration board."}
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-charcoal mb-4">
              {isDE ? "Haftung für Inhalte" : "Liability for Content"}
            </h2>
            <p>
              {isDE
                ? "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen."
                : "As a service provider, we are responsible for our own content on these pages under the general laws pursuant to § 7 para. 1 TMG. According to §§ 8 to 10 TMG, however, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity."}
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-charcoal mb-4">
              {isDE ? "Haftung für Links" : "Liability for Links"}
            </h2>
            <p>
              {isDE
                ? "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich."
                : "Our website contains links to external third-party websites, the content of which we have no influence over. Therefore, we cannot accept any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for the content of those pages."}
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-charcoal mb-4">
              {isDE ? "Urheberrecht" : "Copyright"}
            </h2>
            <p>
              {isDE
                ? "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers."
                : "The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator."}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default function ImpressumPage() {
  return (
    <Suspense>
      <ImpressumContent />
    </Suspense>
  );
}
