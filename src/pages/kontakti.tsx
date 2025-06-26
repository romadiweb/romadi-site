    import { Clock, Mail, MapPin, Phone, PhoneCall, CheckCircle } from "lucide-react";
    import { Helmet } from "react-helmet-async";
    import PageLayout from "../components/page-components/PageLayout";
    import { useForm, ValidationError } from "@formspree/react";

    export default function Kontakti() {
    const [state, handleSubmit] = useForm("xeokpbwe");

    return (
        <PageLayout>
        <Helmet>
            <title>Kontakti - Konsultācijas, WEB projektu izstrāde | Romadi</title>
            <meta
            name="description"
            content="Ieplāno bezmaksas konsultāciju ar Romadi – mājaslapu izstrāde, SEO, dizains un digitālie risinājumi. Atbildēsim ātri un draudzīgi!"
            />
            <meta property="og:title" content="Sazinies ar mums | ROMADI" />
            <meta
            property="og:description"
            content="Ieplāno bezmaksas konsultāciju ar Romadi – mājaslapu izstrāde, SEO, dizains un digitālie risinājumi."
            />
            <meta property="og:image" content="https://romadi.lv/og/kontakti.jpg" />
            <meta property="og:url" content="https://romadi.lv/kontakti" />
        </Helmet>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
            <p className="text-gray-600 mb-8 max-w-xl mt-20 ml-4">
                Vai tev ir jautājums, ideja vai vienkārši vēlies saprast, kā mēs varam palīdzēt? Mēs vienmēr esam atvērti sarunai. Izvēlies sev ērtāko saziņas veidu – mēs atbildēsim ātri un precīzi.
            </p>

            <div className="mb-8 ml-4">
                <h2 className="text-lg font-semibold mb-2">Kontakti ikdienas saziņai</h2>
                <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    info@romadi.lv
                </li>
                <li className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    +371 266 251 25
                </li>
                <li className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    +371 296 259 96
                </li>
                </ul>
            </div>

            <div className="mb-8 ml-4">
                <h2 className="text-lg font-semibold mb-2">Noderīga informācija</h2>
                <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Pirmdiena – Piektdiena, 09:00 – 18:00
                </li>
                <li className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Liepāja un attālināti visā Latvijā.
                </li>
                <li className="flex items-center gap-2">
                    <PhoneCall className="w-5 h-5" />
                    Atbildam darba dienas laikā.
                </li>
                </ul>
            </div>

            <div className="">
                <h2 className="text-lg font-semibold mb-2 ml-4">Par Romadi pieeju</h2>
                <p className="text-sm text-gray-600 max-w-md ml-4">
                Mēs uzskatām, ka laba sadarbība sākas ar sapratni. Tāpēc katru projektu sākam ar sarunu, kurā izprotam tavas vajadzības un sniedzam godīgu ieteikumu. Bez uzspiešanas. Bez steigas.
                </p>
            </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8 mt-20">
            <h2 className="text-xl font-bold mb-6">Sazinies</h2>

            {state.succeeded ? (
            <div className="flex flex-col items-center justify-center text-center bg-green-100 border border-green-300 text-green-800 px-6 py-8 rounded-xl space-y-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
                <h3 className="text-xl font-semibold">Ziņa veiksmīgi nosūtīta!</h3>
                <p className="text-sm max-w-md">
                Paldies par Tavu ziņu – mēs atbildēsim tuvākajā laikā. Tikmēr droši iepazīsties ar mūsu piedāvājumiem vai iepriekšējiem darbiem.
                </p>
            </div>
            ) : (
            <form
                noValidate
                onSubmit={(e) => {
                    e.preventDefault();

                    const form = e.currentTarget;
                    const name = form.name;
                    const email = form.email;
                    const phone = form.phone;
                    const message = form.message;
                    const budget = form.budget;

                    // Validācija ar lokalizētiem ziņojumiem
                    name.setCustomValidity("");
                    email.setCustomValidity("");
                    phone.setCustomValidity("");
                    budget.setCustomValidity("");
                    message.setCustomValidity("");

                    if (!name.value) {
                    name.setCustomValidity("Lūdzu, ievadi savu vārdu.");
                    name.reportValidity();
                    return;
                    }

                    if (!email.value) {
                    email.setCustomValidity("Lūdzu, ievadi savu e-pastu.");
                    email.reportValidity();
                    return;
                    }

                    if (!email.validity.valid) {
                    email.setCustomValidity("Lūdzu, ievadi derīgu e-pasta adresi.");
                    email.reportValidity();
                    return;
                    }

                    if (!phone.value) {
                    phone.setCustomValidity("Lūdzu, ievadi savu tālruņa numuru.");
                    phone.reportValidity();
                    return;
                    }

                    if (!budget.value) {
                    budget.setCustomValidity("Lūdzu, izvēlies budžeta kategoriju.");
                    budget.reportValidity();
                    return;
                    }

                    if (!message.value) {
                    message.setCustomValidity("Lūdzu, ievadi savu ziņu.");
                    message.reportValidity();
                    return;
                    }

                    // Sūtām
                    handleSubmit(e);
                }}
                className="space-y-4"
                >
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_gotcha" className="hidden" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                    type="text"
                    name="name"
                    placeholder="Vārds*"
                    required
                    className="input input-bordered w-full bg-white"
                    />
                    <input
                    type="email"
                    name="email"
                    placeholder="E-pasts*"
                    required
                    className="input input-bordered w-full bg-white"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                    type="text"
                    name="phone"
                    placeholder="Tālrunis*"
                    required
                    className="input input-bordered w-full bg-white"
                    />
                    <select
                    name="budget"
                    defaultValue=""
                    required
                    className="select select-bordered w-full text-gray-600 bg-white"
                    >
                    <option disabled value="">-- Izvēlies budžetu --</option>
                    <option>Tavs piedāvājums</option>
                    <option>līdz 500 EUR</option>
                    <option>500 - 1000 EUR</option>
                    <option>1000 - 2000 EUR</option>
                    <option>2000 - 5000 EUR</option>
                    <option>5000 - 10000 EUR</option>
                    </select>
                </div>

                <textarea
                    name="message"
                    placeholder="Ievadiet ziņu*"
                    required
                    className="textarea textarea-bordered w-full bg-white"
                    rows={4}
                />

                <div className="text-right">
                    <button
                    type="submit"
                    disabled={state.submitting}
                    className="btn bg-black text-white hover:bg-neutral-800 px-6 rounded-full"
                    >
                    Nosūtīt ziņu
                    </button>
                </div>
                </form>

            )}
            </div>
        </div>

        {/* FAQ sadaļa */}
        <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-2xl font-bold mb-6 text-center">Biežāk uzdotie jautājumi</h2>

            <div className="space-y-4">
            <div className="collapse collapse-arrow bg-base-100 border-base-300">
                <input type="checkbox" />
                <div className="collapse-title text-md font-medium bg-gray-100">
                Cik ātri varat uzsākt darbu pie projekta?
                </div>
                <div className="collapse-content text-sm bg-gray-100 text-gray-600 shadow">
                Parasti uzsākam darbu 1–3 dienu laikā pēc sarunas un vienošanās. Steidzamiem projektiem iespējami izņēmumi.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-md font-medium bg-gray-100">
                Vai varu pasūtīt tikai dizainu vai tikai izstrādi?
                </div>
                <div className="collapse-content text-sm bg-gray-100 text-gray-600 shadow">
                Jā! Piedāvājam gan pilnus pakalpojumu komplektus, gan atsevišķus posmus — dizains, attīstīšana, uzturēšana.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 ">
                <input type="checkbox" />
                <div className="collapse-title text-md font-medium bg-gray-100">
                Vai piedāvājat arī uzturēšanu pēc mājaslapas izveides?
                </div>
                <div className="collapse-content text-sm bg-gray-100 text-gray-600 shadow">
                Jā, piedāvājam dažādus uzturēšanas plānus atkarībā no projekta apjoma. Tāpat varam palīdzēt arī vienreizējos uzlabojumos.
                </div>
            </div>
            </div>
        </div>
        </PageLayout>
    );
}
