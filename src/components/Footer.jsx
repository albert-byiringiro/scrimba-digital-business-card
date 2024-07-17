import React from 'react';
import twitter from "../../public/assets/Twitter Icon.svg"
import facebook from "../../public/assets/Facebook Icon.svg"
import instagram from "../../public/assets/Instagram Icon.svg"
import github from "../../public/assets/GitHub Icon.svg"

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
