export default function AirCoverSection() {
  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-[900px] mx-auto text-center px-6">

        {/* Logo */}
        <img
          src="/aircover-logo.png"
          alt="AirCover"
          className="mx-auto mb-6 h-12 object-contain"
        />
        <p className="text-sm text-gray-500 -mt-3 mb-14">for Hosts</p>

        {/* Title */}
        <h2 className="text-[44px] font-bold text-[#222] leading-tight mb-6">
          However you host, <br /> you’re protected
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-20 max-w-[600px] mx-auto">
          Top-to-bottom protection, included every time you host your home on Airbnb.
        </p>

        {/* Protection List */}
        <div className="text-left max-w-[600px] mx-auto mb-14">
          {[
            "Up to $3M damage protection",
            "Up to $1M liability insurance",
            "24-hour safety line"
          ].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-b border-gray-200 py-4"
            >
              <span className="text-[18px] text-[#222]">{item}</span>
              <span className="text-green-500 text-xl font-bold">✔</span>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <button className="bg-[#222] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-black transition mb-10">
          Learn about AirCover
        </button>

        {/* Disclaimer */}
        <p className="text-[12px] text-gray-500 max-w-[600px] mx-auto">
          Host Damage Protection reimburses for certain guest damages during Airbnb stays.
          It’s not insurance and may apply if guests don’t pay. Liability insurance is
          provided by 3rd parties.{" "}
          <a href="#" className="underline">See details and exclusions.</a>
        </p>
      </div>
    </section>
  );
}
