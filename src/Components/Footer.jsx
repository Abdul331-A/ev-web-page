import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="h-[30%] w-full bg-[#252728] ">
      <div className="px-64 pt-32 pb-32 flex justify-between border-b-2 ">
        <div className="text-white">
          <ul className="flex footer gap-5 text-[12px]">
            <li>Contact</li>
            <li>Cookies</li>
            <li>Data policy</li>
          </ul>
        </div>
        <div className="flex">
          <ul className="flex gap-5 ">
            <p className="text-white text-[12px]">Follow us</p>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
          </ul>
        </div>
      </div>

      <div className="text-[12px] text-center font-normal leading-[1.15] px-[50px] py-[40px] text-[#999999] border-t border-[#4c4c4c] ">
        <p>©EV-L India Private Limited All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
