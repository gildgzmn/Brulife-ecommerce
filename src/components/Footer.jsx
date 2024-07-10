import React from 'react';
import logo from '../assets/Logo-2.png'; 
import emailIcon from '../assets/Email.png'; 
import phoneIcon from '../assets/Phone.png'; 
import instagramIcon from '../assets/Instagram.png'; 
import tiktokIcon from '../assets/Tiktok.png'; 
import facebookIcon from '../assets/Facebook.png'; 
import twitterIcon from '../assets/Twitter.png'; 

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="ScentSation Perfume Logo" className="h-33 w-64 ml-16" /> {/* Adjusted the height and width to make the logo bigger and wider */}
          <div className="space-y-4"> {/* Added space-y-4 to add space between the sections */}
            <div>
              <div className="mb-2 ml-56">Help</div>
              <ul>
                <li><a href="/faq" className="text-sm text-gray-400 hover:underline ml-60">FAQs</a></li>
              </ul>
            </div>
            <div>
              <div className="mb-2 mt-4 ml-56">About</div>
              <ul>
                <li><a href="/about" className="text-sm text-gray-400 hover:underline ml-60">About Scentsation Perfume</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-xl mb-4">Contact us:</h2>
          <p className="flex items-center mb-2">
            <img src={emailIcon} alt="Email Icon" className="h-6 w-6 mr-2 ml-4" /> Email: BRULifeGreatholdings@gmail.com
          </p>
          <p className="flex items-center mb-2">
            <img src={phoneIcon} alt="Phone Icon" className="h-6 w-6 mr-2 ml-4" /> Call us: (63) +1 990 912 937
          </p>
          <div className="flex mt-4 ml-24">
            <a href="#" className="text-white mr-4"><img src={twitterIcon} alt="Twitter Icon" className="h-5 w-5" /></a>
            <a href="#" className="text-white mr-4"><img src={instagramIcon} alt="Instagram Icon" className="h-5 w-5" /></a>
            <a href="#" className="text-white mr-4"><img src={tiktokIcon} alt="TikTok Icon" className="h-5 w-5" /></a>
            <a href="#" className="text-white mr-4"><img src={facebookIcon} alt="Facebook Icon" className="h-6 w-6" /></a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-4 text-center">
        <p>S c e n t s a t i o n  P e r f u m e</p>
        <p className="text-gray-500 mt-2">BRULife Greatholdings Corp. | Privacy policy | Terms & Conditions</p>
        <p className="text-gray-500 mt-2">Copyright © All rights reserved. Scentsation Perfume</p>
      </div>
    </footer>
  );
};

export default Footer;
