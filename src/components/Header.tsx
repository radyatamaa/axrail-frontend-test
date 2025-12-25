export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-12 py-5">
        
        {/* Logo (ikon saja) */}
        <img
          src="https://a0.muscache.com/pictures/airbnb_logo_small.png"
          alt="Airbnb Logo"
          className="h-8"
        />

        {/* Button */}
        <button
          className="px-8 py-3 rounded-full text-white font-medium text-lg bg-gradient-to-r from-[#FF385C] to-[#E31E52] shadow-sm hover:opacity-90 transition"
        >
          Get started
        </button>
      </div>
    </header>
  );
}
