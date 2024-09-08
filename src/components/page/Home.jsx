import React, { useEffect } from "react";
import Banner from "../pageComponent/Home/Banner";
import BrandSections from "../pageComponent/Home/BrandSections";
import How_we_work from "../pageComponent/Home/How_we_work";
import AvailableCars from "../pageComponent/Home/AvailableCars";
import Testimonials from "../pageComponent/Home/Testimonials";
import FAQ from "../pageComponent/Home/FAQ";

import homeCar from "../../assets/video.mp4";

function Home() {
  useEffect(() => {
    window.scrollTo(0,0)
   }, [])
   
  return (
   <div className="grid gap-14 md:gap-24">
    <Banner 
    titleHead={'Unlock the road'}
     titleBody={'to possibilities.'} 
     buttons={true} 
     image={homeCar}
      video={true} />
    <BrandSections />
    <How_we_work />
    <AvailableCars />
    <FAQ />
    <Testimonials />
   </div>
  );
}

export default Home;
