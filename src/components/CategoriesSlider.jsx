import React, { useEffect } from "react";
import data from "../../data.json";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { LuSalad, LuSandwich } from "react-icons/lu";
import { GiBread, GiHotMeal, GiMeal } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { IoPizza } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

const CategoriesSlider = () => {
    const currentPath = useParams().path;
    useEffect(() => {
        console.log(currentPath);
    }, []);
    const iconMapping = {
        Salades: <LuSalad className="text-lg " />,
        Entrees: <GiMeal className="text-lg " />,
        Moajanet_Charkia: <GiFullPizza className="text-lg " />,
        Plats: <GiHotMeal className="text-lg " />,
        Pizza: <IoPizza className="text-lg " />,
        Fatayer: <GiBread className="text-lg " />,
        Sandwichs: <LuSandwich className="text-lg " />,     
    };
    return (
        <div className="overflow-x-scroll w-full whitespace-nowrap p-4 snap-x scroll-smooth">
            <div className="inline-flex gap-4">
                <NavLink to="/">
                    <div className="bg-lightBeige rounded-full h-10 px-4  shadow-md flex items-center justify-center gap-2">
                        <FaHome className="text-lg text-darkerCaramel" />
                        <p>Home</p>
                    </div>
                </NavLink>
                {data.map((category, index) => {
                    const is_active = category.path == currentPath;
                    return (
                        <NavLink to={`/menu/${category.path}`}>
                            <div
                                key={category.path}
                                className={`rounded-full h-10 px-4 shadow-md flex items-center justify-center gap-2 ${
                                    is_active
                                        ? "bg-darkerCaramel text-lightBeige"
                                        : "bg-lightBeige text-darkerCaramel"
                                }`}
                            >
                                {" "}
                                {iconMapping[category.path]}
                                <p
                                    classname={
                                        is_active
                                            ? "text-lightBeige"
                                            : "text-darkerCaramel"
                                    }
                                >
                                    {category.title.split(" ")[0]}
                                </p>
                            </div>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoriesSlider;
