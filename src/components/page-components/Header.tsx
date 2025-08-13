import { AnimatePresence, motion } from "framer-motion";
import { BarChart2, Code2, Facebook, Instagram, Menu, Paintbrush, SearchCode, ShoppingBag, ThumbsUp, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import BookCallDrawer from "../BookCallDrawer";
import PromoModal from "../page-components/PromoModal";
import TopBanner from "../page-components/TopBanner";
import ScrollToTop from "./ScrollToTop";



export default function Header({ offset = 0 }: { offset?: number }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [bookOpen, setBookOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [copiedMessage, setCopiedMessage] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [promoOpen, setPromoOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setDrawerOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1612) {
                setDrawerOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !(dropdownRef.current as any).contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setDrawerOpen(false);
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedMessage("Nokopēts!");
        setTimeout(() => setCopiedMessage(""), 2000);
    };

    const [landscape, setLandscape] = useState(false);

        useEffect(() => {
            const checkOrientation = () => {
            setLandscape(window.matchMedia("(orientation: landscape) and (max-height: 500px)").matches);
        };
            checkOrientation();
            window.addEventListener("resize", checkOrientation);
            return () => window.removeEventListener("resize", checkOrientation);
        }, []);

    return (
        <div className="drawer z-[80]" role="navigation" aria-label="Galvenā navigācija">
            <div className="hide-on-landscape">
            {!landscape && (
        <TopBanner visible={!scrolled && !promoOpen} onClick={() => setPromoOpen(true)} />
        )}

            </div>
            <div className="drawer-content">
                <div className="navbar bg-[#F3F3F3] backdrop-blur-md text-black shadow fixed left-0 right-0 top-0 transition-all duration-300 z-[70]">
                    <div className="w-full max-w-screen-xl mx-auto px-6 flex items-center justify-between transition-all duration-300">
                        <div className="min-w-[180px] flex items-center space-x-2 shrink-0">
                            <a href="/" className="flex items-center space-x-2 transition duration-200 ease-in-out transform hover:scale-105">
                                <img src="romadi_square.png" alt="Romadi logo" className="w-11 h-11 object-contain" />
                                <span style={{ fontFamily: 'Chivo, sans-serif' }} className="text-[28px] font-semibold tracking-tight">
                                    ROMADI
                                </span>
                            </a>
                        </div>

                        <div className="hidden [@media(min-width:1612px)]:flex flex-1 justify-center">
                            <ul className="menu menu-horizontal px-1 text-base gap-5 whitespace-nowrap">
                                <li><a href="/">Sākums</a></li>
                                <li className="relative" ref={dropdownRef}>
                                    <button onClick={() => setDropdownOpen(prev => !prev)} className="flex items-center gap-1 cursor-pointer" aria-haspopup="true" aria-expanded={dropdownOpen}>
                                        Pakalpojumi
                                        <svg className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
<AnimatePresence>
    {dropdownOpen && (
        <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-[68px] left-59 right-59 bg-[#F3F3F3] text-[#232323] z-[60] overflow-hidden shadow-xl border-t border-gray-300"
        >
        <div className="flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-8 text-lg w-full max-w-7xl">


            <a href="majas-lapu-izstrade" className="flex items-center text-base font-medium gap-2 hover:text-gray-500 transition">
            <Code2 className="w-5 h-5" /> Mājas lapu izstrāde
            </a>
            <a href="interneta-veikalu-izstrade" className="flex items-center text-base font-medium gap-2 hover:text-gray-500 transition">
            <ShoppingBag className="w-5 h-5" /> Interneta veikalu izstrāde
            </a>
            <a href="ui-ux-dizains" className="flex items-center text-base font-medium gap-2 hover:text-gray-500 transition">
            <Paintbrush className="w-5 h-5" /> UI/UX Dizains
            </a>
            <a href="seo-optimizacija" className="flex items-center text-base font-medium gap-2 hover:text-gray-500 transition">
            <SearchCode className="w-5 h-5" /> SEO optimizācija
            </a>
            <a href="google-reklamas" className="flex items-center text-base font-medium gap-2 hover:text-gray-500 transition">
            <BarChart2 className="w-5 h-5" /> Google reklāmas
            </a>
            <a href="facebook-reklamas" className="flex items-center text-base font-medium gap-2 hover:text-gray-500 transition">
            <ThumbsUp className="w-5 h-5" /> Facebook reklāmas
            </a>
        </div>
        </div>
        </motion.div>
    )}
</AnimatePresence>



                                </li>
                                <li><a href="/par-mums">Par mums</a></li>
                                <li><a href="/kontakti">Kontakti</a></li>
                                <li><a href="/portfolio">Portfolio</a></li>
                            </ul>
                        </div>

                        {!drawerOpen && (
                            <div className="[@media(min-width:1612px)]:hidden">
                                <button onClick={() => setDrawerOpen(true)} className="btn btn-ghost" aria-label="Atvērt izvēlni">
                                    <Menu className="w-6 h-6" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <ScrollToTop hide={drawerOpen} />
            </div>

            <BookCallDrawer isOpen={bookOpen} onClose={() => setBookOpen(false)} />
            <PromoModal isOpen={promoOpen} close={() => setPromoOpen(false)} />

            <div className={`fixed inset-0 z-[100] flex justify-end transition-opacity duration-300 ${drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100]" onClick={() => setDrawerOpen(false)}></div>
                <div
  className={`
    relative
    w-full sm:w-80
    min-h-screen
    overflow-y-auto
    bg-white text-black text-lg font-medium
    z-[101]
    ${drawerOpen ? 'translate-x-0' : 'sm:translate-x-full'}
    sm:transform
    sm:transition-transform sm:duration-300
  `}
>


                    <button onClick={() => setDrawerOpen(false)} className="absolute top-4 right-4 btn btn-ghost z-50" aria-label="Aizvērt izvēlni">
                        <X className="w-6 h-6" />
                    </button>
                    <ul className="menu pt-6 p-6 gap-6 text-lg">
                        <li><a href="/" className="hover:text-gray-500">Sākums</a></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Pakalpojumi</summary>
                                <ul className="p-1 text-[#252525] font-normal rounded w-56 dropdown-content z-[1] menu mt-5">
                                    <li><a href="majas-lapu-izstrade" className="hover:text-gray-500">Mājaslapu izstrāde</a></li>
                                    <li><a href="interneta-veikalu-izstrade" className="hover:text-gray-500">Interneta veikalu izstrāde</a></li>
                                    <li><a href="ui-ux-dizains" className="hover:text-gray-500">UI/UX Dizains</a></li>
                                    <li><a href="seo-optimizacija" className="hover:text-gray-500">SEO optimizācija</a></li>
                                    <li><a href="google-reklamas" className="hover:text-gray-500">Google reklāmas</a></li>
                                    <li><a href="facebook-reklamas" className="hover:text-gray-500">Facebook reklāmas</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a href="/par-mums" className="hover:text-gray-500">Par mums</a></li>
                        <li><a href="/kontakti" className="hover:text-gray-500">Kontakti</a></li>
                        <li><a className="hover:text-gray-500">Portfolio</a></li>

                        <hr className="my-6 border-gray-300" />

                        <div className="flex gap-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Facebook className="w-6 h-6 text-black" />
                            </a>
                            <a href="https://instagram.com/romadi.lv" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-6 h-6 text-black" />
                            </a>
                            <a href="https://tiktok.com/@romadi.lv" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/tiktok-black.svg" alt="TikTok" className="w-6 h-6" />
                            </a>
                        </div>

                        <hr className="mb-4 border-gray-300" />

                        <div className="space-y-2 text-gray-600 text-sm font-normal">
                            <p className="cursor-pointer hover:text-black transition" onClick={() => handleCopy("info@romadi.lv")}>info@romadi.lv</p>
                            <p className="cursor-pointer hover:text-black transition" onClick={() => handleCopy("+37126625125")}>+371 26625125</p>
                            <p className="cursor-pointer hover:text-black transition" onClick={() => handleCopy("+37129625996")}>+371 29625996</p>
                            {copiedMessage && (
                                <div className="alert alert-success mt-4 text-sm shadow flex items-center gap-2 transition-opacity duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-4 w-4" fill="none" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{copiedMessage}</span>
                                </div>
                            )}
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}
