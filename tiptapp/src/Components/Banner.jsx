import React from "react";
import Move from "../Assets/happy-senior-man-receiving-packages-signing-postman-home-delivery.jpg";

function Banner() {
  return (
    <div>
      <div className="hero rounded-xl">
        <img src={Move} alt="" className=" w-full h-[500px]" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold font-sans text-white">
              Become a helper
            </h1>
            <p className="mb-5 font-play text-white">
              Earn extra money by helping others when it suits you
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <button className="inline-flex items-center justify-center px-10 py-1 h-10 mt-8 mr-3 text-base font-medium text-center text-white rounded-lg bg-violet-800 hover:bg-violet-700 focus:ring-slate-950 ">
                Download App Now
                <svg
                  className="w-5 h-5 ml-2 -mr-1 rotate-90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <button className=" inline-flex items-center justify-center px-10 py-1 h-10 md:mt-8 text-base font-medium text-center text-white hover:text-black border border-gray-300 rounded-lg hover:bg-slate-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
