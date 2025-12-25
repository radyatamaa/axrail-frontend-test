import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          w-full sticky top-0 z-[9999]
          transition-all duration-300 backdrop-blur-md
          ${scrolled ? "bg-white/80 shadow-sm border-b border-gray-200" : "bg-white/30 border-b border-transparent"}
          ${/* hide header on mobile when scrolled */""}
          ${scrolled ? "sm:opacity-100 opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}
          ${scrolled ? "sm:translate-y-0 -translate-y-2" : "translate-y-0"}
        `}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-5 sm:px-12 py-4">
          <img src={Logo} alt="Airbnb Logo" className="h-8" />

          <button
            className="
              hidden sm:inline-block
              px-8 py-3 rounded-full text-white font-medium text-lg
              bg-gradient-to-r from-[#FF385C] to-[#E31E52]
              shadow-sm hover:opacity-90 transition
            "
          >
            Get started
          </button>
        </div>
      </header>

      <div
        className="
          sm:hidden
          fixed bottom-0 left-0 right-0
          z-[9999]
          px-4 pt-3 pb-6
          backdrop-blur-sm
          bg-white/60
          border-t border-white/40
          shadow-[0_-6px_20px_rgba(0,0,0,0.08)]
        "
      >
        <button
          className="
            w-full
            py-3.5
            rounded-full
            text-white font-semibold text-[16px]
            bg-gradient-to-r from-[#FF385C] to-[#E31E52]
            shadow-[0_4px_14px_rgba(0,0,0,0.15)]
            hover:opacity-90 transition
          "
        >
          Get started
        </button>
      </div>
    </>
  );
}
