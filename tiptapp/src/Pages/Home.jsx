import React from "react";
import Hero from "../Components/Hero";
import Ctasection from "../Components/Ctasection";
import Content from "../Components/Content";
import Helppage from "../Components/Helppage";
import AdPage from "../Components/AdPage";
import Banner from "../Components/Banner";
import Review from "../Components/Review";

function Home() {
  return (
    <div>
      <Hero />

      <Ctasection />
      <Content />
      <Helppage />
      <AdPage />
      <Review />
      <Banner />
    </div>
  );
}

export default Home;
