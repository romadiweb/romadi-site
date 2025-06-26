import {
    Headphones,
    ServerCog,
    ShieldCheck,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import IzmaksasCards, { IzmaksasCard } from "../../components/IzmaksasCards";
import IzstradesApraksts from "../../components/IzstradesApraksts";
import KapecRomadi from "../../components/KapecRomadi";
import MaksajumiUnPiegade from "../../components/MaksajumiUnPiegade";
import CallToActionBlock from "../../components/page-components/CallToActionBlock";
import PageLayout from "../../components/page-components/PageLayout";
import Piedavajam from "../../components/Piedavajam";
import ServiceHero from "../../components/ServiceHero";
import { piedavajamContent } from "../../data/piedavajam";


export default function InternetaVeikali() {

    

    return (
    <PageLayout>
        <Helmet>
            <title>Interneta veikalu izstrāde, kas pārdod. | Romadi</title>
            <meta
                name="description"
                content="Izstrādājam pielāgotus interneta veikalus, kas pārdod – no dizaina līdz maksājumiem, automatizācijai un analītikai. WooCommerce, Shopify un custom risinājumi."
            />
            <meta
                property="og:title"
                content="Interneta veikalu izstrāde, kas pārdod. | Romadi"
            />
            <meta
                property="og:description"
                content="Romadi veido interneta veikalus, kas palīdz uzņēmumiem augt – ar drošu funkcionalitāti, pielāgotiem dizainiem un visu, kas nepieciešams pārdošanai tiešsaistē."
            />
            <meta property="og:image" content="https://romadi.lv/og/interneta-veikali.jpg" />
            <meta property="og:url" content="https://romadi.lv/interneta-veikalu-izstrade" />
        </Helmet>
        <ServiceHero
                image="/photos/InternetaVeikali.png"
                title="Interneta veikalu izstrāde"
                subtitle="Precīza, efektīva un mērķēta pieeja jaunu klientu piesaistei. Sasniedz savu auditoriju tieši tajā brīdī, kad viņi meklē tavu pakalpojumu."
            />

        <IzstradesApraksts
            title="Atver durvis tiešsaistes veikalam"
            paragraphs={[
                "Interneta tirdzniecība turpina strauji augt, un tās nozīme uzņēmumu attīstībā kļūst arvien būtiskāka. Cilvēki izvēlas ērtību – iegādāties preces un pakalpojumus tiešsaistē, vien pāris klikšķu attālumā.",
                "Ja vēlies saglabāt konkurētspēju šodienas digitālajā tirgū, ir svarīgi pielāgoties un izmantot iespējas, ko sniedz e-komercija. Mēs palīdzam to īstenot – ar risinājumiem, kas pielāgoti tieši tavām vajadzībām."
            ]}
            tags={["WooCommerce", "Shopify", "Node.js", "React", "Laravel"]}
        />

        <Piedavajam
            heading="Ko mēs piedāvājam?"
            sections={piedavajamContent.veikali}
        />


        <IzmaksasCards>
            <IzmaksasCard
                image="/photos/shopify.png"
                title="Standarta interneta veikals"
                description="Ideāli piemērots maziem uzņēmumiem, kuri vēlas sākt tirdzniecību internetā ar dažiem produktiem. Ietver produktu katalogu, pirkuma grozu un maksājumu integrāciju."
                price="Sākot no 600 €"
            />
            <IzmaksasCard
                image="/photos/laravel-ec.png"
                title="Pielāgots interneta veikals"
                description="Veikals ar specifisku funkcionalitāti, kas nav realizējama gatavos risinājumos. Īpaši piemērots, ja nepieciešama sarežģīta loģika, savienojumi ar ārējām sistēmām vai pilnīga dizaina un funkciju kontrole."
                price="Sākot no 1100 €"
            />
        </IzmaksasCards>

            <section className="max-w-screen-xl mx-auto px-6 py-16 space-y-6">
                <h2 className="text-2xl font-bold text-center">Piezīmes</h2>
                <ul className="max-w-2xl mx-auto space-y-4">
                    <li className="flex items-start gap-3 text-zinc-700">
                    <ShieldCheck className="w-5 h-5 mt-1 text-black" />
                    <span>
                        <strong>Drošības uzturēšana:</strong> regulāra mājaslapas pārbaude un aizsardzība pret uzbrukumiem.
                    </span>
                    </li>
                    <li className="flex items-start gap-3 text-zinc-700">
                    <Headphones className="w-5 h-5 mt-1 text-black" />
                    <span>
                        <strong>Tehniskais atbalsts:</strong> ātra palīdzība tehniskos jautājumos pēc izstrādes.
                    </span>
                    </li>
                    <li className="flex items-start gap-3 text-zinc-700">
                    <ServerCog className="w-5 h-5 mt-1 text-black" />
                    <span>
                        <strong>Hostings un monitorings:</strong> drošs hostings un uzraudzība, lai viss strādā vienmērīgi.
                    </span>
                    </li>
                </ul>
            </section>



        <KapecRomadi section="veikali" />
        
        <MaksajumiUnPiegade />
        
        <CallToActionBlock section="veikali" />
    </PageLayout>
    );
}
