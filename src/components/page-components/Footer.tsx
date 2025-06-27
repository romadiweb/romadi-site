    export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 text-sm">
        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_auto_auto_auto] gap-10">

            {/* Logo un nosaukums */}
            <div className="flex flex-col gap-3">
            <img src="/romadi_square_white.png" alt="Romadi logo" className="h-10 w-10 object-contain block ml-[-7px]" />
            <span className="font-semibold tracking-wide uppercase text-white">Romadi</span>
            <p className="text-gray-500 text-sm">
                Mēs radām augsti funkcionējošas, pielāgotas mājaslapas, kas palīdz Tavam uzņēmumam sasniegt vairāk — jebkur, jebkurā laikā.
            </p>
            </div>

            {/* Pakalpojumi */}
        

            {/* Pieseko mums */}
            <div className="text-left lg:text-right items-start md:items-end">
            <h4 className="text-white font-semibold mb-4">Pieseko mums</h4>
            <ul className="flex md:flex-col gap-4 md:gap-2 text-gray-400">
                <li className="flex justify-start lg:justify-end items-center gap-2">
                <img src="/icons/facebook.svg" className="w-4 h-4" alt="Facebook" />
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
                </li>
                <li className="flex justify-start lg:justify-end items-center gap-2">
                <img src="/icons/instagram.svg" className="w-4 h-4" alt="Instagram" />
                <a href="https://instagram.com/romadi.lv/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
                </li>
                <li className="flex justify-start lg:justify-end items-center gap-2">
                <img src="/logos/tiktok.svg" className="w-4 h-4" alt="TikTok" />
                <a href="https://tiktok.com/@romadi.lv" target="_blank" rel="noopener noreferrer" className="hover:text-white">TikTok</a>
                </li>
            </ul>
            </div>

            {/* Sazinies */}
            <div className="text-left lg:text-right items-start lg:items-end">
            <h4 className="text-white font-semibold mb-4">Sazinies</h4>
            <ul className="space-y-3 text-gray-400">
                <li className="flex justify-start lg:justify-end items-center gap-2">
                <img src="/icons/mail-white.svg" className="w-5 h-5" alt="email" />
                <span>info@romadi.lv</span>
                </li>
                <li className="flex justify-start lg:justify-end items-center gap-2">
                <img src="/icons/phone-white.svg" className="w-5 h-5" alt="phone" />
                <span>+371 26625125</span>
                </li>
                <li className="flex justify-start lg:justify-end items-center gap-2">
                <img src="/icons/phone-white.svg" className="w-5 h-5" alt="phone" />
                <span>+371 29625996</span>
                </li>
                <li className="pt-2">
                <a href="/kontakti" className="text-white underline hover:opacity-80">
                    Piesaki sarunu ar mums
                </a>
                </li>
            </ul>
            </div>
            <div className="text-left lg:text-right items-start md:items-end">
            <h4 className="text-white font-semibold mb-4">Pakalpojumi</h4>
            <ul className="space-y-3 text-gray-400">
                <li><a href="izstrade">Mājaslapu izstrāde</a></li>
                <li><a href="seo">Interneta viekalu izstrāde</a></li>
                <li><a href="dizains">Dizains un zīmolvedība</a></li>
                <li><a href="saturs">SEO optimizācija</a></li>
                <li><a href="google">Google reklāmas</a></li>
                <li><a href="facebook">Facebook reklāmas</a></li>
            </ul>
            </div>
        </div>

        

        {/* Apakšējais rinds */}
        <div className="mt-10 text-center text-gray-500 text-xs px-6">
            © {new Date().getFullYear()} Romadi. Visas tiesības aizsargātas.
        </div>
        </footer>
    );
    }
