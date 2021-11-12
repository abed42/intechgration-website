import React from "react";
import reactLogo from "../../images/react.svg";
import cssLogo from "../../images/css.svg";
import jsLogo from "../../images/js.svg";
import htmlLogo from "../../images/html.svg";

const StackList = [
  {
    title: "HTML",
    image: htmlLogo,
    description:
      "Ensure the proper formatting of text and images so that your browser may display them as they are intended to look.",
  },

  {
    title: "CSS",
    description:
      "Learn how to make your webpages standout by creating beautiful designs.",
    image: cssLogo,
  },

  {
    title: "javascript",
    description:
      "A programming language commonly used in web development to add awesome functionality for your site or app!",
    image: jsLogo,
  },

  {
    title: "React",
    description:
      "One of the most popular JavaScript libraries used for building reusable UI components for your apps.",
    image: reactLogo,
  },
];

const Stack = ({ title, description, image }) => (
  <div className="text-center flex justify-center items-center flex-col mb-8 mx-4">
    <img src={image} width="80" height="80" />
    <h3 className="mb-2 mt-6 text-xl capitalize">{title}</h3>
    <p>{description}</p>
  </div>
);

export const Curriculum = () => {
  return (
    <section className="mt-48 flex justify-center ">
      <div className="max-w-4xl">
        {/* Title Area */}
        <div className="pt-32 pb-12">
          <div className="text-center pb-12 max-w-4xl">
            <h2 className="text-5xl font-bold">What you'll learn</h2>
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

        {/* Curriculum Area */}

        <div className="flex justify-center">
          <div className="max-w-4xl">
            <div className="grid grid-cols-2 gap-10 px-12 mt-8">
              {StackList.map((item, index) => (
                <Stack
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
