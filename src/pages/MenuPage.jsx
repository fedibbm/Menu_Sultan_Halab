import React from "react";
import { useParams } from "react-router-dom";
import MenuItemCard from "../components/MenuItemCard";
import data from "../../data.json"; // Assuming data is in the correct format

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
        <div className="flex flex-col gap-4 items-center">
            <div className="text-xl font-bold">{category.title}</div>

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
