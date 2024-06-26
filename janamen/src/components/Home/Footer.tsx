/* eslint-disable @next/next/no-img-element */
import { conthrax } from "@/styles/fonts";
import CustomButton from "./CustomButton";

export default function Footer() {
    return (
        <div className="relative flex items-center justify-center text-white pt-24">
            <div className="absolute inset-0 w-full z-10">
                <img
                    src="/hero-block/footer.svg"
                    className="w-full h-full object-cover transform scale-100"
                    alt="Hero Block Image"
                />
            </div>

            <div className="container z-20 px-20 mt-72 mb-16">
                <div className="z-20 flex flex-col items-baseline gap-4 justify-start  w-full ">

                    <a
                        href="/janamen"
                        className={`flex text-center items-center justify-between bg-primary_dark text-white px-8 py-6 rounded-md shadow-md hover:bg-gray-800 transition ${conthrax.className}`}
                    >
                        <span className="text-3xl font-semibold">JANA MEN</span>
                    </a>
                    <a
                        href="/tartyl-fest"
                        className={`flex text-center items-center justify-between border border-primary_dark  text-white px-8 py-6 rounded-md shadow-md hover:bg-gray-800 transition ${conthrax.className}`}
                    >
                        <span className="text-3xl font-semibold text-primary_dark uppercase">Tartyl Fest</span>
                    </a>
                </div>
            </div>

        </div>
    )
}
