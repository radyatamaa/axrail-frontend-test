import HomeRental from "../assets/home-rental.jpeg";

export default function RentalInfoSection() {
  return (
    <section className="w-full bg-white py-16">
      <div
        className="
          max-w-[900px]     
          mx-auto
          px-4
          flex flex-col md:flex-row
          items-center justify-center
          gap-10
          text-center md:text-left
        "
      >
        <img
          src={HomeRental}
          alt="Airbnb friendly apartments"
          className="
            rounded-xl
            object-cover
            w-[220px]      
            sm:w-[260px]
            md:w-[290px]    
            lg:w-[300px]
          "
        />

        <div className="flex-1">
          <h2
            className="
              text-[22px]
              sm:text-[26px]
              md:text-[30px]    
              font-semibold
              text-[#222]
              leading-tight
              mb-3
            "
          >
            Hosting isn’t only for homeowners
          </h2>

          <p
            className="
              text-gray-600
              text-[14px]
              sm:text-[15px]
              leading-[1.45]
              mb-4
              max-w-[420px]
              mx-auto md:mx-0
            "
          >
            Airbnb-friendly apartments make it easy for you to rent, host, and
            earn extra income when you’re away.
          </p>

          <a
            href="#"
            className="underline text-[14px] font-medium hover:text-black"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
