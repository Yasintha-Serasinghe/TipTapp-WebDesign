import React from "react";
import Take from "../Assets/take-photo.svg";
import Helper from '../Assets/select-helper-and-time.svg'
import Onway from '../Assets/helps-on-the-way.svg'

import { PiNumberCircleOneBold } from "react-icons/pi";
import { PiNumberCircleTwoBold } from "react-icons/pi";
import { PiNumberCircleThreeBold } from "react-icons/pi";

function Helppage() {//third section
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 box-content">
          <div className="">
            <h1 className=" text-5xl font-sans text-white">How it works</h1>
            <h4 className=" text-lg mt-3 font-play">
              Once you have downloaded the app it is super easy to create an ad
              and get help
            </h4>
          </div>
          <div className="grid max-w-screen-lg gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white mt-16 bg-transparent">
            <div className="flex flex-col items-center justify-center">
              <div className=" bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                <img className="h-48 p-4 w-full" src={Take} alt="" />

                <div className="p-5">
                  <div className=" flex flex-wrap items-center justify-center text-3xl">
                    <PiNumberCircleOneBold />
                  </div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Create an ad
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Snap a photo and set the price you are willing to pay
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
              <img class="h-48 p-4 w-full" src={Helper} alt="" />

              <div className="p-5">
                <div className=" flex flex-wrap items-center justify-center text-3xl">
                  <PiNumberCircleTwoBold />
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Select a helper
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Select a helper at a time that suits you
                </p>
              </div>
            </div>
            <div className=" bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
              <img className="h-48 p-4 w-full" src={Onway} alt="" />

              <div className="p-5">
                <div className=" flex flex-wrap items-center justify-center text-3xl">
                  <PiNumberCircleThreeBold />
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Help's on the way!
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Pay safely through the app after you've been helped
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Helppage;
