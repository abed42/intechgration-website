import React from "react";
import { CTA, Hero, Mentor } from "../partials/Voulnteer";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

export const Voulnteer = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Mentor />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};
