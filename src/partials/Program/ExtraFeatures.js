import React from "react";

export const ExtraFeatures = () => {
  return (
    <section className="mt-48 flex justify-center bg-gray-300">
      <div className="max-w-4xl">
        {/* Title Area */}
        <div className="pt-32 pb-12">
          <div className="text-center pb-12 max-w-4xl">
            <h2 className="text-5xl font-bold">
              Wait that's not all
            </h2>
            <p
              className="text-xl text-gray-600 mb-2 mt-4"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis consequatur incidunt optio tempore
              recusandae perspiciatis ad illo exercitationem deleniti
              earum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
