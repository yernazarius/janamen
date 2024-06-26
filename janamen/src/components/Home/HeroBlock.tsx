/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import CustomButton from "@/components/Home/CustomButton";
import { conthrax, futuraPT } from '@/styles/fonts';


export default function HeroBlock() {
    return (
        <div className="relative flex items-center justify-center text-white ">
            <div className="absolute inset-0 w-full h-full z-10">
                <img
                    src="/hero-block/hero_block_img.png"
                    className=" w-full h-full object-cover transform scale-100 mt-48"
                    alt="Hero Block Image"
                />
            </div>
            <div className="container absolute inset-0 w-full mx-auto px-20">

                <img
                    src="/hero-block/aitym_zhakupov.svg"
                    className=" w-full object-cover transform scale-100 mx-auto"
                    alt="Hero Block Image"
                />
            </div>
            <div className="container z-20 px-20 mt-96">
                <div className="z-20 flex flex-row items-center justify-between w-full mt-80">
                    <CustomButton text="JANAMEN" href="/janamen" fontClass={conthrax.className} />
                    <CustomButton text="TARTYL FEST" href="/tartyl-fest" fontClass={conthrax.className} />
                </div>
            </div>

        </div>
    );
}