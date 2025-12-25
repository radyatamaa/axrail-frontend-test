import HomeIcon from "../assets/home.svg";
import ClockIcon from "../assets/clock.svg";
import ChatIcon from "../assets/chat.svg";
import Image1 from "../assets/easy-list-phones.jpg";
export default function EasyListSection() {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 text-center">

        {/* TITLE */}
        <h2 className="text-[44px] leading-tight font-bold text-[#222] mb-20">
          It’s easy to list your home on Airbnb
        </h2>

        {/* IMAGE */}
        <div className="flex justify-center mb-20">
          <img
            src={Image1}
            alt="Easy to list your home"
            className="w-full max-w-[900px] object-contain"
          />
        </div>

        {/* 3 FEATURE DESCRIPTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[900px] mx-auto">

          <div className="flex flex-col items-center text-center">
            <span className="text-3xl mb-4"> <img src={HomeIcon} className="w-10 h-10 mb-4" alt="Home" /></span>
            <p className="text-[#222] text-[17px] font-medium">
              Create a listing for your place in just a few steps
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="text-3xl mb-4"><img src={ClockIcon} className="w-10 h-10 mb-4" alt="Clock" /></span>
            <p className="text-[#222] text-[17px] font-medium">
              Go at your own pace, and make changes whenever
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="text-3xl mb-4"><img src={ChatIcon} className="w-10 h-10 mb-4" alt="Chat" /></span>
            <p className="text-[#222] text-[17px] font-medium">
              Get 1:1 support from experienced hosts at any time
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
