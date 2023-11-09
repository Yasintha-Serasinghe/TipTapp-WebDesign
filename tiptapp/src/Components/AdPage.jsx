import React from 'react';
import Ads from './Ads';

function AdPage() {//forth section
  return (
    <div className=' bg-slate-300'>
      <div className="hero  sm:flex-col sm:max-w-full">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <div className=" md:w-1/2 lg:w-2/5 lg:px-4 lg:py-8">
            <Ads />
          </div>
          <div className="sm:w-full md:w-1/2 lg:w-3/5 px-4 py-8">
            <h1 className="text-5xl font-sans text-black">Latest ads!</h1>
            <p className="py-6 font-play text-gray-800">
              Here is what others in your region are getting help with now
            </p>
            <button className="btn btn-primary rounded-full bg-violet-600 border-2">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdPage;
