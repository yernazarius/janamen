// components/CustomButton.tsx
import React from 'react';
import { conthrax, futuraPT } from '@/styles/fonts';
import { IoIosArrowRoundForward } from "react-icons/io";

interface CustomButtonProps {
    text: string;
    href: string;
    fontClass: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, href, fontClass }) => {
    return (
        <a
            href={href}
            className={`flex p-6 pr-8 relative w-72 h-24 items-center justify-between bg-primary_dark text-white py-5 rounded-md shadow-md hover:bg-gray-800 transition ${fontClass}`}
        >
            <span className="text-3xl font-semibold pr-5">{text}</span>
            <span className=" absolute -top-2 -right-2 text-primary text-6xl -rotate-45"><IoIosArrowRoundForward className='p-0 m-0' /></span>
        </a>
    );
};

export default CustomButton;
