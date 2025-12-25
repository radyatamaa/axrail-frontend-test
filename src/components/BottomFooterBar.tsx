import { GlobeAltIcon } from "@heroicons/react/24/outline";
import PrivacyChoose from "../assets/privacy-choose.svg";
import FbIcon from "../assets/fb.svg";
import TwitterIcon from "../assets/twitter.svg";
import InstagramIcon from "../assets/instagram.svg";
import  useIsMobile  from "../hooks/useIsMobile";

export default function BottomFooterBar() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full bg-[#F7F7F7] border-t border-gray-200">
        <div
          className="
            max-w-[1300px] mx-auto
            px-5
            pt-6
            pb-[120px]               
            flex flex-col gap-6
            text-[13px] text-gray-700
          "
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer hover:underline">
              <GlobeAltIcon className="h-4 w-4" />
              <span>English (US)</span>
            </div>
            <span className="cursor-pointer hover:underline">Rp IDR</span>
          </div>

          <div className="flex items-center gap-5 opacity-90">
            <img src={FbIcon} alt="Facebook" className="h-4 w-4 cursor-pointer" />
            <img src={TwitterIcon} alt="Twitter" className="h-4 w-4 cursor-pointer" />
            <img src={InstagramIcon} alt="Instagram" className="h-4 w-4 cursor-pointer" />
          </div>

          <span className="text-gray-600">© 2025 Airbnb, Inc.</span>

          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            <span className="cursor-pointer hover:underline">Privacy</span>
            <span className="cursor-pointer hover:underline">Terms</span>
            <span className="flex items-center gap-2 cursor-pointer hover:underline">
              Your Privacy Choices
              <img src={PrivacyChoose} alt="privacy" className="w-5 h-3" />
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F7F7F7] border-t border-gray-200">
      <div
        className="
          max-w-[1300px] mx-auto
          px-8 py-6
          flex flex-row justify-between items-center
          text-sm text-gray-600
        "
      >
        <div className="flex items-center gap-3 md:gap-4">
          <span>© 2025 Airbnb, Inc.</span>
          <span>·</span>
          <span className="hover:underline cursor-pointer text-gray-500">Privacy</span>
          <span>·</span>
          <span className="hover:underline cursor-pointer">Terms</span>
          <span>·</span>
          <span className="flex items-center gap-2 cursor-pointer hover:underline text-gray-500">
            Your Privacy Choices
            <img src={PrivacyChoose} alt="Privacy Choices" className="w-6 h-3" />
          </span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1 cursor-pointer hover:underline">
            <GlobeAltIcon className="h-4 w-4" />
            <span>English (US)</span>
          </div>
          <span className="cursor-pointer hover:underline">Rp IDR</span>
          <div className="flex items-center gap-4">
            <img src={FbIcon} alt="Facebook" className="h-4 w-4 cursor-pointer" />
            <img src={TwitterIcon} alt="Twitter" className="h-4 w-4 cursor-pointer" />
            <img src={InstagramIcon} alt="Instagram" className="h-4 w-4 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
