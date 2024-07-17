import React from "react";
import profile from "../assets/laura-smith-image.svg"

function Info(params) {
    return (
        <div className="">
            <div className="info--image">
                <img src={profile} alt="" className="w-1/2" />
            </div>
            <div className="">
                <h2 className="text-gray-900 text-2xl">Laura Smith</h2>
                <p>Frontend Engineer</p>
                <p><a href="https://www.albertbyhope.com">albertbyhope.com</a></p>
            </div>
            <div className="buttons">
                <button className="">Email</button>
                <button className="">LinkedIn</button>
            </div>
        </div>
    )
}

export default Info;