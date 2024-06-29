import React from 'react'
import { motion, useAnimation, useAnimate, stagger } from "framer-motion"

export const Sidebar = ({ handleClick }) => {
    console.log(handleClick);

    const controls = useAnimation();
    const items = ["resume", "mock interview", "cover letter"];

    return (
        <div className="bg-gray-800 text-white flex-initial w-64 p-8 flex flex-col">
            {items.map((item, index) => (
                <motion.h1
                    key={item}
                    className="py-2 self-center cursor-pointer border-b-2 hover:shadow-b-md hover:font-bold"
                    onClick={() => handleClick(item)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.h1>
            ))}
        </div>
    );
}
