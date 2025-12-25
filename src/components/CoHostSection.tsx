import Jorge from "../assets/hosts/jorge.jpg";
import Gabrielle from "../assets/hosts/gabrielle.jpg";
import Mariam from "../assets/hosts/mariam.jpg";
import Elizabeth from "../assets/hosts/elizabeth.jpg";
import Anthony from "../assets/hosts/anthony.jpg";
const hosts = [
  {
    name: "Jorge",
    location: "Co-host in Mexico City, Mexico",
    rating: 4.89,
    years: 5,
    avatar: Jorge,
  },
  {
    name: "Gabrielle",
    location: "Co-host in North Charleston, USA",
    rating: 4.98,
    years: 3,
    avatar: Gabrielle,
  },
  {
    name: "Mariam",
    location: "Co-host in Los Angeles, USA",
    rating: 4.94,
    years: 5,
    avatar: Mariam,
  },
  {
    name: "Elizabeth",
    location: "Co-host in Temple, USA",
    rating: 4.98,
    years: 4,
    avatar: Elizabeth,
  },
  {
    name: "Anthony",
    location: "Co-host in Toronto, Canada",
    rating: 4.95,
    years: 9,
    avatar: Anthony,
  },
];

export default function CoHostSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 text-center">

        <h2
          className="text-center font-bold text-[#222]
            text-[34px] sm:text-[42px] md:text-[56px]
            leading-[1.15] mx-auto max-w-[900px]
            mb-10 md:mb-14"
        >
          A co-host can help<br/> you get started
        </h2>

        <p
          className="
            text-center text-[#6A6A6A]
            text-[18px] sm:text-[20px] md:text-[24px]
            leading-[1.45] font-normal
            max-w-[520px] mx-auto
            mb-12 md:mb-20
          "
        >
          Now you can hire a local co-host to help create your listing,
          get your space ready, and more.
        </p>

        {/* HOSTS LIST */}
        <div className="w-full">
          <div
            className="
              flex md:grid md:grid-cols-5
              gap-6 md:gap-4
              overflow-x-auto md:overflow-visible
              pb-3
              -mx-4 px-4 md:mx-0 md:px-0
              snap-x snap-mandatory
              scroll-smooth
            "
          >
            {hosts.map((h) => (
              <div
                key={h.name}
                className="
                  snap-start
                  bg-[#F7F7F7]
                  rounded-[28px]
                  border border-gray-200
                  shadow-[0_10px_24px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_14px_28px_rgba(0,0,0,0.14)]
                  transition
                  flex flex-col items-center text-center
                  min-w-[280px] md:min-w-0
                  px-6 py-8
                "
              >
                <img
                  src={h.avatar}
                  className="
                    rounded-full object-cover
                    w-[130px] h-[130px] md:w-[110px] md:h-[110px]
                    mb-5
                  "
                  alt={h.name}
                />

                <h3 className="font-semibold text-[18px] md:text-[20px] text-[#222] mb-1">
                  {h.name}
                </h3>
                <p className="text-[13px] md:text-[14px] text-gray-600 mb-6 max-w-[180px]">
                  {h.location}
                </p>

                <div
                  className="
                    flex items-center justify-between
                    w-full rounded-2xl px-5 py-3
                    bg-white shadow-sm
                  "
                >
                  <div className="flex flex-col flex-1 items-center">
                    <span className="text-[15px] font-medium">★ {h.rating}</span>
                    <span className="text-[11px] text-gray-500">guest rating</span>
                  </div>
                  <div className="border-r h-full border-gray-200 mx-3" />
                  <div className="flex flex-col flex-1 items-center">
                    <span className="text-[15px] font-medium">{h.years}</span>
                    <span className="text-[11px] text-gray-500">years hosting</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="
            bg-[#222] text-white px-10 py-4
            rounded-full text-lg hover:bg-black transition
            w-full md:w-max
            mt-10 md:mt-16
            max-w-[360px] mx-auto
          "
        >
          Find a co-host
        </button>
      </div>
    </section>
  );
}

