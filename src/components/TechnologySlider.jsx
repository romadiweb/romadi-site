    import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";



    const techLogos = [
    "/logos/react.svg",
    "/logos/laravel.svg",
    "/logos/tailwind.svg",
    "/logos/js.svg",
    "/logos/php.svg",
    "/logos/html.svg",
    "/logos/git.svg",
    "/logos/shopify.svg",
    "/logos/python.svg",
    "/logos/ccplus.svg",
    "/logos/paypal.svg",
    "/logos/wordpress.svg",
    "/logos/google.svg",
    "/logos/ruby.svg",
    "/logos/css.svg",
    "/logos/facebook.svg",
    "/logos/typescript.svg",
    "/logos/blender.svg",
    "/logos/canva.svg",
    "/logos/woocommerce-black.svg",
    ];

    export default function TechnologySlider() {
    const [current, setCurrent] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const containerRef = useRef(null);
    const sliderRef = useRef(null);
    const intervalRef = useRef(null);
    const isTabActive = useRef(true);
    const LOGO_WIDTH = 160;
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);


    const calculateVisibleCount = () => {
        if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const maxCount = 4;
        return Math.max(1, Math.min(maxCount, Math.floor(containerWidth / LOGO_WIDTH)));
        }
        return 1;
    };

    const stopSlider = () => {
        if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        }
    };

    const restartSlider = () => {
        stopSlider();
        if (isTabActive.current) {
        intervalRef.current = setInterval(() => {
            setCurrent((prev) => prev + 1);
        }, 3000);
        }
    };

    useEffect(() => {
        const handleResize = () => {
        setVisibleCount(calculateVisibleCount());
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        restartSlider();
        return () => stopSlider();
    }, [visibleCount]);

    useEffect(() => {
        const onBlur = () => {
        isTabActive.current = false;
        stopSlider();
        };

        const onFocus = () => {
        isTabActive.current = true;
        restartSlider();
        };

        window.addEventListener("blur", onBlur);
        window.addEventListener("focus", onFocus);

        return () => {
        window.removeEventListener("blur", onBlur);
        window.removeEventListener("focus", onFocus);
        };
    }, []);

    const previous = () => {
        if (!isTransitioning) return;
        stopSlider();
        setCurrent((prev) => (prev - 1 < 0 ? techLogos.length - 1 : prev - 1));
        restartSlider();
    };

    const next = () => {
    if (!isTransitioning) return;
    stopSlider();
    setCurrent((prev) => {
        if (prev + 1 > techLogos.length) {
        setIsTransitioning(false);
        return 0;
        }
        return prev + 1;
    });
    restartSlider();
    };

    const getClonedLogos = () => {
        return [...techLogos, ...techLogos.slice(0, visibleCount)];
    };

    const visibleLogos = getClonedLogos();

    useEffect(() => {
        if (!sliderRef.current) return;
        const handleTransitionEnd = () => {
        if (current >= techLogos.length) {
            setIsTransitioning(false);
            setCurrent(0);
        }
        };
        const node = sliderRef.current;
        node.addEventListener("transitionend", handleTransitionEnd);
        return () => node.removeEventListener("transitionend", handleTransitionEnd);
    }, [current]);

    useEffect(() => {
        if (!isTransitioning) {
        requestAnimationFrame(() => {
            setIsTransitioning(true);
        });
        }
    }, [isTransitioning]);

    return (
        <div className="w-full bg-white py-8 min-h-[160px] relative">
        <motion.div
            className="max-w-screen-xl mx-auto px-6 text-center"
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <h2 className="text-3xl font-bold text-neutral mb-2">Tehnoloģijas, kurām uzticamies</h2>
            <p className="text-sm text-gray-500 mb-6">
            Mūsdienīgi risinājumi katrā Romadi projektā
            </p>

            <div className="relative flex items-center justify-center" ref={containerRef}>
            <div className="absolute left-0 top-0 bottom-0 w-12  from-gray-100 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12  from-gray-100 to-transparent pointer-events-none z-10" />

            <button
                onClick={previous}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-1 bg-[#F7F7F7] rounded-full cursor-pointer"
            >
                <ChevronLeft className="w-5 h-5 text-gray-600 hover:text-black transition" />
            </button>

            <div
                className="overflow-hidden"
                style={{
                width: `${LOGO_WIDTH * visibleCount}px`,
                margin: "0 auto",
                height: "100px",
                }}
            >
                <div
                    ref={sliderRef}
                    className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                    style={{
                        transform: `translateX(-${current * LOGO_WIDTH}px)`,
                        width: `${visibleLogos.length * LOGO_WIDTH}px`,
                    }}
                    onTouchStart={(e) => {
                        touchStartX.current = e.touches[0].clientX;
                    }}
                    onTouchMove={(e) => {
                        touchEndX.current = e.touches[0].clientX;
                    }}
                    onTouchEnd={() => {
                        const diff = touchStartX.current - touchEndX.current;
                        if (Math.abs(diff) > 50) {
                        if (diff > 0) {
                            next();
                        } else {
                            previous();
                        }
                        }
                    }}
                >

                {visibleLogos.map((logo, index) => (
                    <div
                    key={index}
                    className="flex items-center justify-center"
                    style={{ width: `${LOGO_WIDTH}px`, height: "100px" }}
                    >
                    <img
                        src={logo}
                        alt={`logo-${index}`}
                        className="w-[80%] max-h-16 object-contain"
                    />
                    </div>
                ))}
                </div>
            </div>

            <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-1 bg-[#F7F7F7] rounded-full cursor-pointer"
            >
                <ChevronRight className="w-5 h-5 text-gray-600 hover:text-black transition" />
            </button>
            </div>
        </motion.div>
        </div>
    );
    }
