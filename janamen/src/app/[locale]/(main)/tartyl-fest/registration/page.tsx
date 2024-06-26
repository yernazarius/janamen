import RegisterHeader from "@/components/Janamen/Header";
import Footer from "@/components/Home/Footer";
import TartylFestRegistrationSvg from "@/components/tartyl-fest/TartylFestRegistrationSvg";
import TartylFestReg from "./Register";

export default function JanamenRegistration() {
    return (
        <div className="w-screen bg-primary_dark">
            <div className="container mx-auto px-20">
                <RegisterHeader />
                <TartylFestRegistrationSvg />
                <TartylFestReg />
            </div>
            <Footer />
        </div>
    )
}