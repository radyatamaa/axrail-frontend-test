const hosts = [
  {
    name: "Jorge",
    location: "Co-host in Mexico City, Mexico",
    rating: 4.89,
    years: 5,
    avatar: "/hosts/jorge.jpg",
  },
  {
    name: "Gabrielle",
    location: "Co-host in North Charleston, USA",
    rating: 4.98,
    years: 3,
    avatar: "/hosts/gabrielle.jpg",
  },
  {
    name: "Mariam",
    location: "Co-host in Los Angeles, USA",
    rating: 4.94,
    years: 5,
    avatar: "/hosts/mariam.jpg",
  },
  {
    name: "Elizabeth",
    location: "Co-host in Temple, USA",
    rating: 4.98,
    years: 4,
    avatar: "/hosts/elizabeth.jpg",
  },
  {
    name: "Anthony",
    location: "Co-host in Toronto, Canada",
    rating: 4.95,
    years: 9,
    avatar: "/hosts/anthony.jpg",
  },
];

export default function CoHostSection() {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-[1440px] mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-[42px] font-bold text-[#222] leading-tight mb-4">
          A co-host can help<br/> you get started
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg mb-20">
          Now you can hire a local co-host to help create your listing,
          get your space ready, and more.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12 justify-center">
          {hosts.map((h) => (
            <div
              key={h.name}
              className="bg-white rounded-3xl shadow-md p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl transition"
            >
              <img
                src={h.avatar}
                alt={h.name}
                className="w-28 h-28 rounded-full object-cover mb-6"
              />

              <h3 className="font-semibold text-xl text-[#222]">{h.name}</h3>
              <p className="text-sm text-gray-500 mb-6">{h.location}</p>

              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="rounded-xl border border-gray-200 px-3 py-2 flex flex-col items-center justify-center">
                  <span className="text-[15px] font-medium">★ {h.rating}</span>
                  <span className="text-[11px] text-gray-500">guest rating</span>
                </div>
                <div className="rounded-xl border border-gray-200 px-3 py-2 flex flex-col items-center justify-center">
                  <span className="text-[15px] font-medium">{h.years}</span>
                  <span className="text-[11px] text-gray-500">years hosting</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-[#222] text-white px-10 py-4 rounded-full text-lg hover:bg-black transition">
          Find a co-host
        </button>
      </div>
    </section>
  );
}
