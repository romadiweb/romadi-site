import { CookieIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function CookiesModal() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

 useEffect(() => {
  const raw = localStorage.getItem("cookieConsent");
  if (!raw) {
    setShowBanner(true); // nav vispār piekrišanas → rādām banneri
    return;
  }

  try {
    const parsed = JSON.parse(raw);
    if (parsed.analytics === true) {
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
    } else {
      // Lietotājs nav piekritis → rādām banneri
      setShowBanner(true);
    }
  } catch (error) {
    // Ja JSON sabojāts → rādām banneri
    setShowBanner(true);
  }
}, []);
  const accept = () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({ analytics: true })
    );
    setAnalyticsEnabled(true);
    setShowBanner(false);
    setShowModal(false);
  };

  const decline = () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({ analytics: false })
    );
    setAnalyticsEnabled(false);
    setShowBanner(false);
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
    if (!localStorage.getItem("cookieConsent")) {
      setAnalyticsEnabled(true);
    }
  };

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-black text-white shadow-md z-[9999] p-4 text-sm transition-transform translate-y-0">
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
    </>
  );
}
