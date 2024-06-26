import RegisterHeader from "@/components/Janamen/Header";
import JanamenRegistrationSvg from "@/components/Janamen/JanamenRegistrationSvg";
import JanamenReg from "./Register";
import Footer from "@/components/Home/Footer";

export default function JanamenRegistration() {
    return (
        <div className="w-screen bg-primary_dark">
            <div className="container mx-auto px-20">
                <RegisterHeader />
                <JanamenRegistrationSvg />
                <JanamenReg />
            </div>
            <Footer />
        </div>
    )
}