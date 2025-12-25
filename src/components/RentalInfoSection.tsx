export default function RentalInfoSection() {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-[1440px] mx-auto px-10 flex flex-col md:flex-row items-center gap-16">

        {/* Image */}
        <img
          src="/home-rental.png"
          alt="Airbnb friendly apartments"
          className="rounded-2xl shadow-md w-[650px] object-cover"
        />

        {/* Text */}
        <div className="flex-1">
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#222] mb-4">
            Hosting isn’t only for homeowners
          </h2>

          <p className="text-gray-600 text-[17px] leading-relaxed mb-6">
            Airbnb-friendly apartments make it easy for you to rent, host, and earn extra income when you’re away.
          </p>

          <a
            href="#"
            className="underline text-[17px] font-medium hover:text-black"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
