import HomeIcon from "../assets/home.svg";
import ClockIcon from "../assets/clock.svg";
import ChatIcon from "../assets/chat.svg";
import Image1 from "../assets/easy-list-phones.jpg";
import useIsMobile from "../hooks/useIsMobile"; 

export default function EasyListSection() {
  const isMobile = useIsMobile();

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 text-center">

        <h2
          className="
            text-center font-bold text-[#222]
            text-[34px] sm:text-[42px] md:text-[56px] lg:text-[64px]
            leading-[1.15] mx-auto max-w-[900px]
            mb-10 md:mb-14
          "
        >
          It’s easy to list your
          <br  />
          home on Airbnb
        </h2>

        <div
          className={`
            flex justify-center
            ${isMobile ? "mb-10 -mt-4" : "mb-20"}
          `}
        >
          <img
            src={Image1}
            alt="Easy to list"
            className={`
              object-contain
              ${isMobile ? "w-[92%] max-w-[420px]" : "w-full max-w-[900px]"}
            `}
          />
        </div>

        <div className="w-full mt-6 md:mt-24">
          <div
            className={`
              mx-auto max-w-[900px]
              ${isMobile
                ? "flex flex-col gap-6 items-start px-6 text-left"
                : "flex flex-row justify-center items-center text-center"
              }
            `}
          >
            <div className={isMobile ? "flex gap-4 items-start w-full" : "flex flex-col items-center text-center px-3 md:px-4"}>
              <div className={isMobile ? "bg-[#F7F7F7] rounded-2xl p-3" : "bg-[#F7F7F7] rounded-2xl p-4 mb-5"}>
                <img src={HomeIcon} className={isMobile ? "w-5 h-5" : "w-6 h-6"} />
              </div>
              <p className={isMobile ? "text-[16px] text-[#222222E6] leading-snug" : "text-[#222222E6] text-[18px] leading-snug max-w-[240px]"}>
                Create a listing for your place in just a few steps
              </p>
            </div>

            <div className={isMobile ? "flex gap-4 items-start w-full" : "flex flex-col items-center text-center px-3 md:px-4"}>
              <div className={isMobile ? "bg-[#F7F7F7] rounded-2xl p-3" : "bg-[#F7F7F7] rounded-2xl p-4 mb-5"}>
                <img src={ClockIcon} className={isMobile ? "w-5 h-5" : "w-6 h-6"} />
              </div>
              <p className={isMobile ? "text-[16px] text-[#222222E6] leading-snug" : "text-[#222222E6] text-[18px] leading-snug max-w-[240px]"}>
                Go at your own pace, and make changes whenever
              </p>
            </div>

            <div className={isMobile ? "flex gap-4 items-start w-full" : "flex flex-col items-center text-center px-3 md:px-4"}>
              <div className={isMobile ? "bg-[#F7F7F7] rounded-2xl p-3" : "bg-[#F7F7F7] rounded-2xl p-4 mb-5"}>
                <img src={ChatIcon} className={isMobile ? "w-5 h-5" : "w-6 h-6"} />
              </div>
              <p className={isMobile ? "text-[16px] text-[#222222E6] leading-snug" : "text-[#222222E6] text-[18px] leading-snug max-w-[240px]"}>
                Get 1:1 support from experienced hosts at any time
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
