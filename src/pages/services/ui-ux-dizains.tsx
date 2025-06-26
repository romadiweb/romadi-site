import { NotebookPen } from "lucide-react";
import { Helmet } from "react-helmet-async";
import IzmaksasCards, { IzmaksasCard } from "../../components/IzmaksasCards";
import IzstradesApraksts from "../../components/IzstradesApraksts";
import CallToActionBlock from "../../components/page-components/CallToActionBlock";
import PageLayout from "../../components/page-components/PageLayout";
import Piedavajam from "../../components/Piedavajam";
import ServiceHero from "../../components/ServiceHero";
import { piedavajamContent } from "../../data/piedavajam";

export default function Dizains() {
    return (
    <PageLayout>
            <Helmet>
                <title>UI/UX dizaina izstrāde mājaslapām un lietotnēm | Romadi</title>
                <meta
                    name="description"
                    content="Veidojam dizainus, kas ir ne tikai skaisti, bet arī funkcionāli – ar skaidru struktūru, lietošanas ērtumu un pielāgojumu visām ierīcēm."
                />
                <meta property="og:title" content="UI/UX dizaina izstrāde mājaslapām un lietotnēm | Romadi" />
                <meta
                    property="og:description"
                    content="Pirmais iespaids ir izšķirošs – Romadi palīdz uzņēmumiem izcelties ar pārdomātu lietotāja pieredzi un zīmola vizuālo identitāti."
                />
                <meta property="og:image" content="https://romadi.lv/og/ui-ux-dizains.jpg" />
                <meta property="og:url" content="https://romadi.lv/ui-ux-dizains" />
            </Helmet>
        <ServiceHero
                image="/photos/dizains.png"
                title="UI-UX dizains"
                subtitle="Precīza, efektīva un mērķēta pieeja jaunu klientu piesaistei. Sasniedz savu auditoriju tieši tajā brīdī, kad viņi meklē tavu pakalpojumu."
            />
        <IzstradesApraksts
            title="Pirmais iespaids paliek"
            paragraphs={[
                "Pirms veidojam vizuālo daļu, rūpīgi saprotam auditoriju un tās vajadzības. Veidojam lietotāja pieredzi, kas ir dabiska un saprotama no pirmā klikšķa.",
                "Katra dizaina detaļa kalpo mērķim – piesaistīt uzmanību, veicināt rīcību un palīdzēt zīmolam palikt atmiņā. Tas nav tikai par skaistu izskatu – tas ir par risinājumu, kas strādā."
            ]}
            tags={["Figma","AdobeXD","Canva","UXPin"]}
        />
        <Piedavajam
            heading="Ko mēs piedāvājam?"
            sections={piedavajamContent.uiux}
        />
        <IzmaksasCards>
            <IzmaksasCard
                image="/photos/figma-simple.png"
                title="Mini UI/UX"
                description="Vienkāršs dizains līdz 3 sadaļām. Ideāli sākuma lapām vai portfolio."
                price="Sākot no 100 €"
            />
            <IzmaksasCard
                image="/photos/figma.png"
                title="Biznesa UI/UX"
                description="Pilna vietnes struktūra (4–7 sadaļas), prototips, mobilais pielāgojums."
                price="Sākot no  190€"
            />
        </IzmaksasCards>

        <section className="max-w-screen-xl mx-auto px-6 -mt-12">
            <div className="rounded-2xl p-10 text-left space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                        <NotebookPen className="w-6 h-6 text-[#333]" />
                <h2 className="text-2xl font-bold">Piezīmes</h2>
                    </div>
                <p className="text-gray-700 text-left"><strong>Cenas</strong> ir orientējošas un var tikt pielāgotas pēc individuālas situācijas.<br></br>
                Esat <strong>jauns uzņēmums?</strong> Sniedzam atlaides sadarbības sākumā.<br></br> Ir pieejami <strong>dizaina labojumi</strong> ar revīzijām pēc nodošanas.</p>
            </div>
        </section>

        <CallToActionBlock section="uiux" />
    </PageLayout>
    );
}