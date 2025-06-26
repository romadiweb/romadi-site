import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop({ hide = false }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show || hide) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-black text-white border border-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg transition hover:scale-110"
      aria-label="Atpakaļ uz augšu"
    >
      <ArrowUp className="w-5 h-5 text-white" />
    </button>
  );
}
