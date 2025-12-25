export default function FooterSection() {
  return (
    <footer className="w-full bg-white pt-16 pb-24 border-t border-gray-200">
      <div className="max-w-[1300px] mx-auto px-8">

        {/* Top small disclaimer */}
        <p className="text-[13px] text-gray-600 leading-relaxed max-w-[900px]">
          Hosts on the Co-Host Network typically have high ratings, low cancellation rates,
          and established Airbnb hosting experience. Ratings are based on guest reviews for
          listings they host or co-host and may not represent the co-host’s unique services.
          <br /><br />
          Co-Host Network is powered by Airbnb Global Services Limited, Airbnb Living LLC,
          and Airbnb Plataforma Digital Ltda. Available in select locations only.{" "}
          <span className="underline cursor-pointer">Learn more.</span>
        </p>

        {/* Links section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-16">

          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-[16px] text-gray-800 mb-4">Support</h3>
            <ul className="space-y-3 text-[15px] text-gray-700">
              <li className="hover:underline cursor-pointer">Help Center</li>
              <li className="hover:underline cursor-pointer">Get help with a safety issue</li>
              <li className="hover:underline cursor-pointer">AirCover</li>
              <li className="hover:underline cursor-pointer">Travel insurance</li>
              <li className="hover:underline cursor-pointer">Anti-discrimination</li>
              <li className="hover:underline cursor-pointer">Disability support</li>
              <li className="hover:underline cursor-pointer">Cancellation options</li>
              <li className="hover:underline cursor-pointer">Report neighborhood concern</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-[16px] text-gray-800 mb-4">Hosting</h3>
            <ul className="space-y-3 text-[15px] text-gray-700">
              <li className="hover:underline cursor-pointer">Airbnb your home</li>
              <li className="hover:underline cursor-pointer">Airbnb your experience</li>
              <li className="hover:underline cursor-pointer">Airbnb your service</li>
              <li className="hover:underline cursor-pointer">AirCover for Hosts</li>
              <li className="hover:underline cursor-pointer">Hosting resources</li>
              <li className="hover:underline cursor-pointer">Community forum</li>
              <li className="hover:underline cursor-pointer">Hosting responsibly</li>
              <li className="hover:underline cursor-pointer">Airbnb-friendly apartments</li>
              <li className="hover:underline cursor-pointer">Join a free Hosting class</li>
              <li className="hover:underline cursor-pointer">Find a co-host</li>
              <li className="hover:underline cursor-pointer">Refer a host</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-[16px] text-gray-800 mb-4">Airbnb</h3>
            <ul className="space-y-3 text-[15px] text-gray-700">
              <li className="hover:underline cursor-pointer">2025 Summer Release</li>
              <li className="hover:underline cursor-pointer">Newsroom</li>
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Investors</li>
              <li className="hover:underline cursor-pointer">Gift cards</li>
              <li className="hover:underline cursor-pointer">Airbnb.org emergency stays</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
