    export default function CallToAction() {
    return (
        <section className="bg-white py-20 text-center border-t border-black">
        <div
            className="inline-block px-4 sm:px-8 md:px-20 lg:px-32 xl:px-40 py-20 rounded-xl mx-auto"
            style={{
            backgroundImage: 'url("/photos/blurry-gradient-green.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
        >
            <p className="text-xs text-gray-400 mb-4">
                Viegla komunikācija · Reāla interese · Uz rezultātu
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
                Gatavs spert nākamo soli?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8 ">
            Ja tev ir ideja, mēs varam palīdzēt to realizēt. Sazinies ar mums un apspriedīsim, ko varam izveidot kopā.
            </p>
            <a
            href="/kontakti"
            className="btn btn-neutral btn-wide mb-6 bg-white text-black rounded-full transition-transform duration-300 hover:scale-[1.15]"
            >
            SĀKAM TAGAD
            </a>
            <p className="text-xs text-gray-400 mb-4">
                Neesi pārliecināts ar ko sākt? - Mēs palīdzēsim.
            </p>
        </div>
        </section>
    );
    }
