import { motion } from "framer-motion";
import TechnologySlider from "./TechnologySlider";

export default function Hero() {

    const handleScrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            className="h-screen flex flex-col bg-[url('/photos/blurry-gradient-green.svg')] bg-cover"
        >
            <div className="flex-1 basis-[85%] flex items-center justify-center text-black font-sans">
                <motion.div
                    className="w-full max-w-screen-xl mx-auto pt-5 px-6 flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-10"
                    initial={{ x: -400 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    {/* Teksts */}
                    <div className="max-w-2xl relative text-left mx-auto lg:mx-0 [@media(min-width:1612px)]:mt-12">
                        <h1 className="text-4xl pt-[60px] sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-[#FAF9F6]">
                            Romadi
                            <br />
                            <span className="text-3xl sm:text-4xl md:text-5xl font-medium">mājas lapu izstrāde</span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-200 mb-2">
                            Tavs uzņēmums ir unikāls – tāda būs arī tava mājaslapa.
                        </p>
                        <p className="text-base sm:text-lg text-gray-200 mb-6">
                            Perfekta izvēle tavam nākamajam projektam.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-start">
                            <button
                                onClick={() => handleScrollTo("pakalpojumi")}
                                className="btn bg-zinc-900 text-white hover:bg-zinc-800 rounded-full px-6 transition duration-200 ease-in-out transform hover:scale-105"
                            >
                                Pakalpojumi
                                <img
                                    src="/icons/down-arrow.png"
                                    alt="pakalpojumi ikona"
                                    className="ml-1 w-5 h-5"
                                />
                            </button>

                            <button
                                onClick={() => handleScrollTo("par-mums")}
                                className="btn bg-zinc-900 text-white hover:bg-zinc-800 rounded-full px-6 transition duration-200 ease-in-out transform hover:scale-105"
                            >
                                Par mums
                                <img
                                    src="/icons/info-white.svg"
                                    alt="par ikona"
                                    className="ml-1 w-5 h-5"
                                />
                            </button>
                        </div>
                    </div>

                    {/* Attēls */}
                    <div className="hidden [@media(min-width:1612px)]:flex self-start lg:ml-20 mt-4 shrink-0">
                        <img
                            src="romadi_sand.png"
                            className="max-w-sm rounded-lg"
                            alt="Romadi Logo"
                        />
                    </div>
                </motion.div>
            </div>
            <div className="basis-[15%] bg-gray-100 flex items-center justify-center">
                <TechnologySlider />
            </div>
        </section>
    );
}
