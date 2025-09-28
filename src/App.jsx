import { lazy, Suspense, useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import CookiesModal from "./components/CookiesModal";
import { usePromoModal } from "./components/hooks/usePromoModal";
import Footer from "./components/page-components/Footer";
import Header from "./components/page-components/Header";
import PromoModal from "./components/page-components/PromoModal";
import TopBanner from "./components/page-components/TopBanner";


import "./global.d.ts";
import Portfolio from "./pages/portfolio.tsx";

// Lazy loaded pages
const Home = lazy(() => import("./pages/Home"));
const Kontakti = lazy(() => import("./pages/kontakti"));
const NotFound = lazy(() => import("./pages/not-found"));
const ParMums = lazy(() => import("./pages/par-mums"));
const Privatums = lazy(() => import("./pages/privatums"));
const FacebookReklamas = lazy(() => import("./pages/services/facebook-reklamas"));
const GoogleReklamas = lazy(() => import("./pages/services/google-reklamas"));
const InternetaVeikali = lazy(() => import("./pages/services/interneta-veikalu-izstrade"));
const Izstrade = lazy(() => import("./pages/services/majaslapu-izstrade"));
const Seo = lazy(() => import("./pages/services/seo-optimizacija"));
const Dizains = lazy(() => import("./pages/services/ui-ux-dizains"));

function AppContent() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const headerOffset = isHome && bannerVisible ? 40 : 0;

  const { isOpen, open, close } = usePromoModal();

useEffect(() => {
  if (typeof window !== "undefined") {
    // Triks, lai "restartētu" layout un fixed novietojumu
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);
  }
}, []);



  return (
    <>
    
      <Helmet>
        <link rel="preload" as="image" href="/photos/blurry-gradient-green.svg" />
        <link rel="preload" as="image" href="/photos/Izstrade.png" />
        <link rel="preload" as="image" href="/photos/InternetaVeikali.png" />
        <link rel="preload" as="image" href="/photos/dizains.png" />
        <link rel="preload" as="image" href="/photos/FacebookAds.png" />
        <link rel="preload" as="image" href="/photos/GoogleAds.png" />
        <link rel="preload" as="image" href="/photos/seo.png" />
        <link rel="preload" as="image" href="/photos/liepaja.jpg" />
        <link rel="preload" as="image" href="/photos/phone-ui.png" />
      </Helmet>
      <TopBanner onVisibilityChange={setBannerVisible} onClick={open} />
      <Header offset={headerOffset} />
      <PromoModal isOpen={isOpen} close={close} />

      <main className="min-h-[100svh] bg-white">
        <Suspense
          fallback={
            <div className="min-h-[100svh] flex items-center justify-center bg-white">
              {/* Optional loader spinner here */}
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kontakti" element={<Kontakti />} />
            <Route path="/par-mums" element={<ParMums />} />
            <Route path="/majas-lapu-izstrade" element={<Izstrade />} />
            <Route path="/interneta-veikalu-izstrade" element={<InternetaVeikali />} />
            <Route path="/ui-ux-dizains" element={<Dizains />} />
            <Route path="/seo-optimizacija" element={<Seo />} />
            <Route path="/google-reklamas" element={<GoogleReklamas />} />
            <Route path="/facebook-reklamas" element={<FacebookReklamas />} />
            <Route path="/privatums" element={<Privatums />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <CookiesModal />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}
