import React from "react";
import contactCar from "../../assets/contactCar.jpg";
import { IoIosArrowForward } from "react-icons/io";

function Contact() {
  return (
    <div className="flex flex-col gap-20">
      <div className="h-96 relative text-white ">
        <div className="h-full relative w-full">
          <img
            src={contactCar}
            className="h-full object-cover object-center w-full"
          />
          <div className="bg-primarycolor bg-opacity-10 h-full w-full absolute top-0 z-10"></div>
        </div>
        <div className="w-11/12 absolute top-0 left-0 right-0 flex h-full justify-center flex-col gap-2 mx-auto">
          <div className="text-sm flex items-center gap-3 capitalize">home <IoIosArrowForward /> contact us</div>
          <div className="font-semibold text-3xl">
           Contact Us
          </div>
        </div>
      </div>
      <div className="h-96 w-11/12 rounded-md overflow-clip mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2115036812215!2d83.46532727525398!3d27.710755276180606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399686f71446a4b1%3A0x712e7c86b3c8d75!2sButwal%20Multiple%20Campus!5e0!3m2!1sen!2snp!4v1725769973121!5m2!1sen!2snp"
          className="h-full w-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
