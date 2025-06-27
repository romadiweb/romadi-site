import { Headphones, Server, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import IzmaksasCards, { IzmaksasCard } from "../../components/IzmaksasCards";
import IzstradesApraksts from "../../components/IzstradesApraksts";
import KapecRomadi from "../../components/KapecRomadi";
import CallToActionBlock from "../../components/page-components/CallToActionBlock";
import PageLayout from "../../components/page-components/PageLayout";
import PapildusPiedavajumi from "../../components/PapildusPiedavajumi";
import Piedavajam from "../../components/Piedavajam";
import ServiceHero from "../../components/ServiceHero";
import { piedavajamContent } from "../../data/piedavajam";


export default function Izstrade() {

    const piedavajumi = [
    {
        icon: Shield,
        title: "Drošības uzturēšana",
        description: "Regulāra mājaslapas pārbaude un aizsardzība pret uzbrukumiem.",
    },
    {
        icon: Headphones,
        title: "Tehniskais atbalsts",
        description: "Ātra palīdzība tehniskos jautājumos pēc izstrādes.",
    },
    {
        icon: Server,
        title: "Hostings un monitorings",
        description: "Drošs hostings un uzraudzība, lai viss strādā vienmērīgi.",
    },
];


    return (
        <PageLayout>
            <Helmet>
                <title>Mājaslapu izstrāde – dizains & funkcionalitāte | Romadi</title>
                <meta
                    name="description"
                    content="Veidojam mūsdienīgas, ātras un mērķētām auditorijām pielāgotas mājaslapas – ar skaidru dizainu, drošu tehnoloģiju un atbalstu pēc izstrādes."
                />
                <meta property="og:title" content="Mājaslapu izstrāde – dizains & funkcionalitāte | Romadi" />
                <meta
                    property="og:description"
                    content="Romadi izstrādā modernas, drošas un ātri ielādējošas mājaslapas, kas palīdz uzņēmumiem piesaistīt un noturēt klientus tiešsaistē."
                />
                <meta property="og:image" content="https://romadi.lv/og/majaslapu-izstrade.jpg" />
                <meta property="og:url" content="https://romadi.lv/majaslapu-izstrade" />
            </Helmet>
        <ServiceHero
                image="/photos/Izstrade.png"
                title="Mājas lapu izstrāde"
                subtitle="Precīza, efektīva un mērķēta pieeja jaunu klientu piesaistei. Sasniedz savu auditoriju tieši tajā brīdī, kad viņi meklē tavu pakalpojumu."
            />

    <IzstradesApraksts
        title="Tava vieta digitālajā pasaulē"
        paragraphs={[
            "Mājaslapa bieži ir pirmais iespaids par tavu uzņēmumu – un reizēm arī vienīgais. Tieši tāpēc ir svarīgi, lai tā izskatās pārliecinoši, ielādējas ātri un ir ērti lietojama.",
            "Aiz glīta dizaina slēpjas arī tehniskā puse — drošība, uzticamība, SEO un spēja pielāgot saturu. Mēs parūpējamies par abiem: gan par to, ko redz lietotājs, gan par to, kas notiek fonā."
        ]}
        tags={["WordPress", "Laravel", "UX/UI", "React", "Next.js", "CSS"]}
    />
    <Piedavajam
            heading="Ko mēs piedāvājam?"
            sections={piedavajamContent.izstrade}
        />

    <IzmaksasCards>
            <IzmaksasCard
                image="/photos/css.png"
                title="Statiskas un vienkāršas lapas"
                description="Vienkāršas piezemēšanās lapas (landing pages), portfolio, pasākumu apraksti vai citas vienlapu mājaslapas bez dinamiskas loģikas. Izstrādātas ātri, uzticami un viegli uzturamas."
                price="Sākot no 300 €"
            />
            <IzmaksasCard
                image="/photos/react.png"
                title="Moderna individuālā izstrāde"
                description="Tīras, ātras un responsīvas mājaslapas, kas izskatās un funkcionē izcili visās ierīcēs. Ideāli piemērots uzņēmumiem, kuriem prioritāte ir vizuālais izskats un lietošanas ērtums, bez smagas backend loģikas."
                price="Sākot no 550 €"
            />
            <IzmaksasCard
                image="/photos/wordpress.png"
                title="WordPress mājas lapu izstrāde"
                description="Populārākais satura pārvaldības risinājums pasaulē – pielāgojams, uzticams un vienkāršs lietošanā. Piedāvājam gan gatavu motīvu uzstādīšanu, gan custom dizainus ar Elementor, WPBakery vai pilnībā individuālu pieeju."
                price="Sākot no 450 €"
            />
            <IzmaksasCard
                image="/photos/laravel.png"
                title="Laravel + frontend"
                description="Kad nepieciešams gan skaists dizains, gan spēcīga loģika fonā – apvienojam modernu frontend ar Laravel backend. Ideāli pielāgoti projektiem, kur vizuālā puse un funkcionalitāte iet roku rokā."
                price="Sākot no 1000 €"
            />
        </IzmaksasCards>


<PapildusPiedavajumi offers={piedavajumi} />;

    <KapecRomadi section="izstrade" />

    <section className="max-w-screen-xl mx-auto px-6 text-center space-y-10">
            <h2 className="text-2xl font-bold">Rīki jūsu mājas lapas izstrādei</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 grayscale opacity-80">
            <img src="/logos/laravel.svg" title="Laravel" alt="Laravel" className="h-10" />
            <img src="/logos/wordpress.svg" title="WordPress" alt="WordPress" className="h-10" />
            <img src="/logos/react.svg" title="React" alt="React" className="h-10" />
            <img src="/logos/googleanalytics.svg" title="Google Analytics" alt="Google Analytics" className="h-10" />
            <img src="/logos/vercel.svg" title="Vercel" alt="Vercel" className="h-10" />
            <img src="/logos/aws.svg" title="Amazon Web Services" alt="Amazon Web Services" className="h-10" />
            </div>
        </section>

        <CallToActionBlock section="izstrade" />

    </PageLayout>
    );
}
