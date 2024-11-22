import React from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';

export default function Promo() {
  return (
    <div className="flex min-h-screen w-screen">
      <div className="relative my-auto mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
        {/* Left Column */}
        <div className="mx-auto flex w-full max-w-xl lg:max-w-screen-xl">
          <div className="mb-16 lg:my-auto lg:max-w-lg">
            <div className="mb-6 max-w-xl">
              <div>
                <p className="bg-teal-accent-400 mb-2 inline-block rounded-full bg-gradient-to-r from-[#ff80b5] to-[#9089fc]  px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-900">
                  10% off this winter
                </p>
              </div>
              <h2 className="mb-6 max-w-lg text-3xl font-extrabold text-slate-700 sm:text-5xl sm:leading-snug">
              Adrenix Winter <br />
              Wonders Hot Deals for the{' '}
                <span className="rounded inline-block bg-sky-400 from-lime-400 to-sky-400 px-2 font-bold text-white">
                Cold Season!
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              Stay warm in style with Adrenix Winter Collection! Explore cozy coats, chic sweaters, and snug accessories. Shop now for premium quality and unbeatable winter deals!
              </p>
            </div>
            
          </div>
        </div>
        {/* /Left Column */}

        {/* Right Column */}
        <div className="flex h-full w-full space-x-3 overflow-hidden md:justify-end">
          {/* Col 2 */}
          <div className="hidden w-56 items-center space-y-3 lg:flex">
            <div className="overflow-hidden rounded-xl bg-yellow-400">
              <img
                className="h-full w-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShiV27osWST90P5Tau2pd0H7laHhRpXF2Mww&s"
                alt="Zurich Scene"
              />
            </div>
          </div>
          <div className="w-full flex-col space-y-3 rounded-xl py-4 lg:flex lg:w-80">
            <div className="h-40 overflow-hidden rounded-xl bg-green-600/60">
              <img
                className="mx-auto h-full w-full object-cover"
                src="https://i.insider.com/5865446bf10a9a13018b5bc3?width=889&format=jpeg"
                alt="Green Landscape"
              />
            </div>
            <div className="h-40 overflow-hidden rounded-xl bg-pink-600/60">
              <img
                className="mx-auto h-full w-full object-cover"
                src="https://www.alpineswiss.com/product_images/uploaded_images/men-s-leather-jacket.jpg"
                alt="Pink Sky"
              />
            </div>
            <div className="h-40 overflow-hidden rounded-xl bg-blue-600/60">
              <img
                className="mx-auto h-full w-full object-cover"
                src="https://www.standout.co.uk/blog/wp-content/uploads/2023/09/AdobeStock_623563581-scaled.jpeg"
                alt="Blue Landscape"
              />
            </div>
          </div>
        </div>
        {/* /Right Column */}
      </div>
    </div>
  );
}
