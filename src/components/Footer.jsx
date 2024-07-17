import React from 'react';
import twitter from "../assets/socials/Twitter Icon.svg"
import facebook from "../assets/socials/Facebook Icon.svg"
import instagram from "../assets/socials/Instagram Icon.svg"
import github from "../assets/socials/GitHub Icon.svg"

function Footer() {
  return (
    <div className="bg-[#D5D4D8] flex justify-center gap-8 py-4 w-full absolute bottom-0 right-0">
        <img className='' src={twitter} alt="twitter" />
        <img className='' src={facebook} alt="facebook" />
        <img className='' src={instagram} alt="instagram" />
        <img className='' src={github} alt="github" />
    </div>
  );
}

export default Footer;
