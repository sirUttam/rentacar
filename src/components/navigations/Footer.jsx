import React from "react";
import SocialMedia from "../UI/SocialMedia";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="text-whitecolor bg-blackcolor">
      <div className="w-11/12 mx-auto grid md:grid-cols-5 lg:grid-cols-3 pt-20 pb-28 gap-10 md:gap-4 lg:gap-10">
        <div className="flex flex-col md:col-span-2 lg:col-span-1 gap-4">
          <div className="text-white Playballfont text-2xl md:text-4xl">
            <span className="text-primarycolor">Rent</span> Car{" "}
            <span className="text-secondarycolor">Nepal</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold">About who we are?</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, quia, voluptas, doloremque, quos, velit,
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold">Explore Links</div>
          <div className="flex flex-wrap gap-3 md:flex-col lg:flex-row text-whitecolor">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/brands">Brands</Link>
            <Link to="/cars">Cars</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>

          </div>
          <SocialMedia />
        </div>
        <div className="flex md:col-span-2 lg:col-span-1 flex-col gap-4">
          <div className="text-xl font-semibold">Office Location</div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <IoLocationSharp className="text-xl" />
              Butwal Multiple Campus, Golpark, Butwal
            </div>
            <div className="flex gap-2 items-center">
              <IoCall className="text-xl" />
              +977-9865549270
            </div>
            <div className="flex gap-2 items-center">
              <AiOutlineMail className="text-xl" />
              carrentalnepal@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="bg-whitecolor text-blackcolor text-sm text-center py-3">
        {`Copyright © 2024 - RCN | All Rights Reserved`}
      </div>
    </div>
  );
}

export default Footer;
