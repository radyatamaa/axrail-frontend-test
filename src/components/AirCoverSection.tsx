import AirCoverLogo from "../assets/aircover-logo.png";
import ChecklistsIcon from "../assets/checklists.svg";

export default function AirCoverSection() {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="max-w-[900px] mx-auto text-center px-4 md:px-6">

        <img
          src={AirCoverLogo}
          alt="AirCover"
          className="
            mx-auto mb-5
            h-[48px] sm:h-[60px] md:h-[80px]
            object-contain
          "
        />

        <h2
          className="
            font-bold text-[#222]
            leading-[1.15]
            text-[26px] sm:text-[34px] md:text-[48px] lg:text-[64px]
            max-w-[850px]
            mx-auto
            mb-6 md:mb-12
          "
        >
          However you host,
          <br /> you’re protected
        </h2>

        <p
          className="
            text-[#6A6A6A]
            text-[15px] sm:text-[18px] md:text-[22px]
            leading-[1.45]
            max-w-[550px]
            mx-auto
            mb-10 md:mb-16
          "
        >
          Top-to-bottom protection, included every time you host your home on Airbnb.
        </p>

        <div
          className="
            text-left
            max-w-[550px]
            mx-auto
            mb-10 md:mb-14
          "
        >
          {[
            "Up to $3M damage protection",
            "Up to $1M liability insurance",
            "24-hour safety line",
          ].map((item, i) => (
            <div
              key={i}
              className="
                flex justify-between items-center
                border-b border-gray-200
                py-3 md:py-4
              "
            >
              <span className="text-[15px] sm:text-[17px] md:text-[18px] text-[#222]">
                {item}
              </span>

              <img
                src={ChecklistsIcon}
                alt="checklist"
                className="w-[18px] sm:w-[20px] md:w-[22px] h-auto"
              />
            </div>
          ))}
        </div>

        <button
          className="
            bg-[#222] text-white
            w-full sm:w-max
            px-10 py-3.5 md:px-16 md:py-4
            rounded-full
            text-[15px] sm:text-[16px] md:text-[18px]
            font-medium
            hover:bg-black transition
            mb-8 md:mb-10
          "
        >
          Learn about AirCover
        </button>

        {/* FOOTNOTE */}
        <p
          className="
            text-[11px] sm:text-[12px]
            text-gray-500
            max-w-[560px]
            mx-auto
            leading-[1.45]
          "
        >
          Host Damage Protection reimburses for certain guest damages during Airbnb
          stays. It’s not insurance and may apply if guests don’t pay. Liability
          insurance is provided by 3rd parties.{" "}
          <a href="#" className="underline text-[#222]">
            See details and exclusions.
          </a>
        </p>
      </div>
    </section>
  );
}
