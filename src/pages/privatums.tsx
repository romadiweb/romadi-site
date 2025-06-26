    import { Mail, MapPin } from "lucide-react";

    export default function Privatums() {
    return (
        <div className="bg-white">
        <section className="bg-white max-w-6xl mx-auto px-4 py-20 text-zinc-800">
        <h1 className="text-3xl font-bold mb-8 text-center ">Privātuma politika</h1>

        <div className="space-y-8">
            <section>
                <p className="pb-10">Informācijas, ko sniedzat lietojot mājas lapu romadi.lv, izmantošanas apraksts.</p>
            <h2 className="text-xl font-semibold mb-2">1. Kas mēs esam?</h2>
            <p>
                ROMADI ir digitālo pakalpojumu uzņēmums, kas piedāvā mājaslapu izstrādi, dizainu, SEO un saistītos pakalpojumus.
                Mūsu mājaslapa: <a href="https://romadi.lv" className="underline text-blue-600">romadi.lv</a>
            </p>
            </section>

            <section>
            <h2 className="text-xl font-semibold mb-2">2. Kādu informāciju mēs apkopojam?</h2>
            <ul className="list-disc ml-6 space-y-1">
                <li>Tehnisko informāciju (pārlūkprogrammas tips, ekrāna izmērs)</li>
                <li>Apmeklējuma datus (tikai ar piekrišanu)</li>
                <li>Kontaktinformāciju, ja aizpildāt formas (vārds, e-pasts, tālrunis)</li>
            </ul>
            </section>

            <section>
            <h2 className="text-xl font-semibold mb-2">3. Kādiem nolūkiem mēs izmantojam datus?</h2>
            <ul className="list-disc ml-6 space-y-1">
                <li>Lapas funkcionalitātes un uzlabojumu nolūkiem (Google Analytics)</li>
                <li>Klientu pieprasījumu apstrādei</li>
                <li>Pielāgotu piedāvājumu rādīšanai (ar piekrišanu)</li>
            </ul>
            </section>

            <section>
            <h2 className="text-xl font-semibold mb-2">4. Sīkfailu izmantošana</h2>
            <p>
                Mēs izmantojam sīkfailus (cookies), lai:
            </p>
            <ul className="list-disc ml-6 space-y-1">
                <li>Nodrošinātu vietnes darbību (būtiskie sīkfaili)</li>
                <li>Analizētu apmeklējumu (tikai ar Jūsu piekrišanu)</li>
            </ul>
            <p className="mt-2">
                Izvēli varat pārvaldīt jebkurā brīdī, izmantojot iestatījumu pogu lapas kreisajā apakšstūra.
            </p>
            </section>

            <section>
            <h2 className="text-xl font-semibold mb-2">5. Datu glabāšana un aizsardzība</h2>
            <p>
                Dati tiek glabāti drošos serveros, un tie netiek izpausti trešajām pusēm bez tiesiska pamata. Mēs neveicam lietotāju identificēšanu bez nepieciešamības.
            </p>
            </section>

            <section>
            <h2 className="text-xl font-semibold mb-2">6. Jūsu tiesības</h2>
            <p>Saskaņā ar GDPR Jums ir tiesības:</p>
            <ul className="list-disc ml-6 space-y-1">
                <li>Pieprasīt piekļu savai informācijai</li>
                <li>Pieprasīt datu labojumus vai dzēšanu</li>
                <li>Atsaukt piekrišanu jebkurā brīdī</li>
            </ul>
            </section>

            <section>
            <h2 className="text-xl font-semibold mb-2">7. Saziņa ar mums</h2>
            <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" /> <span>info@romadi.lv</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
                <MapPin className="w-5 h-5" /> <span>Liepāja, Latvija</span>
            </div>
            </section>
        </div>
        </section>
        </div>
    );
    }
