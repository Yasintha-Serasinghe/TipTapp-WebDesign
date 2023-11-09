import React from "react";
import img1 from "../Assets/sofa2.jpeg";
import img2 from "../Assets/sofa.jpeg";
import img3 from "../Assets/mettress.jpeg";
import img4 from "../Assets/mirror.jpeg";

import recycle from "../Assets/recycling.cc7c85d9.svg";
import give from "../Assets/give-away.6e6494ea.svg";

function Ads() {
  return (
    <div>
      <div className="carousel lg:w-80 lg:h-72 rounded-xl border-black shadow-2xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full" alt="image1" />
          <p className="absolute bottom-0 mx-auto text-white font-bold px-8 py-6">
            Furniture Removal
          </p>
          <img
            className="absolute bottom-0 mx-auto text-white px-3 py-3 w-20 h-20 left-48"
            src={recycle}
            alt="recycle"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="btn btn-circle bg-transparent hover:bg-slate-300 border-none"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent hover:bg-slate-300 border-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" alt="image2" />
          <p className="absolute bottom-0 mx-auto text-white font-bold px-8 py-6">
            Large sofa to give away
          </p>
          <img
            className="absolute bottom-0 mx-auto text-white px-3 py-3 w-20 h-20 left-48"
            src={give}
            alt="give"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent hover:bg-slate-300 border-none"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent hover:bg-slate-300 border-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" alt="image3" />
          <p className="absolute bottom-0 mx-auto text-white font-bold px-8 py-6">
            Mattress
          </p>
          <img
            className="absolute bottom-0 mx-auto text-white px-3 py-3 w-20 h-20 left-48"
            src={recycle}
            alt="recycle"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent hover:bg-slate-300 border-none"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle bg-transparent hover:bg-slate-300 border-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" alt="image4" />
          <p className="absolute bottom-0 mx-auto text-white font-bold px-8 py-6">
            One mirrors door removal
          </p>
          <img
            className="absolute bottom-0 mx-auto text-white px-3 py-3 w-20 h-20 left-48"
            src={recycle}
            alt="recycle"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent hover:bg-slate-300 border-none"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent hover:bg-slate-300 border-none"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ads;
