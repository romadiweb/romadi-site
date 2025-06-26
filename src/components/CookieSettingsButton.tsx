import { CookieIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function CookieSettingsButton({ onClick }: { onClick: () => void }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (consent) setShow(true);
    }, []);

    if (!show) return null;

    return (
        <button
        onClick={onClick}
        className="fixed bottom-6 right-6 z-50 bg-black text-white border border-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
        aria-label="Pārvaldīt sīkfailus"
        >
        <CookieIcon className="w-5 h-5 text-white" />
        </button>
    );
}
