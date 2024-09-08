import React, { useEffect } from "react";
import Banner from "../pageComponent/Home/Banner";
import BrandSections from "../pageComponent/Home/BrandSections";
import How_we_work from "../pageComponent/Home/How_we_work";
import AvailableCars from "../pageComponent/Home/AvailableCars";
import FAQ from "../pageComponent/Home/FAQ";
import Testimonials from "../pageComponent/Home/Testimonials";
import homeCar from '../../assets/homeCar.png'
import Aboutsection from "../pageComponent/About/Aboutsection";
function About() {
  useEffect(() => {
    window.scrollTo(0,0)
   }, [])
   
  return (
    <div className="grid gap-28">
      <div>
        <Banner
         subtitle={'Rental'}
         titleBody={'About Us'} 
         buttons={false} 
         image={homeCar}
          video={false} 
        />
        <Aboutsection />
      </div>
      <BrandSections />
      <How_we_work />
      <AvailableCars />
      <FAQ />
      <Testimonials />
    </div>
  );
}

export default About;
