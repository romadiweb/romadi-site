import { Helmet } from "react-helmet-async";
import IzmaksasCards, { IzmaksasCard } from "../../components/IzmaksasCards";
import IzstradesApraksts from "../../components/IzstradesApraksts";
import KapecRomadi from "../../components/KapecRomadi";
import CallToActionBlock from "../../components/page-components/CallToActionBlock";
import PageLayout from "../../components/page-components/PageLayout";
import Piedavajam from "../../components/Piedavajam";
import ServiceHero from "../../components/ServiceHero";
import { piedavajamContent } from "../../data/piedavajam";



export default function Seo() {

    return (
        
        <PageLayout>
            <Helmet>
                <title>SEO optimizācija un mājaslapu redzamība | Romadi</title>
                <meta name="description" content="Palielini savas mājaslapas pozīcijas Google meklētājā ar stratēģisku SEO – audits, satura optimizācija un rezultātu uzraudzība no Romadi." />
                <meta property="og:title" content="SEO optimizācija un mājaslapu redzamība | ROMADI" />
                <meta property="og:description" content="Palielini savas mājaslapas pozīcijas Google meklētājā ar stratēģisku SEO – audits, satura optimizācija un rezultātu uzraudzība no Romadi." />
                <meta property="og:image" content="https://romadi.lv/og/seo.jpg" />
                <meta property="og:url" content="https://romadi.lv/seo-optimizacija" />
            </Helmet>


            <ServiceHero
                image="/photos/seo.png"
                title="SEO optimizācija"
                subtitle="Gudra, ilgtermiņa stratēģija tava uzņēmuma izaugsmei. Uzlabo savu pozīciju meklētājos un esi pirmais, ko atrod tavi klienti."
            />

            <IzstradesApraksts
                title="Esi tur, kur tevi meklē"
                paragraphs={[
                    "Laba mājaslapa nav tikai vizuāla – tai jābūt arī redzamai. SEO ir ilgtermiņa ieguldījums, kas ļauj tev būt klātesošam Google rezultātos tad, kad klientiem tevi visvairāk vajag.",
                    "Neatkarīgi no tā, vai sākam no nulles vai optimizējam esošu lapu – mūsu pieeja ir datu balstīta, caurspīdīga un pielāgota katram uzņēmumam individuāli."
                ]}
                tags={["Google", "Semrush", "Tag Manager", "WordPress", "React"]}
            />

            <Piedavajam
                heading="Ko mēs piedāvājam?"
                sections={piedavajamContent.seo}
            />

            <IzmaksasCards>
                <IzmaksasCard
                    image="/photos/seo-basic.png"
                    title="Pamata SEO pakotne"
                    description="Ideāli piemērota jaunām mājaslapām vai nelieliem uzņēmumiem. Ietver tehnisko auditu, atslēgvārdu izpēti un sākotnējo optimizāciju."
                    price="Sākot no 180 €"
                />
                <IzmaksasCard
                    image="/photos/seo-full.png"
                    title="SEO + stratēģija"
                    description="Uzlabojam saturu, testējam, analizējam un pielāgojam. Tu saņem ne tikai redzamību, bet arī skaidrus pārskatus, rīcības plānu un mērāmus rezultātus katru mēnesi."
                    price="Sākot no 320 €/mēn"
                />
            </IzmaksasCards>

            <KapecRomadi section="seo" />

            <CallToActionBlock section="seo" />
        </PageLayout>
    );
}
