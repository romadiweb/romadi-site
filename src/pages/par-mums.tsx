import { Helmet } from "react-helmet-async";
import PageLayout from "../components/page-components/PageLayout";

export default function ParMums() {
    return (
        <PageLayout>
            <Helmet>
                <title>Par Romadi – Mūsu pieeja, vērtības un komanda | Romadi </title>
                <meta name="description" content="Romadi ir web izstrādes un digitālā attīstības komanda, kas strādā ar mērķi – radīt dizainiski un tehniski izcilus risinājumus uzņēmumiem Latvijā." />
                <meta property="og:title" content="Par Mums – Mūsu pieeja, vērtības un komanda | ROMADI" />
                <meta property="og:description" content="Iepazīsti Romadi komandu, mūsu pieredzi un vērtības. Mēs ticam individuālai pieejai un kvalitatīvam rezultātam." />
                <meta property="og:image" content="https://romadi.lv/og/par-mums.jpg" />
                <meta property="og:url" content="https://romadi.lv/par-mums" />
            </Helmet>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kreisā kolonna */}
            <div className="mt-20">
            <h1 className="text-3xl sm:text-3xl font-bold mb-4 ml-4">Kas ir ROMADI?</h1>
            <p className="text-gray-600 mb-6 max-w-xl ml-4">
                ROMADI ir neliela, bet spēcīga digitālā komanda, kas apvieno dizainu, izstrādi un stratēģiju vienotā piedāvājumā. Mēs radām mājaslapas, kas izskatās labi, strādā perfekti un palīdz sasniegt reālus rezultātus.
            </p>

            <div className="mb-8">
                <h2 className="text-lg font-semibold mb-2 ml-4">Mūsu pieeja</h2>
                <p className="text-sm text-gray-700 max-w-md ml-4">
                Katra sadarbība sākas ar sarunu. Mēs ieklausāmies, uzdodam jautājumus un tikai tad piedāvājam risinājumus. Mums svarīgi, lai klientam viss ir saprotami, caurspīdīgi un ar vērtību.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-lg font-semibold mb-2 ml-4">Ko mēs darām</h2>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 ml-4">
                <li>Mājaslapu dizains un izstrāde</li>
                <li>Satura pārvaldība un SEO</li>
                <li>Reklāmas integrācija (Google, Facebook)</li>
                <li>UI/UX uzlabojumi un funkcionalitāte</li>
                <li>Ilgtermiņa uzturēšana un atbalsts</li>
                </ul>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-2 ml-4">Kam mēs palīdzam?</h2>
                <p className="text-sm text-gray-700 max-w-md ml-4">
                Mazajiem uzņēmumiem, radošajiem cilvēkiem, nišas zīmoliem un ikvienam, kam vajag uzticamu digitālo partneri. Mūsu darbi runā paši par sevi.
                </p>
            </div>
            </div>

            {/* Labā kolonna - attēls */}
            <div className="flex items-center justify-center">
            <img
                src="/photos/about-us-placeholder.jpg"
                alt="Par mums"
                className="rounded-xl shadow-md max-w-full h-auto"
            />
            </div>
        </div>

        <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Biežāk uzdotie jautājumi</h2>

        <div className="space-y-4">
        <div className="collapse collapse-arrow bg-base-100 border-base-300">
            <input type="checkbox" />
            <div className="collapse-title text-md font-medium bg-gray-100">
                Vai es varu sadarboties ar jums, ja vēl nezinu precīzi, ko man vajag?
        </div>
            <div className="collapse-content text-sm bg-gray-100 text-gray-600 shadow">
                Jā protams!  Mēs palīdzam saprast vajadzības, uzdodam pareizos jautājumus un piedāvājam piemērotāko pieeju.
            </div>
        </div>

            <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-md font-medium bg-gray-100">
                Ko tieši nozīmē “caurspīdīga sadarbība”?
                </div>
                <div className="collapse-content text-sm bg-gray-100 text-gray-600 shadow">
                Mēs runājam atklāti. Tas nozīmē – bez slēptām izmaksām, bez neskaidrām tehniskām frāzēm. Mēs pastāstām, kāpēc kaut kas ir svarīgi, kā tas ietekmē rezultātu, un dodam klientam iespēju pieņemt pārdomātus lēmumus.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 ">
                <input type="checkbox" />
                <div className="collapse-title text-md font-medium bg-gray-100">
                Kas jums pašiem ir vissvarīgākais, strādājot ar klientiem?
                </div>
                <div className="collapse-content text-sm bg-gray-100 text-gray-600 shadow">
                Uzticība un komunikācija. Mums svarīgi, lai abas puses jūtas uz viena viļņa. Mēs cenšamies būt pieejami, godīgi, iejūtīgi un sniegt patiesu vērtību. Neesam tikai “izpildītāji” — mēs domājam līdzi.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 ">
                <input type="checkbox" />
                <div className="collapse-title text-md font-medium bg-gray-100">
                Vai ROMADI piedāvā ilgtermiņa sadarbību vai tikai vienreizējus projektus?
                </div>
                <div className="collapse-content text-sm bg-gray-100 text-gray-600 shadow">
                Abi varianti ir iespējami. Mēs strādājam gan pie vienreizējiem projektiem, gan kļūstam par klientu ilgtermiņa partneriem, nodrošinot uzturēšanu, satura atjaunošanu un izaugsmes atbalstu.
                </div>
            </div>
            </div>
        </div>
</PageLayout>

    );
    }
