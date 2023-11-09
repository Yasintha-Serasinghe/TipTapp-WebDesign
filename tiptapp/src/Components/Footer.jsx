import React from "react";
import { Link } from "react-router-dom";
import app from "../Assets/app-store-badge-en.svg";
import google from "../Assets/google-play-badge-en.svg";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

function Footer() {
  return (
    <div className="box-border bg-gray-900">
      <div className="mx-12 md:mx-16 py-20 lg:mx-24">
        <div className="md:flex sm:justify-between md:gap-24 md:py-0">
          <div className="mb-6 md:mb-0">
            <Link to="" className="flex items-center">
              <span className="self-center text-4xl font-extrabold whitespace-nowrap font-play dark:text-white">
                tiptapp
              </span>
            </Link>
            <p className="grid grid-cols-1 py-5 md:w-80">
              Whether you need help moving, delivering, shopping, or recycling,
              our app instantly connects you with thousands of helpers -
              everyday people with a car and the time to help you out.
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3">
              <img src={app} alt="" />
              <img src={google} alt="" />
            </div>
            <div className="py-5">
              <div className="flex flex-wrap gap-5">
                <h1>ADDRESS</h1>
                <span>-</span>
                <p>Storgatan 19, 114 55 Stockholm</p>
              </div>
              <div className="flex flex-wrap gap-5">
                <h1>Email</h1>
                <span>-</span>
                <p>support@tiptapp.com</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 ">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                GET HELP NOW
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Move & deliver
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Buy for me
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Remove & recycle
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Give away
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                LEARN MORE
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Become a helper
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Safe recycling
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Help & support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                ABOUT TIPTAPP
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    About us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Reuse and circularity
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Supporting cities
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Partnerships
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Career at Tiptapp
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                DOWNLOAD
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    iOS
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Android
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden flex md:flex-row gap-4 items-center justify-center mb-0 font-thin text-xs">
          <h3>BERLIN</h3>
          <h3>HAMBURG</h3>
          <h3>GOTHENBURG</h3>
          <h3>LISBON</h3>
          <h3>LONDON</h3>
          <h3>MALMOE</h3>
          <h3>MANCHESTER</h3>
          <h3>MUNICH</h3>
          <h3>STOCKHOLM</h3>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="#" className="hover:underline">
              Tiptapp™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              Terms of service
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              Privacy policy
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white py-1"
            >
              <BsFacebook />
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white py-1"
            >
              <AiOutlineInstagram />
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white py-1"
            >
              <AiFillTwitterCircle />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
