import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { useState } from "react";

const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

export default function HeroEarningsSection() {
  const basePricePerNight = 803242;
  const [nights, setNights] = useState(7);
  const totalEarnings = nights * basePricePerNight;

  const markers = [
    { id: 1, lat: -6.1751, lng: 106.865, price: 582689 },
    { id: 2, lat: -6.2, lng: 106.8166, price: 1183455 },
    { id: 3, lat: -6.3, lng: 106.85, price: 955857 },
  ];

  return (
    <section className="w-full bg-white pt-12 pb-12 md:pt-28 md:pb-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[88px]">
        <div className="
          flex flex-col md:grid md:grid-cols-[1fr_620px]
          gap-12 md:gap-20 items-center
        ">
          
          <div className="flex flex-col items-center text-center w-full">
            <h1
              className="
                font-bold text-[#222]
                leading-[1.08]
                max-w-[640px]
                text-[32px] sm:text-[38px] md:text-[62px]
              "
            >
              Your home could<br />
              make {formatRupiah(totalEarnings)}<br />
              on Airbnb
            </h1>

            <div className="mt-5">
              <p className="text-[14px] md:text-[16px] text-[#222]">
                <span className="font-medium underline cursor-pointer">
                  {nights} nights
                </span>{" "}
                · {formatRupiah(basePricePerNight)}/night
              </p>
              <p className="text-[12px] md:text-[14px] text-[#717171]">
                Learn how we{" "}
                <span className="underline underline-offset-2 cursor-pointer">
                  estimate earnings
                </span>
              </p>
            </div>

            <div className="mt-10 w-full max-w-[280px] sm:max-w-[309px]">
              <div className="relative w-full h-[3px] bg-[#e5e5e5] rounded-full md:h-[4px]">
                <div
                  className="absolute left-0 top-0 h-full bg-[#FF385C] rounded-full"
                  style={{ width: `${(nights / 30) * 100}%` }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2
                    w-7 h-7 md:w-9 md:h-9
                    bg-white border border-[#d8d8d8]
                    rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.10)]
                  "
                  style={{ left: `${(nights / 30) * 100}%` }}
                />
                <input
                  type="range"
                  min={1}
                  max={30}
                  value={nights}
                  onChange={(e) => setNights(Number(e.target.value))}
                  className="absolute -top-4 left-0 w-full h-12 opacity-0 cursor-pointer"
                />
              </div>
            </div>

            <div className="mt-7 w-full max-w-[360px] sm:max-w-[438px]">
              <div className="
                flex items-center gap-2 md:gap-3
                border border-[#DDDDDD]
                rounded-full
                px-4 md:px-8
                h-[54px] md:h-[64px]
                shadow-sm hover:shadow-md
                transition
              ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5 text-[#FF385C]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.414 1.415l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                    clipRule="evenodd"
                  />
                </svg>

              <div className="text-[14px] md:text-[16px] text-[#222] w-full truncate text-left">

                <span className="font-medium block sm:inline">Jakarta</span>

                <span
                  className="
                    text-[#717171]
                    text-[13px] md:text-[16px]
                    block sm:inline
                    leading-tight
                  "
                >
                  <span className="sm:hidden">Entire place · 2 bedrooms</span>
                  <span className="hidden sm:inline"> · Entire place · 2 bedrooms</span>
                </span>
              </div>

              </div>
            </div>
          </div>

          <div className="w-full md:w-[620px]">
            <div className="
              rounded-2xl md:rounded-3xl overflow-hidden
              border border-[#e6e6e6]
              shadow-[0_10px_30px_rgba(0,0,0,0.10)]
              h-[320px] sm:h-[380px] md:h-[520px]
            ">
              <MapContainer
                center={[-6.2, 106.8166]}
                zoom={11}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="© OpenStreetMap"
                />
                {markers.map((m) => (
                  <Marker
                    key={m.id}
                    position={[m.lat, m.lng]}
                    icon={L.divIcon({
                      className: "price-marker",
                      html: `
                      <div style="
                        background:#fff; padding:4px 8px; border-radius:999px;
                        border:1px solid rgba(0,0,0,0.12);
                        font-size:12px; font-weight:600; color:#222;
                        box-shadow:0 4px 12px rgba(0,0,0,0.12);
                        white-space:nowrap;
                      ">
                        ${formatRupiah(m.price)}
                      </div>`,
                    })}
                  />
                ))}
              </MapContainer>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
