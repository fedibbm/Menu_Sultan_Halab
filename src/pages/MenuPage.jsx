import React from "react";
import { useParams } from "react-router-dom";
import MenuItemCard from "../components/MenuItemCard";
import data from "../../data.json"; // Assuming data is in the correct format
import CategoriesSlider from "../components/CategoriesSlider";

const MenuPage = () => {
    const { path } = useParams();
    const category = data.find((cat) => cat.path === path); // Use strict equality (===)

    if (!category) {
        return (
            <div className="flex flex-col gap-4 items-center">
                <p>Category not found.</p>
            </div>
        );
    }

    const items = category.items;

    return (
        <div className="flex flex-col items-center space-y-8 bg-opacity-20 bg-white overflow-x-hidden pb-20 ">





            <div className="w-[95vw] bg-lightBeige shadow-md rounded-b-md h-32 flex justify-between items-center px-6">
                {/* <h1 className="text-3xl text-center font-bold underline font-playwrite p-2 pt-10 bg-opacity-80 text-darkerCaramel bg-lightBeige">
                    {category.title}
                </h1> */}
                <h1 className=" font-bold text-2xl rounded-xl text-gray-700">
                    {category.title.toUpperCase()}
                </h1>
                <img src="/images/sultan_alep_logo.png" className="h-32 w-32" />
            </div>






            <CategoriesSlider />
            {items && items.length > 0 ? (
                items.map((item, index) => (
                    <MenuItemCard key={index} item={item} />
                ))
            ) : (
                <p>No items available for this category.</p>
            )}
        </div>
    );
};

export default MenuPage;
