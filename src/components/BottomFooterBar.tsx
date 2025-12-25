import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function BottomFooterBar() {
  return (
    <div className="w-full bg-white border-t border-gray-200">
      <div className="max-w-[1300px] mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">

        {/* Left side */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          <span>© 2025 Airbnb, Inc.</span>
          <span className="hidden md:inline">·</span>
          <span className="hover:underline cursor-pointer">Privacy</span>
          <span className="hidden md:inline">·</span>
          <span className="hover:underline cursor-pointer">Terms</span>
          <span className="hidden md:inline">·</span>
          <span className="hover:underline cursor-pointer">Your Privacy Choices</span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-5 mt-4 md:mt-0">
          {/* Language */}
          <div className="flex items-center gap-1 cursor-pointer hover:underline">
            <GlobeAltIcon className="h-4 w-4" />
            <span>English (US)</span>
          </div>

          {/* Currency */}
          <div className="cursor-pointer hover:underline">
            Rp IDR
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <svg className="h-4 w-4 cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>

            {/* X icon */}
            <svg className="h-4 w-4 cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>

            {/* Instagram */}
            <svg className="h-4 w-4 cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="18" cy="6" r="1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
