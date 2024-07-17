import React from "react";
import profile from "../../public/assets/laura-smith-image.svg"

function Info() {
    return (
        <div className="space-y-4 items-center">
            <div className="info--image">
                <img src={profile} alt="" className="" />
            </div>
            <div className="grid justify-center gap-2">
                <h2 className="font-bold text-gray-900 text-3xl">Laura Smith</h2>
                <p className="text-[#F47D27] text-xl">Frontend Engineer</p>
                <p className="text-gray-500 text-center"><a href="https://www.albertbyhope.com">albertbyhope.com</a></p>
            </div>
            <div className="buttons space-x-4">
                <button className="px-8 py-2 border-gray-400 border-2 rounded-lg text-gray-900 font-semibold">Email</button>
                <button className="px-8 py-2 border-gray-400 border-2 rounded-lg text-white font-semibold bg-[#297FE5]">LinkedIn</button>
            </div>
        </div>
    )
}

export default Info;