import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { AiFillEuroCircle } from "react-icons/ai";
import { MdOutlineEco } from "react-icons/md";

function Ctasection() {//after hero
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 box-border shadow-white shadow-xl">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-sans text-gray-900 dark:text-white">
              Shop Confidently on Tiptapp
            </h2>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <div className="text-5xl sm:text-6xl lg:text-9xl text-violet-700 flex flex-row items-center justify-center mb-2">
                <FaHandsHelping />
              </div>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Quick help
              </h3>
              <p>Same-day help at a time and place that suits you</p>
            </div>

            <div className="text-center text-gray-500 dark:text-gray-400">
              <div className="text-5xl sm:text-6xl lg:text-9xl text-violet-700 flex flex-row items-center justify-center mb-2">
                <AiFillEuroCircle />
              </div>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Affordable
              </h3>
              <p>You set the price that you are willing to pay</p>
            </div>

            <div className="text-center text-gray-500 dark:text-gray-400">
              <div className="text-5xl sm:text-6xl lg:text-9xl text-violet-700 flex flex-row items-center justify-center mb-2">
                <RiSecurePaymentLine />
              </div>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Secure payments
              </h3>
              <p>Payments are made in the app when the task is completed</p>
            </div>

            <div className="text-center text-gray-500 dark:text-gray-400">
              <div className="text-5xl sm:text-6xl lg:text-9xl text-violet-700 flex flex-row items-center justify-center mb-2">
                <MdOutlineEco />
              </div>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Smart
              </h3>
              <p>
                Your waste will ride-share, resulting in fewer cars on the road
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ctasection;
