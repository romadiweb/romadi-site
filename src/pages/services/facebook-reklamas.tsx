import { Helmet } from "react-helmet-async";
import IzmaksasCards, { IzmaksasCard } from "../../components/IzmaksasCards";
import IzstradesApraksts from "../../components/IzstradesApraksts";
import KapecRomadi from "../../components/KapecRomadi";
import CallToActionBlock from "../../components/page-components/CallToActionBlock";
import PageLayout from "../../components/page-components/PageLayout";
import Piedavajam from "../../components/Piedavajam";
import ServiceHero from "../../components/ServiceHero";
import { piedavajamContent } from "../../data/piedavajam";

    export default function Facebook() {
    return (
<PageLayout>
        <Helmet>
            <title>Facebook un Instagram reklāmas kampaņas | Romadi</title>
            <meta
                name="description"
                content="Izveidojam reklāmas Facebook un Instagram ar skaidru mērķi – piesaistīt klientus, palielināt pārdošanu un stiprināt zīmolu. Efektīvi, mērķēti un ar datu atskaitēm."
            />
            <meta
                property="og:title"
                content="Facebook un Instagram reklāmas kampaņas | Romadi"
            />
            <meta
                property="og:description"
                content="Romadi palīdz izveidot un vadīt Facebook/Instagram kampaņas, kas sasniedz īsto auditoriju. Dizains, stratēģija un rezultātu optimizācija vienuviet."
            />
            <meta property="og:image" content="https://romadi.lv/og/facebook-reklamas.jpg" />
            <meta property="og:url" content="https://romadi.lv/facebook-reklamas" />
        </Helmet>

        <ServiceHero
                image="/photos/FacebookAds.png"
                title="Facebook reklāmas"
                subtitle="Precīza, efektīva un mērķēta pieeja jaunu klientu piesaistei. Sasniedz savu auditoriju tieši tajā brīdī, kad viņi meklē tavu pakalpojumu."
            />
        <IzstradesApraksts
            title="Sasniedz klientus tur, kur viņi pavada laiku"
            paragraphs={[
                "Sociālie tīkli ir kļuvuši par būtisku ikdienas daļu – vietu, kur cilvēki atpūšas, meklē idejas un iepērkas. Tieši tāpēc Facebook un Instagram reklāmas ir viens no efektīvākajiem veidiem, kā uzrunāt auditoriju.",
                "Mēs palīdzam Tev izmantot šo potenciālu – izveidojam pārdomātas kampaņas, uzstādam Meta pikseļus, atlasām auditorijas un rūpējamies, lai katrs reklāmas eiro nestu rezultātu."
            ]}
            tags={["Buisness Suite", "Event Manager", "Meta Pixel", "Audience Network"]}
        />
        <Piedavajam
            heading="Ko mēs piedāvājam?"
            sections={piedavajamContent.facebook}
        />
        
        <IzmaksasCards>
            <IzmaksasCard
                image="/photos/facebook-pack-1.png"
                title="Starta komplekts"
                description="Palīdzam izveidot jaunu biznesa kontu Meta platformā, sasaistām to ar Tavu mājaslapu un sagatavojam visu pamata infrastruktūru – no pikseļa uzstādīšanas līdz apmaksas iestatījumiem. Iepazīstinām ar reklāmu izveides principiem un pārvaldību."
                price="no 199 €"
            />
            <IzmaksasCard
                image="/photos/facebook-pack-2.png"
                title="Optimizētais komplekts"
                description="Veidojam personalizētu reklāmas kontu ar efektīvu klientu piesaistes struktūru. Nodrošinām produktu vai pakalpojumu reklāmu izvietošanu un to optimizāciju Meta platformā. Apmācām, kā atlasīt auditorijas un izveidot reklāmas, kas uzrunā gan jaunus, gan esošos klientus."
                price="no 299 €/mēn"
            />
            <IzmaksasCard
                image="/photos/facebook-pack-3.png"
                title="Pilnais komplekts"
                description="Pilns Meta reklāmas uzstādījumu cikls vienā pakalpojumā. Izveidojam un optimizējam biznesa kontu, uzstādām pikseļus un CAPI, izstrādājam stratēģiju 3 mēnešiem uz priekšu, sagatavojam vairākus reklāmas materiālus, un iestatām automātisku pārskatu saņemšanu uz Tavu e-pastu. Iekļauta arī individuāla 1:1 konsultācija pēc pirmās kampaņas uzsākšanas."
                price="no 299 €"
            />
        </IzmaksasCards>

        <KapecRomadi section="facebook" />

        <section className="max-w-screen-xl mx-auto px-6 text-center space-y-10">
            <h2 className="text-2xl font-bold">Rīki jūsu Facebook reklāmam</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 grayscale opacity-80">
            <img src="/logos/facebook.svg" title="Facebook" alt="Facebook" className="h-10" />
            <img src="/logos/adroll.svg" title="Adroll" alt="Adroll" className="h-10" />
            <img src="/logos/meta-black.svg" title="Meta" alt="Meta" className="h-10" />
            <img src="/logos/mailchimp-black.svg" title="Mailchimp" alt="Mailchimp" className="h-10" />
            <img src="/logos/adobe-black.svg" title="Adobe" alt="Adobe" className="h-10" />
            </div>
        </section>

        <CallToActionBlock section="facebook" />
</PageLayout>
    );
    }
