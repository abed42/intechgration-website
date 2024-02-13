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
            Volunteer
          </h1>
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xl text-gray-600 mb-4 mt-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              We have an amazing community of software engineers,
              designers, HR experts, business managers and other
              talented individuals. Do you want to help us out to make
              the tech industry more inclusive and make new friends?
              Join our community!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
