import React from "react";
import avatar1 from "../Assets/avatar-girl-f.svg";
import avatar2 from "../Assets/avatar-guy-a.svg";
import avatar3 from "../Assets/avatar-girl-b.svg";
import avatar4 from "../Assets/avatar-girl-h.svg";
import avatar5 from "../Assets/avatar-guy-b.svg";
import avatar6 from "../Assets/avatar-girl-i.svg";

function Review() {//fifth section
  return (
    <div className=" bg-grey-900 sm:flex-col sm:max-w-full">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-6xl tracking-tight  font-sans text-white">
            Thousands of happy users
          </h2>
          <p className="text-gray-500 sm:text-xl font-play">
            Don't just take our word for it, here is what our users are saying
            about us
          </p>
        </div>

        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div className="block max-w-sm p-6 bg-white  backdrop-blur-3xl border border-gray-800 rounded-lg shadow-xl">
            <div className=" justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 gap-4">
              <div className=" flex flex-row gap-4 justify-between">
                <img src={avatar1} alt="" className=" w-10 h-10 gap-4" />
                <h3 className="mb-2 text-xl font-bold text-gray-800 ml-4">
                  Karen
                </h3>
                <h6 className=" font-thin text-gray-400 text-xs">
                  Advertiser in Berlin
                </h6>
              </div>
            </div>

            <hr />
            <p className=" font-play text-gray-600 text-sm">
              "I used this app for the first time today and was pleasantly
              surprised how easy it is to navigate... received several responses
              to my request immediately, and had it taken care of the following
              day. Driver was very friendly and punctual. Efficiency at its
              best!”
            </p>
          </div>

          <div className="block max-w-sm p-6 bg-white  backdrop-blur-3xl border border-gray-800 rounded-lg shadow-xl">
            <div className=" justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 gap-4">
              <div className=" flex flex-row gap-4 justify-between">
                <img src={avatar2} alt="" className=" w-10 h-10 gap-4" />
                <h3 className="mb-2 text-xl font-bold text-gray-800 ml-4">
                  Peter
                </h3>
                <h6 className=" font-thin text-gray-400 text-xs">
                  Advertiser in Stockholm
                </h6>
              </div>
            </div>

            <hr />
            <p className=" font-play text-gray-600 text-sm py-5">
              "Awesome experience for give away stuff that can be value for
              others people”
            </p>
          </div>

          <div className="block max-w-sm p-6 bg-white  backdrop-blur-3xl border border-gray-800 rounded-lg shadow-xl">
            <div className=" justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 gap-4">
              <div className=" flex flex-row gap-4 justify-between">
                <img src={avatar3} alt="" className=" w-10 h-10 gap-4" />
                <h3 className="mb-2 text-xl font-bold text-gray-800 ml-4">
                  Faye
                </h3>
                <h6 className=" font-thin text-gray-400 text-xs">
                  Advertiser in Stockholm
                </h6>
              </div>
            </div>

            <hr />
            <p className=" font-play text-gray-600 text-sm py-4">
              "Super quick, super slick, super handy for people without a car! -
              Big recommendation for Tiptapp app. A couple of clicks and I got
              rid of a front garden full of rubbish for a great price in less
              than 2 hours!”
            </p>
          </div>

          <div className="block max-w-sm p-6 bg-white  backdrop-blur-3xl border border-gray-800 rounded-lg shadow-xl">
            <div className=" justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 gap-4">
              <div className=" flex flex-row gap-4 justify-between">
                <img src={avatar4} alt="" className=" w-10 h-10 gap-4" />
                <h3 className="mb-2 text-xl font-bold text-gray-800 ml-4">
                  Ebony
                </h3>
                <h6 className=" font-thin text-gray-400 text-xs">
                  Advertiser in London
                </h6>
              </div>
            </div>

            <hr />
            <p className=" font-play text-gray-600 text-sm">
              "Highly recommend using Tiptapp - I got stuck with some building
              materials that I needed to have removed and responsibly disposed
              of, quickly. I found Tiptapp via Islington council website and an
              absolute legend called Nas came around within an hour”
            </p>
          </div>

          <div className="block max-w-sm p-6 bg-white  backdrop-blur-3xl border border-gray-800 rounded-lg shadow-xl">
            <div className=" justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 gap-4">
              <div className=" flex flex-row gap-4 justify-between">
                <img src={avatar5} alt="" className=" w-10 h-10 gap-4" />
                <h3 className="mb-2 text-xl font-bold text-gray-800 ml-4">
                  James
                </h3>
                <h6 className=" font-thin text-gray-400 text-xs">
                  Advertiser in London
                </h6>
              </div>
            </div>

            <hr />
            <p className=" font-play text-gray-600 text-sm">
              "Such a great service! - I was able to book my transportation
              within a minute, and I kid you not, after about 50 minutes the
              second hand items I had just purchased arrived at my house! Buying
              vintage items via the web may be too easy now.”
            </p>
          </div>

          <div className="block max-w-sm p-6 bg-white  backdrop-blur-3xl border border-gray-800 rounded-lg shadow-xl">
            <div className=" justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 gap-4">
              <div className=" flex flex-row gap-4 justify-between">
                <img src={avatar6} alt="" className=" w-10 h-10 gap-4" />
                <h3 className="mb-2 text-xl font-bold text-gray-800 ml-4">
                  Cloudia
                </h3>
                <h6 className=" font-thin text-gray-400 text-xs">
                  Advertiser in Berlin
                </h6>
              </div>
            </div>

            <hr />
            <p className=" font-play text-gray-600 text-sm">
              "I had a lot of recycling that needed to be transported to the
              dump, but I don't have a car. It was easy to put everything on the
              driveway and a driver responded to my offer via Tiptapp within a
              minute. Pick up was within half an hour.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
