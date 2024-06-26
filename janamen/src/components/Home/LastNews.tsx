import { conthrax } from '@/styles/fonts';
import NewsCard from './NewsCard';

export default function LastNews() {
    return (
        <div className="container px-20 mx-auto">
            <h1 className={`text-6xl text-center mb-12 ${conthrax.className} text-white`}>Последние <span className='text-primary'>новости</span></h1>

            <NewsCard />
        </div>
    );
}
