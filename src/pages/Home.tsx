import { Helmet } from "react-helmet-async";
import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import About from "../components/page-components/About";
import Services from "../components/Services";

const faqs = [
  {
    q: "Cik ātri varat uzsākt darbu pie projekta?",
    a: "Parasti uzsākam darbu 1–3 dienu laikā pēc pirmās konsultācijas un vienošanās. Steidzamiem projektiem iespējami izņēmumi."
  },
  {
    q: "Vai varu pasūtīt tikai dizainu vai tikai izstrādi?",
    a: "Jā. Piedāvājam gan pilnus pakalpojumu komplektus, gan atsevišķus posmus — dizains, izstrāde, SEO, uzturēšana."
  },
  {
    q: "Kādas tehnoloģijas izmantojat?",
    a: "Front-end — React/Vite/Tailwind; back-end — Laravel/PHP; papildus integrējam maksājumus, SEO un analītiku."
  },
  {
    q: "Cik ilgs ir izstrādes laiks?",
    a: "Tipiska mājaslapa 2–4 nedēļas atkarībā no sarežģītības, satura un integrācijām."
  },
  {
    q: "Vai nodrošināt uzturēšanu pēc palaišanas?",
    a: "Jā — piedāvājam uzturēšanas plānus un vienreizējus uzlabojumus pēc vajadzības."
  }
];

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": a
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Mājaslapu izstrāde, izveide un uzturēšana | Romadi</title>
        <meta
          name="description"
          content="Romadi izstrādā pielāgotas mājaslapas, pārdomātu dizainu un SEO risinājumus uzņēmumiem Latvijā. Tehniski precīzi, vizuāli pārliecinoši, ar rezultātu prātā."
        />
        <meta name="robots" content="index, follow, max-snippet:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1" />
        <link rel="canonical" href="https://romadi.lv/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://romadi.lv/" />
        <meta
          property="og:title"
          content="Pielāgotas mājaslapas, dizains un SEO – Romadi"
        />
        <meta
          property="og:description"
          content="Romadi palīdz uzņēmumiem augt tiešsaistē – ar web dizainu, izstrādi un digitālo stratēģiju. Saskarē ar kvalitāti."
        />
        <meta property="og:image" content="https://romadi.lv/og/home.jpg" />

        {/* FAQ rich results */}
        <script type="application/ld+json">
          {JSON.stringify(faqJsonLd)}
        </script>
      </Helmet>

      <Hero />
      <Services />
      <About />

      {/* FAQ section (content must exist on page to match JSON-LD) */}
      <section id="faq" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">Biežāk uzdotie jautājumi</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }, i) => (
            <details key={i} className="group rounded-2xl border p-4">
              <summary className="cursor-pointer font-semibold text-lg list-none">
                {q}
              </summary>
              <div className="mt-2 text-base leading-relaxed">{a}</div>
            </details>
          ))}
        </div>
      </section>

      <CallToAction />
    </>
  );
}
