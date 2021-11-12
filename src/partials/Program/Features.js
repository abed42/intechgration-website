import React from "react";
import FeatureCard from "../../components/FeatureCard";

export const Data = [
  {
    title: "Tuition free education",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores odio excepturi, doloribus debitis, unde nam, voluptatibus velit pariatur reprehenderit dignissimos aperiam fugiat sed adipisci! Rem, quas sit sint quo beatae fugit voluptas. Suscipit blanditiis non ratione dignissimos eveniet?",
  },

  {
    title: "Project based learning",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores odio excepturi, doloribus debitis, unde nam, voluptatibus velit pariatur reprehenderit dignissimos aperiam fugiat sed adipisci! Rem, quas sit sint quo beatae fugit voluptas. Suscipit blanditiis non ratione dignissimos eveniet?",
  },
  {
    title: "We are in this together",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores odio excepturi, doloribus debitis, unde nam, voluptatibus velit pariatur reprehenderit dignissimos aperiam fugiat sed adipisci! Rem, quas sit sint quo beatae fugit voluptas. Suscipit blanditiis non ratione dignissimos eveniet?",
  },
];

export const Features = () => {
  return (
    <section className="mt-48 w-full bg-gray-300 py-20 px-24 flex items-center justify-center">
      <div className="max-w-6xl ">
        <div className="grid grid-cols-3 gap-4 place-content-center justify-items-center">
          {Data.map((item, index) => (
            <FeatureCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
