import { Helmet } from "react-helmet-async";
import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import About from "../components/page-components/About";
import Services from "../components/Services";

export default function Home() {
    return (
        <>
        <Helmet>
            <title>Mājaslapu izstrāde, izveide un uzturēšana | Romadi</title>
            <meta
            name="description"
            content="Romadi izstrādā pielāgotas mājaslapas, pārdomātu dizainu un SEO risinājumus uzņēmumiem Latvijā. Tehniski precīzi, vizuāli pārliecinoši, ar rezultātu prātā."
            />
            <meta
            property="og:title"
            content="Pielāgotas mājaslapas, dizains un SEO – Romadi"
            />
            <meta
            property="og:description"
            content="Romadi palīdz uzņēmumiem augt tiešsaistē – ar web dizainu, izstrādi un digitālo stratēģiju. Saskarē ar kvalitāti."
            />
            <meta property="og:image" content="https://romadi.lv/og/home.jpg" />
            <meta property="og:url" content="https://romadi.lv/" />
        </Helmet>
            <Hero />
            <Services />
            <About />
            <CallToAction />
        </>
    );
}
