import React from "react";
import TitleSection from "../../UI/TitleSection";
import { SiHyundai } from "react-icons/si";
import { SiHonda } from "react-icons/si";
import { SiNissan } from "react-icons/si";
import { SiToyota } from "react-icons/si";
import { SiSuzuki } from "react-icons/si";

function BrandSections() {
  const Data=[
    {
      image:<SiHyundai />,
      name:'Hyundai'
    },
    {
      image:<SiHonda />,
      name:'Honda'
   }, {
      image:<SiNissan />,
      name:'Nissan'

    }, {
      image:<SiToyota />,
      name:'Toyota'

    }, {
      image:<SiSuzuki />,
      name:'Suzuki'

    },
  ]
  return (
    <div className="w-11/12 mx-auto h-fit grid gap-10">
      <div>
        <TitleSection
          subtitle="Brands"
          title="Brands"
          secondSection="we Offer"
          description={`We offer a wide range of brands to suit your needs. From luxury cars to eco-friendly vehicles, we have something for everyone.`}
        />
      </div>
      <div className="grid md:grid-cols-5 gap-10  place-content-center place-items-center">
{
  Data.map((val,i)=>{
    return <div>
      <div className="text-9xl md:text-8xl lg:text-9xl">
      {val.image}
    </div>
    <div className="text-center font-semibold pt-4 capitalize">{val.name}</div>
    </div>
  })
}
      </div>
    </div>
  );
}

export default BrandSections;
