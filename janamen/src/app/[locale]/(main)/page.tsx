
import Footer from '@/components/Home/Footer';
import Header from '@/components/Home/Header';
import HeroBlock from '@/components/Home/HeroBlock';
import LastNews from '@/components/Home/LastNews';
import Projects from '@/components/Home/Projects';
import Sponsors from '@/components/Home/Sponsors';
import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations();
    return <div >
        <Header />
        <HeroBlock />
        <div className="h-96"></div>
        <LastNews />
        <Projects />
        <Sponsors />
        <Footer />
    </div>

}