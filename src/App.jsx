import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { usePromoModal } from "./components/hooks/usePromoModal";
import PromoModal from "./components/page-components/PromoModal";
import "./global.d.ts";

import Footer from "./components/page-components/Footer";
import Header from "./components/page-components/Header";
import TopBanner from "./components/page-components/TopBanner";

import CookiesModal from "./components/CookiesModal";
import Home from "./pages/Home";
import Kontakti from "./pages/kontakti";
import NotFound from "./pages/not-found";
import ParMums from "./pages/par-mums";
import Privatums from "./pages/privatums";
import FacebookReklamas from "./pages/services/facebook-reklamas";
import GoogleReklamas from "./pages/services/google-reklamas";
import InternetaVeikali from "./pages/services/interneta-veikalu-izstrade";
import Izstrade from "./pages/services/majaslapu-izstrade";
import Seo from "./pages/services/seo-optimizacija";
import Dizains from "./pages/services/ui-ux-dizains";


function AppContent() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const headerOffset = isHome && bannerVisible ? 40 : 0;

  const { isOpen, open, close } = usePromoModal();

  return (
    <>
      {isHome && <TopBanner onVisibilityChange={setBannerVisible} onClick={open} />}
      <Header offset={headerOffset} />
      <PromoModal isOpen={isOpen} close={close} />
      <main>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
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
