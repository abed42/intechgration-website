import React from "react";

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="">
      <h1 className="mb-3 text-xl">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
