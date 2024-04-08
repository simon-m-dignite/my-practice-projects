import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full md:px-14 py-16">
      <div className="flex flex-col md:flex-row md:justify-between px-4 md:px-0">
        <div className="w-2/4 md:1/5">
          <div className="mb-6">
            <span className="text-2xl font-bold">Monoline.</span>
          </div>
          <div className="flex gap-4">
            <FaFacebook className="w-5 h-5 text-slate-400 cursor-pointer" />
            <FaTwitter className="w-5 h-5 text-slate-400 cursor-pointer" />
            <FaLinkedinIn className="w-5 h-5 text-slate-400 cursor-pointer" />
            <BsYoutube className="w-5 h-5 text-slate-400 cursor-pointer" />
          </div>
        </div>
        <div className="w-2/4 md:1/5 pt-1 flex flex-col justify-start items-start gap-5">
          <p className="text-slate-400 font-semibold text-xl">Products</p>
          <a href="/" className="font-medium text-sm">
            Recurring Payments
          </a>
          <a href="/" className="font-medium text-sm">
            Instant Bank Pay
          </a>
          <a href="/" className="font-medium text-sm">
            Recurring Payments
          </a>
          <a href="/" className="font-medium text-sm">
            International Payments
          </a>
          <a href="/" className="font-medium text-sm">
            One-off Payments
          </a>
        </div>
        <div className="w-2/4 md:1/5 pt-8 md:pt-1 flex flex-col justify-start items-start gap-5">
          <p className="text-slate-400 font-semibold text-xl">Resoucres</p>
          <a href="/" className="font-medium text-sm">
            Customer Hub
          </a>
          <a href="/" className="font-medium text-sm">
            Guide
          </a>
          <a href="/" className="font-medium text-sm">
            API Documentation
          </a>
          <a href="/" className="font-medium text-sm">
            FAQ
          </a>
          <a href="/" className="font-medium text-sm">
            Security
          </a>
        </div>
        <div className="w-2/4 md:1/5 pt-8 md:pt-1 flex flex-col justify-start items-start gap-5">
          <p className="text-slate-400 font-semibold text-xl">Company</p>
          <a href="/" className="font-medium text-sm">
            About Monoline
          </a>
          <a href="/" className="font-medium text-sm">
            Careers
          </a>
          <a href="/" className="font-medium text-sm">
            News & Press
          </a>
          <a href="/" className="font-medium text-sm">
            Blog
          </a>
        </div>
        <div className="w-2/4 md:1/5 pt-8 md:pt-1 flex flex-col justify-start items-start gap-5">
          <p className="text-slate-400 font-semibold text-xl">Contact Us</p>
          <div className="">
            <p className="text-sm font-medium text-slate-400">Sales</p>
            <p className="font-medium">Contact Sales</p>
            <a href="/" className="font-medium text-sm">
              +60876543445
            </a>
          </div>
          <div className="">
            <p className="text-sm font-medium text-slate-400">Support</p>
            <p className="font-medium">Request Support</p>
            <a href="/" className="font-medium text-sm">
              +60876543445
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
