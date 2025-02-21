import {
  AboutUs,
  // Brands,
  // Feeds,
  // Team,
  // Testimonial,
} from "../components/common/page-componets";

import { OverView, Stats } from "../components/about";
import { Brands, Feeds} from "../components/common/page-componets";

const About = () => {
  return (
    <div className="pt-20 max-w-7xl mx-auto px-4">
      <AboutUs />
      <OverView />
      <Stats />
      <Brands />
      <Feeds />
      {/* <WhatWeDo /> */}
      {/* <Team />
      <Testimonial /> 
      <Brands />
      <Feeds />*/}
      
    </div>
  );
};

export default About;
