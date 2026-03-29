import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="footer grid  md:grid-cols-5 sm:footer-horizontal bg-base-200 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover text-accent">Branding</a>
        <a className="link link-hover text-accent">Design</a>
        <a className="link link-hover text-accent">Marketing</a>
        <a className="link link-hover text-accent">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover text-accent">About us</a>
        <a className="link link-hover text-accent">Contact</a>
        <a className="link link-hover text-accent">Jobs</a>
        <a className="link link-hover text-accent">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover text-accent">Terms of use</a>
        <a className="link link-hover text-accent">Privacy policy</a>
        <a className="link link-hover text-accent">Cookie policy</a>
      </nav>
      <form className="col-span-3">
        <h6 className="footer-title uppercase">Subscribe to our Newsletter</h6>
        <fieldset className="w-80">
          <label>Enter your email address</label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item outline-none"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
          <div className="flex gap-5 mt-2 md:mt-3 ml-5">
              <Link href="#"><FaFacebook className="text-xl"/></Link>
              <Link href="#"><FaInstagram className="text-xl"/></Link>
              <Link href="#"><FaXTwitter className="text-xl"/></Link>
            </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
