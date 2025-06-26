import { Link } from "react-router-dom";
import GoogleTimeline from "../components/GoogleTimeline";

export default function GoogleReklamas() {
    return (
    <div className="min-h-screen bg-white text-black px-4 sm:px-10 py-12 space-y-24">

      {/* Header ikona */}

      {/* Hero */}
    <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center mt-10">
        <div>
            <h1 className="text-4xl font-bold mb-4">Esi redzams tad, kad tas ir vissvarīgāk</h1>
            <p className="text-gray-600 text-lg">
                Google reklāmas ļauj sasniegt lietotājus tieši tajā brīdī, kad viņi meklē tavu produktu vai pakalpojumu.
                Tā ir precīza un efektīva pieeja jaunu klientu piesaistei un pārdošanas rezultātu uzlabošanai.
            </p>
            </div>
            <div className="w-full flex justify-center transition duration-200 ease-in-out transform hover:scale-105 mt-15">
            <img
            src="/photos/google-ads.webp"
            alt="Google reklāmas vizuālis"
            className="w-full max-w-md"
            />
        </div>
    </div>

        <div className="max-w-screen-md mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Kā notiek sadarbība?</h2>
                <GoogleTimeline />
        </div>

             {/* Ieguvumi */}
            <div className="max-w-screen-xl mx-auto space-y-10">
                        <h2 className="text-2xl font-bold text-center">Kāpēc izmantot Google reklāmu?</h2>
            <div className="grid md:grid-cols-3 gap-8">
            {/* 1. risinājums */}
            <div className="relative bg-white rounded-xl p-6 shadow-sm overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
                <img
                src="/photos/google-gradient.svg"
                alt="Efektīva mērķēšana"
                className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none"
                />
                <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">Efektīva mērķēšana</h3>
                <p className="text-gray-600 text-sm">
                    Reklāmas tiek rādītas tieši cilvēkiem, kas interesējas par tavu produktu vai pakalpojumu.
                </p>
                </div>
            </div>

            {/* 2. risinājums */}
            <div className="relative bg-white rounded-xl p-6 shadow-sm overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
                <img
                src="/photos/google-gradient.svg"
                alt="Mērāmi rezultāti"
                className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none transform -rotate-90 scale-550 translate-x-1"
                />
                <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">Mērāmi rezultāti</h3>
                <p className="text-gray-600 text-sm">
                    Skatāmi klikšķi, meklējumi, konversijas – viegli analizēt, kas strādā.
                </p>
                </div>
            </div>

            {/* 3. risinājums */}
            <div className="relative bg-white rounded-xl p-6 shadow-sm overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
                <img
                src="/photos/google-gradient.svg"
                alt="Elastīgs budžets"
                className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none transform rotate-180 scale-110 translate-x-1"
                />
                <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">Elastīgs budžets</h3>
                <p className="text-gray-600 text-sm">
                    Tu kontrolē, cik daudz investē, un vari pielāgot budžetu jebkurā brīdī.
                </p>
            </div>
        </div>
    </div>
</div>

        {/* CTA */}
        <div className="text-center">
            <Link to="/kontakti" className="btn bg-[#E8915F] text-white border-none hover:bg-[#cf7443]">
            Sazinies ar mums!
            </Link>
        </div>
        
    <hr className="my-16 border-t border-gray-500 w-full" />

      {/* BUJ */}
    <div className="max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-6 text-center">Biežāk uzdotie jautājumi</h3>

        {[
        {
            q: "Vai Google reklāma strādā arī mazākiem uzņēmumiem?",
            a: "Jā – Google reklāma ir pielāgojama jebkāda izmēra uzņēmumam un budžetam. Mēs palīdzam maksimāli izmantot pieejamos resursus."
        },
        {
            q: "Cik ātri var sākt reklāmas?",
            a: "Pēc sākotnējās izpētes un stratēģijas apstiprināšanas – jau dažu dienu laikā."
        },
        {
            q: "Vai ir iespējams veikt tikai remārketingu?",
            a: "Protams – remārketings ir ļoti efektīvs, lai atkārtoti uzrunātu potenciālos klientus, kas jau bijuši tavā vietnē."
        }
        ].map((faq, idx) => (
        <div className="collapse collapse-arrow bg-gray-100 mb-3" key={idx}>
            <input type="checkbox" />
            <div className="collapse-title text-md font-medium">{faq.q}</div>
            <div className="collapse-content text-gray-600">
                <p>{faq.a}</p>
            </div>
        </div>
        ))}
    </div>
    </div>
    );
}
