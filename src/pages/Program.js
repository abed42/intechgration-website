import React from "react";
import Header from "../partials/Header";

import {
  Curriculum,
  Features,
  Hero,
  Roadmap,
  ExtraFeatures,
} from "../partials/Program";

export const Program = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-grow">
        <Hero />
        <Features />
        <Curriculum />
        <Roadmap />
        <ExtraFeatures />
      </main>
    </div>
  );
};
