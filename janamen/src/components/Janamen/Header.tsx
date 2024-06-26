"use client";
import { useState } from "react";
import Image from "next/image";
import { GrLanguage } from "react-icons/gr";
import { FaYoutube, FaWhatsapp, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Globus from "../Globus";
import { useTranslations } from "next-intl";



export default function RegisterHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = useTranslations();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle('overflow-hidden', !isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('overflow-hidden');
    };



    return (
        <div className="">
            <div className="flex self-center justify-center inset-x-0 lg:mx-0 mx-3 py-12">
                <nav className="relative w-full px-4 py-6 flex items-center rounded-xl">
                    <a className="font-bold leading-none" href="#">
                        <Image unoptimized src="/janamen_logo.png" alt="logo" width={200} height={50} />
                    </a>
                    <a className="font-bold leading-none" href="#">
                        <Image unoptimized src="/iba_logo.png" alt="logo" width={200} height={50} />
                    </a>
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="navbar-burger flex items-center text-blue-600 p-3">
                            <svg className="block h-4 w-4 fill-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden relative ml-auto lg:inline-flex items-center justify-around w-52 text-3xl text-white">


                        <Globus />
                        <FaYoutube />
                        <FaInstagram />
                    </div>
                </nav>
                <div className={`navbar-menu fixed inset-0 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={toggleMenu}></div>
                    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto shadow-lg">
                        <div className="flex items-center mb-8">
                            <a className="mr-auto text-3xl font-bold leading-none" href="#">
                                <Image unoptimized src="/janamen_logo.png" alt="logo" width={200} height={50} />
                            </a>
                            <a className="mr-auto text-3xl font-bold leading-none" href="#">
                                <Image unoptimized src="/iba_logo.png" alt="logo" width={200} height={50} />
                            </a>
                            <button onClick={toggleMenu} className="navbar-close">
                                <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul>
                                <li className="mb-1">
                                    <Link className="block p-4 text-sm font-light text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#AboutUs" onClick={closeMenu}>О нас</Link>
                                </li>
                                <li className="mb-1">
                                    <Link className="block p-4 text-sm font-light text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="https://teethalignpartners.kz/">Партнерам</Link></li>
                                <li className="mb-1">
                                    <Link className="block p-4 text-sm font-light text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#Contacts" onClick={closeMenu}>Контакты</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-auto">
                            <div className="pt-2">
                                <a className="flex items-center px-4 py-3 mb-3 leading-loose text-sm font-light bg-gray-50 hover:bg-gray-100 rounded-xl" href="tel:+77711500201">
                                    <GrLanguage className="w-6 h-6 mr-4" />
                                    +7 771 15 00 201
                                </a>
                            </div>
                            <div className="pt-2">
                                <a className="flex items-center px-4 py-3 mb-3 leading-loose text-sm font-light bg-gray-50 hover:bg-gray-100 rounded-xl" href="https://api.whatsapp.com/send/?phone=77711500201&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20+%D0%9F%D0%B8%D1%88%D1%83%20%D0%B8%D0%B7%20%D0%B2%D0%B0%D1%88%D0%B5%D0%B3%D0%BE%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0!&type=phone_number&app_absent=0">
                                    <FaWhatsapp className="w-6 h-6 mr-4" />
                                    +7 771 15 00 201
                                </a>
                            </div>
                            <div className="pt-2">
                                <a className="flex items-center px-4 py-3 mb-3 leading-loose text-sm font-light bg-gray-50 hover:bg-gray-100 rounded-xl" href="https://www.instagram.com/teethalign.kz/">
                                    <FaInstagram className="w-6 h-6 mr-4" />
                                    teethalign.kz
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}
