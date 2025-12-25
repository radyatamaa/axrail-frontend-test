import { useState } from "react";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section className="w-full bg-[#F7F7F7] py-10 sm:py-14 md:py-16">
      <div className="max-w-[850px] mx-auto px-4 sm:px-6">

        <h2
          className="
            text-center font-bold text-[#222]
            text-[30px] sm:text-[42px] md:text-[56px] lg:text-[64px]
            leading-[1.2]
            mx-auto max-w-[900px]
            mb-8 sm:mb-10 md:mb-14
          "
        >
          Your questions, <br /> answered
        </h2>

        <div className="space-y-4 sm:space-y-6">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-gray-300 pb-1 sm:pb-2">
              <button
                className="
                  w-full flex justify-between items-center
                  text-[17px] sm:text-[19px]
                  text-[#222] font-medium
                  py-2.5 sm:py-3
                "
                onClick={() => toggle(i)}
              >
                {item.title}
                <svg
                  className={`
                    w-4 h-4 sm:w-5 sm:h-5
                    text-[#222]
                    transition-transform duration-200
                    ${open === i ? "rotate-180" : ""}
                  `}
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? "700px" : "0px" }}
              >
                <div
                  className="
                    mt-2 sm:mt-3
                    text-[14.5px] sm:text-[15.5px]
                    text-gray-600 leading-[1.55]
                    space-y-4 sm:space-y-6
                    max-w-[620px]
                  "
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 sm:mt-18 md:mt-20">
          <p
            className="
              text-[18px] sm:text-[22px] md:text-[30px]
              font-semibold text-[#222]
              leading-tight mb-1
            "
          >
            Still have questions?
          </p>

          <p
            className="
              text-gray-600
              text-[15px] sm:text-[18px]
              leading-[1.4]
              mb-4 sm:mb-5
            "
          >
            Get answers from an experienced local host.
          </p>

          <button
            className="
              bg-[#222] text-white
              px-8 sm:px-10
              py-3.5 sm:py-4
              rounded-full text-[15px] sm:text-lg
              font-medium hover:bg-black transition
              mb-6 sm:mb-10
              min-w-[260px] sm:min-w-[300px]
            "
          >
            Ask a host
          </button>
        </div>

      </div>
    </section>
  );
}

const faqItems = [
  {
    title: "Top questions",
    content: `
      <div>
        <p class="font-semibold text-[#222]">Is my place right for Airbnb?</p>
        <p>Airbnb guests are interested in all kinds of places—spare rooms, apartments, houses, vacation homes, even treehouses.</p>
      </div>
      <div>
        <p class="font-semibold text-[#222]">Do I have to host all the time?</p>
        <p>Nope—you control your calendar. You can host once a year, a few nights a month, or more often.</p>
      </div>
      <div>
        <p class="font-semibold text-[#222]">What are Airbnb’s fees?</p>
        <p>It’s free to create a listing, and Airbnb typically collects a service fee of 3% once you get paid.</p>
      </div>
    `,
  },
  {
    title: "Hosting basics",
    content: `
      <div>
        <p class="font-semibold text-[#222]">How do I get started?</p>
        <p>You can create a listing in just a few steps, all at your own pace.</p>
      </div>
      <div>
        <p class="font-semibold text-[#222]">How do I get my home ready?</p>
        <p>Make sure your home is clean, clutter-free, and everything works properly.</p>
      </div>
      <div>
        <p class="font-semibold text-[#222]">How am I protected?</p>
        <p>AirCover for Hosts provides top-to-bottom protection every time you host.</p>
      </div>
    `,
  },
  {
    title: "Policy & regulations",
    content: `
      <p class="font-semibold text-[#222]">Are there any regulations?</p>
      <p>Some cities have local laws—always check your area before hosting.</p>
    `,
  },
  {
    title: "Co-hosts",
    content: `
      <p class="font-semibold text-[#222]">What can co-hosts help with?</p>
      <p>They can help with cleaning, messaging guests, and maintenance.</p>
      <p class="font-semibold text-[#222]">How do I pay a co-host?</p>
      <p>You can agree on payment terms and optionally share booking payout.</p>
    `,
  },
];
