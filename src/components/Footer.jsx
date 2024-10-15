import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 h-32">
            <div className="flex items-center text-darkerCaramel p-2 bg-lightBeige">
                <FaFacebookSquare />
                <a href="https://www.facebook.com/Alep.Sultan/">
                    Sultan Alep سلطان حلب{" "}
                </a>
            </div>
            <div className="flex items-center text-darkerCaramel p-2 bg-lightBeige">
                <FaInstagramSquare />
                <a href="https://www.instagram.com/sultan.alep/">
                    Sultan Alep سلطان حلب{" "}          
                </a>
            </div>
        </div>
    );
};

export default Footer;
