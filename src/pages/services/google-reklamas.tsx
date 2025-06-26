import { Helmet } from "react-helmet-async";
import IzmaksasCards, { IzmaksasCard } from "../../components/IzmaksasCards";
import CallToActionBlock from "../../components/page-components/CallToActionBlock";
import PageLayout from "../../components/page-components/PageLayout";
import PapildusPiedavajumi from "../../components/PapildusPiedavajumi";
import Piedavajam from "../../components/Piedavajam";
import ServiceHero from "../../components/ServiceHero";
import { piedavajamContent } from "../../data/piedavajam";

import {
    AlarmClock,
    BarChart2,
    Clock,
    FileWarning,
    Info,
    RefreshCcw,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

const piedavajumi = [
    {
        icon: AlarmClock,
        title: "Laika plānošana",
        description: "Plānojam reklāmu rādīšanas laikus pēc mērķauditorijas aktivitātes.",
    },
    {
        icon: BarChart2,
        title: "Konversiju analīze",
        description: "Izvērtējam, kuras kampaņas dod reālu ieguvumu un optimizējam rezultātus.",
    },
    {
        icon: Sparkles,
        title: "Reklāmu atjaunošana",
        description: "Periodiski atsvaidzinām dizainu un tekstus, lai uzturētu klikšķu dinamiku.",
    },
    {
        icon: ShieldCheck,
        title: "Politikas pārbaude",
        description: "Nodrošinām, ka reklāmas atbilst Google prasībām un netiek noraidītas.",
    },
];

    export default function GoogleReklamas() {
    return (
    <PageLayout>
        <Helmet>
            <title>Google reklāmas pārvaldība un optimizācija | Romadi</title>
            <meta
                name="description"
                content="Palielini klientu plūsmu ar Google Ads – izveidojam un optimizējam kampaņas, kas piesaista un pārdod. Ar datiem balstīti risinājumi un mēneša atskaites."
            />
            <meta
                property="og:title"
                content="Google reklāmas pārvaldība un optimizācija | Romadi"
            />
            <meta
                property="og:description"
                content="Romadi palīdz uzņēmumiem augt ar efektīvām Google reklāmām – no atslēgvārdiem līdz konversijām. Skaidri rezultāti, pārdomātas stratēģijas."
            />
            <meta property="og:image" content="https://romadi.lv/og/google-reklamas.jpg" />
            <meta property="og:url" content="https://romadi.lv/google-reklamas" />
        </Helmet>
            <ServiceHero
                image="/photos/GoogleAds.png"
                title="Google reklāmas"
                subtitle="Precīza, efektīva un mērķēta pieeja jaunu klientu piesaistei. Sasniedz savu auditoriju tieši tajā brīdī, kad viņi meklē tavu pakalpojumu."
            />
        <Piedavajam
            heading="Ko mēs piedāvājam?"
            sections={piedavajamContent.google}
        />
        <IzmaksasCards>
            <IzmaksasCard
                image="/photos/GooglePakalpojums-2.png"
                title="Starta komplekts"
                description="Piemērots mazajiem uzņēmumiem, vietējiem pakalpojumu sniedzējiem, kuri vēlas ātru redzamību Google
                    meklēšanā bez lielām investīcijām."
                price="no 190 €/mēn"
            />
            <IzmaksasCard
                image="/photos/GooglePakalpojums-1.png"
                title="Premium pārklājums"
                description="Ideāli piemērots E-komercijas uzņēmumiem, uzņēmumiem ar augstāku konkurenci, vai tiem, kuri vēlas regulāru
                    augstas kvalitātes reklāmas uzturēšanu un augstāku atdevi."
                price="no 450 €/mēn"
            />
        </IzmaksasCards>
        <section className="max-w-screen-xl mx-auto space-y-6">
    <h2 className="text-2xl font-bold text-center">Piezīmes</h2>
        <ul className="max-w-2xl mx-auto space-y-4">
            <li className="flex items-start gap-3 text-zinc-700">
            <FileWarning className="w-5 h-5 mt-1 text-black" />
            <span>
                <strong>Konta pieejas:</strong> mēs strādājam ar klienta esošo vai kopīgi izveidotu Google Ads kontu.
            </span>
            </li>
            <li className="flex items-start gap-3 text-zinc-700">
            <Clock className="w-5 h-5 mt-1 text-black" />
            <span>
                <strong>Rezultāti prasa laiku:</strong> pirmajās nedēļās veidojam datu bāzi un optimizējam soli pa solim.
            </span>
            </li>
            <li className="flex items-start gap-3 text-zinc-700">
            <RefreshCcw className="w-5 h-5 mt-1 text-black" />
            <span>
                <strong>Pastāvīga optimizācija:</strong> reklāmu veiktspēja mainās, tāpēc veicam regulāras izmaiņas.
            </span>
            </li>
            <li className="flex items-start gap-3 text-zinc-700">
            <Info className="w-5 h-5 mt-1 text-black" />
            <span>
                <strong>Budžets:</strong> atcerieties par google reklāmas budžetu, tas tiek noteikts atsevišķi.
            </span>
            </li>
        </ul>
    </section>

        <PapildusPiedavajumi offers={piedavajumi} />
        <section className="max-w-screen-xl mx-auto px-6 text-center space-y-10">
            <h2 className="text-2xl font-bold">Rīki jūsu Google reklāmam</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 grayscale opacity-80">
            <img src="/logos/google-ads-black.svg" title="Google ads" alt="Google Ads" className="h-10" />
            <img src="/logos/googletagmanager-black.svg" title="Tag manager" alt="Tag manager" className="h-10" />
            <img src="/logos/semrush-black.png" title="Semrush" alt="Semrush" className="h-10" />
            <img src="/logos/mailchimp-black.svg" title="Mailchimp" alt="Mailchimp" className="h-10" />
            <img src="/logos/adobe-black.svg" title="Adobe" alt="Adobe" className="h-10" />
            </div>
        </section>
        <CallToActionBlock section="google" />
    </PageLayout>
    );
    }
