import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useState } from "react";

// Format Rupiah
const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(value);

export default function HeroEarningsSection() {
  const basePricePerNight = 803242;

  const [nights, setNights] = useState(7);
  const totalEarnings = nights * basePricePerNight;

  // Dummy markers data (Jakarta)
  const markers = [
    { id: 1, lat: -6.1751, lng: 106.8650, price: 582689 },
    { id: 2, lat: -6.2000, lng: 106.8166, price: 1183455 },
    { id: 3, lat: -6.3000, lng: 106.8500, price: 955857 },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-12 grid grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-[56px] leading-tight font-bold text-gray-900">
            Your home could make <br />
            {formatRupiah(totalEarnings)} <br />
            on Airbnb
          </h1>

          <p className="mt-4 text-gray-700 text-lg">
            <span className="font-medium underline cursor-pointer">
              {nights} nights
            </span>
            {" · "}
            {formatRupiah(basePricePerNight)}/night
          </p>

          <p className="text-sm text-gray-500">
            Learn how we{" "}
            <span className="underline underline-offset-2 cursor-pointer">
              estimate earnings
            </span>
          </p>

          {/* Slider */}
  <div className="mb-12 relative pt-6">
    <div className="relative w-full h-[4px] bg-gray-200 rounded-full">
      <div
        className="absolute h-[4px] bg-[#FF385C] rounded-full"
        style={{ width: `${(nights / 30) * 100}%` }}
      ></div>

      {/* knob */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 bg-white border border-gray-300 rounded-full shadow cursor-pointer"
        style={{ left: `${(nights / 30) * 100}%` }}
      ></div>
    </div>

    {/* hidden actual slider */}
    <input
      type="range"
      min={1}
      max={30}
      value={nights}
      onChange={(e) => setNights(Number(e.target.value))}
      className="absolute top-0 left-0 w-full h-[35px] opacity-0 cursor-pointer"
    />
  </div>

          {/* Search Bar */}
          <div className="mt-10">
            <div className="flex items-center gap-3 border border-gray-300 rounded-full px-6 py-4 shadow-sm cursor-pointer hover:shadow-lg transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.414 1.415l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Jakarta · Entire place · 2 bedrooms</span>
            </div>
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200 h-[500px]">
          <MapContainer
            center={[-6.2000, 106.8166]}
            zoom={10}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="© OpenStreetMap"
            />

            {markers.map((m) => (
              <Marker key={m.id} position={[m.lat, m.lng]} icon={
                L.divIcon({
                  className: "price-marker",
                  html: `<div style="background:white;padding:4px 8px;border-radius:20px;border:1px solid #ccc;font-size:12px;">${formatRupiah(m.price)}</div>`
                })
              }>
                <Popup>
                  Estimated: {formatRupiah(m.price)}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
