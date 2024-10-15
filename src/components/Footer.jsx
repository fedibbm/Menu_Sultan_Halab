import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 pb-10">
            <div className="flex items-center text-darkerCaramel p-2 bg-lightBeige gap-2 w-56  ">
                <FaFacebookSquare />
                <a href="https://www.facebook.com/Alep.Sultan/">
                    Sultan Alep سلطان حلب{" "}
                </a>
            </div>
            <div className="flex items-center text-darkerCaramel p-2 bg-lightBeige gap-2 w-56   ">
                <FaInstagramSquare />
                <a href="https://www.instagram.com/sultan.alep/">
                    Sultan Alep سلطان حلب{" "}          
                </a>
            </div>
            <div className="flex items-center text-darkerCaramel p-2 bg-lightBeige gap-2 w-56   ">
                <FaPhoneFlip />
                <a href="tel:97774864">97 774 864</a>
            </div>
        </div>
    );
};

export default Footer;
