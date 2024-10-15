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
            <div className="pb-10 w-full "><h1 className="text-3xl text-center font-bold underline font-playwrite p-2 pt-10 bg-opacity-80 text-darkerCaramel bg-lightBeige">{category.title}</h1></div>
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
