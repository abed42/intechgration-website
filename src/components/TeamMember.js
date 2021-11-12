import React from "react";

export const TeamMember = ({ name, position, links, image }) => {
  return (
    <div
      className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3"
      data-aos="zoom-y-out"
      data-aos-anchor="[data-aos-id-team]"
    >
      <div className="flex flex-col items-center">
        <img
          className="rounded-full mb-4"
          src={image}
          width="120"
          height="120"
          alt="Team member 01"
        />
        <h4 className="text-xl font-bold mb-1">{name}</h4>
        <div className="text-blue-600 font-medium mb-2">
          {position}
        </div>
        <p className="text-gray-600 text-center mb-3">
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum sint occaecat cupidatat.
        </p>
        <div className="text-sm text-gray-600 font-medium">
          {links.map((link, index) => {
            return (
              <a
                key={index}
                href={link.url}
                className="text-gray-900 hover:underline mr-2"
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
