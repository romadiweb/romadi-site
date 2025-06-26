    import { CookieIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Switch from "../components/page-components/Switch";

    export default function CookiesModal() {
    const [showBanner, setShowBanner] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [analyticsEnabled, setAnalyticsEnabled] = useState(true); // default ON

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) setShowBanner(true);
        else {
        const parsed = JSON.parse(consent);
        setAnalyticsEnabled(parsed.analytics ?? false);
        }
    }, []);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        const parsed = consent ? JSON.parse(consent) : {};
        if (parsed.analytics) {
        const script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-WW3WBL6D";
        script.async = true;
        document.head.appendChild(script);

        setTimeout(() => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
            event: "cookie_consent_accepted",
            analytics_enabled: true,
            });
        }, 800);
        }
    }, []);

    const accept = () => {
        // Uzreiz piekrīt arī analītikai
        localStorage.setItem(
        "cookieConsent",
        JSON.stringify({ analytics: true })
        );
        setAnalyticsEnabled(true);
        setShowBanner(false);
        setShowModal(false);

        const scriptExists = document.querySelector(
        'script[src*="gtm.js?id=GTM-WW3WBL6D"]'
        );
        if (!scriptExists) {
        const script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-WW3WBL6D";
        script.async = true;
        document.head.appendChild(script);
        }

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
        event: "cookie_consent_accepted",
        analytics_enabled: true,
        });
    };

    const decline = () => {
        localStorage.setItem(
        "cookieConsent",
        JSON.stringify({ analytics: false })
        );
        setAnalyticsEnabled(false);
        setShowBanner(false);
        setShowModal(false);

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
        event: "cookie_consent_declined",
        analytics_enabled: false,
        });
    };

    const openModal = () => {
        setShowModal(true);
        // Tikai ja nav piekrišana iepriekš — tad iestata default = true
        if (!localStorage.getItem("cookieConsent")) {
        setAnalyticsEnabled(true);
        }
    };

    return (
        <>
        {showBanner && (
            <div className="fixed bottom-0 left-0 right-0 bg-black text-white shadow-md z-[9999] p-4 text-sm">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                <CookieIcon className="text-white w-5 h-5" />
                <p>Šī vietne izmanto sīkfailus, lai uzlabotu lietotāja pieredzi.</p>
                </div>
                <div className="flex gap-3">
                <button
                    onClick={accept}
                    className="bg-white text-black px-4 py-2 rounded-full cursor-pointer"
                >
                    Piekrītu
                </button>
                <button
                    onClick={openModal}
                    className="underline text-sm cursor-pointer ml-5"
                >
                    Uzzināt vairāk
                </button>
                </div>
            </div>
            </div>
        )}

        {showModal && (
            <div className="fixed inset-0 bg-black/60 z-[10000] flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-md text-sm shadow-lg text-[#252525]">
                <h2 className="text-lg font-semibold mb-4">
                Mēs augstu vērtējam jūsu privātumu
                </h2>
                <p className="mb-4">
                Mēs izmantojam sīkfailus, lai uzlabotu jūsu pārlūkošanas pieredzi,
                analizētu trafiku u.c. <br />
                Noklikšķinot uz "Apstiprināt", jūs piekrītat iestatītajām izvēlēm.
                <br />
                <a
                    href="/privatums"
                    className="underline text-blue-600 hover:text-blue-800"
                >
                    Lasīt privātuma politiku
                </a>
                .
                </p>

                <div className="mb-6 space-y-3">
                <div className="flex justify-between items-center">
                    <span>Būtiskie sīkfaili</span>
                    <Switch enabled={true} setEnabled={() => {}} disabled={true} />
                </div>
                <div className="flex justify-between items-center">
                    <span>Analītiskie sīkfaili</span>
                    <Switch
                    enabled={analyticsEnabled}
                    setEnabled={setAnalyticsEnabled}
                    />
                </div>
                </div>

                <div className="flex justify-end gap-3">
                <button
                    onClick={decline}
                    className="text-gray-600 hover:text-black underline cursor-pointer"
                >
                    Noraidīt
                </button>
                <button
                    onClick={() => {
                    localStorage.setItem(
                        "cookieConsent",
                        JSON.stringify({ analytics: analyticsEnabled })
                    );
                    setShowBanner(false);
                    setShowModal(false);

                    if (analyticsEnabled) {
                        const script = document.createElement("script");
                        script.src =
                        "https://www.googletagmanager.com/gtm.js?id=GTM-WW3WBL6D";
                        script.async = true;
                        document.head.appendChild(script);

                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({
                        event: "cookie_consent_accepted",
                        analytics_enabled: true,
                        });
                    } else {
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({
                        event: "cookie_consent_declined",
                        analytics_enabled: false,
                        });
                    }
                    }}
                    className="bg-black text-white px-4 py-2 rounded-full cursor-pointer"
                >
                    Apstiprināt
                </button>
                </div>
            </div>
            </div>
        )}

        {/* Cookie poga kreisajā pusē */}
        {!showBanner && (
            <button
            onClick={openModal}
            className="cursor-pointer fixed bottom-6 left-6 z-50 bg-black text-white border border-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
            aria-label="Pārvaldīt sīkfailus"
            >
            <CookieIcon className="w-5 h-5 text-white" />
            </button>
        )}
        </>
    );
    }
