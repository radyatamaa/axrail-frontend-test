export default function HostingToolsSection() {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-[1440px] mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-[42px] font-bold text-[#222] leading-tight mb-20">
          All the tools you need <br /> to host, all in one app
        </h2>

        {/* Phones Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 place-items-center">
          <img src="/tools-phone-1.png" alt="Listing editor" className="w-[280px] md:w-[350px] object-contain" />
          <img src="/tools-phone-2.png" alt="Calendar" className="w-[280px] md:w-[350px] object-contain" />
          <img src="/tools-phone-3.png" alt="Messages" className="w-[280px] md:w-[350px] object-contain" />
        </div>

        {/* Labels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[900px] mx-auto">
          <div className="text-center">
            <p className="font-semibold text-[18px] text-[#222] mb-2">Listing editor</p>
            <p className="text-gray-600 text-[15px]">Showcase every detail of your home</p>
          </div>

          <div className="text-center">
            <p className="font-semibold text-[18px] text-[#222] mb-2">Calendar</p>
            <p className="text-gray-600 text-[15px]">Manage your availability and pricing</p>
          </div>

          <div className="text-center">
            <p className="font-semibold text-[18px] text-[#222] mb-2">Messages</p>
            <p className="text-gray-600 text-[15px]">Quickly message guests and support</p>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="mt-32 mx-auto w-[80%] border-t border-gray-200"></div>
    </section>
  );
}
