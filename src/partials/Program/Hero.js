import React from "react";

export const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-32 pb-6">
        {/* Header Area */}
        <div className="text-center pb-12 md:pb-16">
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
            data-aos="zoom-y-out"
          >
            Start your new career
          </h1>
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xl text-gray-600 mb-4 mt-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              We teach motivated individuals who want to start a
              career in web development. No technical background
              required.
            </p>
            <div className="bg-gray-200 p-3">
              <span className="bg-blue-600 text-gray-100 mr-2 p-1 rounded-sm text-sm">
                Class 0{" "}
              </span>
              Application deadline is November 15 23:59 CET
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
