import ToolsPhone1 from "../assets/tools-phone-1.jpeg";
import ToolsPhone2 from "../assets/tools-phone-2.jpeg";
import ToolsPhone3 from "../assets/tools-phone-3.jpeg";

export default function HostingToolsSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 text-center md:text-center">

        <h2
          className="
            font-bold text-[#222]
            leading-[1.15]
            text-[30px] sm:text-[42px] md:text-[56px] lg:text-[64px]
            max-w-[900px]
            mx-auto
            mb-6 sm:mb-8 md:mb-14
          "
        >
          All the tools you need <br /> to host, all in one app
        </h2>

        <div className="w-full overflow-x-auto scroll-smooth pb-1 md:overflow-visible">
          <div
            className="
              flex md:justify-center
              min-w-max md:min-w-0
              gap-4 sm:gap-6
              px-2 sm:px-0
            "
          >
            <div className="flex flex-col items-start md:items-center text-left md:text-center mx-[2px]">
              <img
                src={ToolsPhone1}
                alt="Listing editor"
                className="
                  w-[240px] sm:w-[260px] md:w-[340px]
                  object-contain rounded-2xl
                  mx-auto
                "
              />
              <p className="font-semibold text-[16px] sm:text-[18px] text-[#222] mt-3 sm:mt-4 px-1">
                Listing editor
              </p>
              <p className="text-gray-600 text-[14px] sm:text-[15px] leading-tight px-1">
                Showcase every detail of your home
              </p>
            </div>

            {/* TOOL 2 */}
            <div className="flex flex-col items-start md:items-center text-left md:text-center mx-[2px]">
              <img
                src={ToolsPhone2}
                alt="Calendar"
                className="
                  w-[240px] sm:w-[260px] md:w-[340px]
                  object-contain rounded-2xl
                  mx-auto
                "
              />
              <p className="font-semibold text-[16px] sm:text-[18px] text-[#222] mt-3 sm:mt-4 px-1">
                Calendar
              </p>
              <p className="text-gray-600 text-[14px] sm:text-[15px] leading-tight px-1">
                Manage your availability and pricing
              </p>
            </div>

            <div className="flex flex-col items-start md:items-center text-left md:text-center mx-[2px]">
              <img
                src={ToolsPhone3}
                alt="Messages"
                className="
                  w-[240px] sm:w-[260px] md:w-[340px]
                  object-contain rounded-2xl
                  mx-auto
                "
              />
              <p className="font-semibold text-[16px] sm:text-[18px] text-[#222] mt-3 sm:mt-4 px-1">
                Messages
              </p>
              <p className="text-gray-600 text-[14px] sm:text-[15px] leading-tight px-1">
                Quickly message guests and support
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE ONLY BUTTON */}
        <div className="mt-8 sm:mt-12 block md:hidden px-6">
          <button
            className="
              w-full
              py-4
              rounded-full
              text-white font-semibold text-[16px]
              bg-[#222]
              hover:bg-black transition
            "
          >
            Download the Airbnb app
          </button>
        </div>

      </div>

      <div className="hidden md:block mt-32 mx-auto w-[80%] border-t border-gray-200"></div>
    </section>
  );
}
