import React from 'react';
import { FaStar } from 'react-icons/fa';  // Importing the star icon from react-icons

const Testimonials = () => {
  return (
    <section className="py-6 text-blue-900 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="my-10 text-center sm:mt-20 lg:text-left">
            <p className="text-lg font-medium text-blue-600">What clients say about their experience with us</p>
            <h2 className="mt-4 text-3xl font-bold text-blue-900 sm:text-4xl">Client Testimonials</h2>
            <div className="mt-8">
              <button className="rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-2 font-medium text-white transition hover:translate-y-1">
                More reviews on TrustPilot
              </button>
            </div>
          </div>

          <div className="relative mx-auto grid max-w-lg grid-cols-1 gap-6 lg:mr-0 lg:gap-10">
            {/* Testimonial 1 */}
            <div className="flex flex-col overflow-hidden shadow-xl shadow-blue-200">
              <div className="flex flex-1 flex-col justify-between bg-white p-6 lg:py-8 lg:px-7">
                <div className="flex-1">
                  <div className="flex items-center">
                    {/* Replace SVG with React Icon */}
                    <FaStar className="h-6 w-6 text-amber-300/70" />
                    <FaStar className="h-6 w-6 text-amber-300/70" />
                    <FaStar className="h-6 w-6 text-amber-300/70" />
                    <FaStar className="h-6 w-6 text-amber-300/70" />
                    <FaStar className="h-6 w-6 text-amber-300/70" />
                    {/* Repeat similar icons if needed */}
                  </div>

                  <blockquote className="mt-8 flex-1">
                    <p className="text-lg leading-relaxed text-blue-900">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores facere repellendus, velit quis fugiat.
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8 flex items-center">
                  <img
                    className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                    src="/images/y9s3xOJV6rnQPKIrdPYJy.png"
                    alt="Client"
                  />
                  <div className="ml-4">
                    <p className="text-base font-bold text-blue-900">James Khawalski</p>
                    <p className="mt-0.5 text-sm">CEO, Mavoline</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 (Repeat structure as needed) */}
            <div className="flex flex-col overflow-hidden shadow-xl shadow-blue-200">
              <div className="flex flex-1 flex-col justify-between bg-white p-6 lg:py-8 lg:px-7">
                <div className="flex-1">
                  <div className="flex items-center">
                    <FaStar className="h-6 w-6 text-amber-300/70" />
                    <FaStar className="h-6 w-6 text-amber-300/70" />
                    <FaStar className="h-6 w-6 text-amber-300/70" />
                    <FaStar className="h-6 w-6 text-amber-300/70" />
                  </div>

                  <blockquote className="mt-8 flex-1">
                    <p className="text-lg leading-relaxed text-blue-900">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores facere repellendus, velit quis fugiat.
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8 flex items-center">
                  <img
                    className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                    src="/images/y9s3xOJV6rnQPKIrdPYJy.png"
                    alt="Client"
                  />
                  <div className="ml-4">
                    <p className="text-base font-bold text-blue-900">James Khawalski</p>
                    <p className="mt-0.5 text-sm">CEO, Mavoline</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
