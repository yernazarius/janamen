// components/NewsCard.tsx
import React from 'react';
import Image from 'next/image';
import { conthrax, futuraPT } from '@/styles/fonts';
import { useTranslations } from 'next-intl';
import YouTubeButton from './YouTubeButton';

const NewsCard = () => {
    const t = useTranslations();

    return (
        <div className='flex flex-col gap-8'>
            <div className="flex bg-primary_dark text-white p-6 rounded-lg shadow-lg">
                <div className="flex-1">
                    <h2 className={`text-4xl font-bold mb-2 ${conthrax.className}`}>JANA MEN MOSCOW</h2>
                    <h3 className={`text-2xl ${conthrax.className} text-primary mb-4`}>«НАКАЗАНИЕ ЗА МОЛЧАНИЕ»</h3>
                    <p className={`text-base mb-4 ${futuraPT.className}`}>
                        Всем известно, что правила на проекте Jana Men—2 нарушать нельзя, будь-то спрятанный
                        второй телефон или молчание о том, что появляются проблемы со здоровьем. В первом случае, можно схлопотать 200 бёрпи на тренировке, во втором, жизнь сама отстранит вас от занятий. Кто на этот раз оказался в центре внимания?
                    </p>
                    <div className="flex items-center">
                        <span className="text-lg font-bold mr-2">НОВАЯ СЕРИЯ УЖЕ НА КАНАЛЕ</span>

                        <YouTubeButton href="https://www.youtube.com/watch?v=qA7CUqDwLj4?si=r14BjAfAz_71M-CA" />

                    </div>
                </div>
                <div className="flex-shrink-0 ml-6">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/qA7CUqDwLj4?si=r14BjAfAz_71M-CA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
            </div>

            <div className="flex bg-primary_dark text-white p-6 rounded-lg shadow-lg">
                <div className="flex-1">
                    <h2 className={`text-4xl font-bold mb-2 ${conthrax.className}`}>ИНТЕРВЬЮ</h2>
                    <h3 className={`text-2xl ${conthrax.className} text-primary mb-4`}>ПИЩЕВЫЕ НАРКОМАНЫ, БУЛЛИНГ, ЛИШНИЙ ВЕС</h3>
                    <p className={`text-base mb-4 ${futuraPT.className}`}>
                        В своих социальных сетях спортсмен поднимает тему ожирения и здорового образа жизни. История парня по имени Алишер, который сбрасывал киллограммы в тик токе набрало огромное количество просмотров, а потом, и поклонников по всему миру. Теперь Айтым и его команда помогают сбросить лишний вес в режиме реалити-шоу на глазах миллионов людей.
                    </p>
                    <div className="flex items-center">
                        <span className="text-lg font-bold mr-2">НОВАЯ СЕРИЯ УЖЕ НА КАНАЛЕ</span>
                        <YouTubeButton href="https://youtu.be/MLiUB4HSkbc?si=SA5ZxSuVMLr7FAz2" />

                    </div>
                </div>
                <div className="flex-shrink-0 ml-6">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/MLiUB4HSkbc?si=qAto_CkL1Zq5Ykgf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                </div>
            </div>

            <div className="flex bg-primary_dark text-white p-6 rounded-lg shadow-lg">
                <div className="flex-1">
                    <h2 className={`text-4xl font-bold mb-2 uppercase ${conthrax.className}`}>Статья</h2>
                    <h3 className={`text-2xl ${conthrax.className} text-primary mb-4 uppercase`}>Айтым Жакупов: биография самого сильного человека Казахстана</h3>
                    <p className={`text-base mb-4 ${futuraPT.className}`}>
                        Айтым Жакупов — самый сильный человек Казахстана. Получил свое прозвище благодаря установленному рекорду отжиманий на пальцах в количестве 30 повторений. Постоянно показывает свою силу в социальной сети TikTok и Instagram. Является основателем проекта Jana Men, где помогает желающим сбросить вес. Парень вызывает интерес не только из-за своих физических достижений, но и благодаря помощи окружающим. Расскажем о нем подробнее.
                    </p>
                    <div className="flex items-center">
                        <span className="text-lg font-bold mr-2">НОВАЯ СЕРИЯ УЖЕ НА КАНАЛЕ</span>
                        <a href="https://dzen.ru/a/Zl8DuH8-czuS7_mR" target="_blank" rel="noopener noreferrer" className="flex items-center bg-white text-black px-4 py-2 rounded-md shadow hover:bg-gray-200 transition">
                            <Image src="/youtube-icon.svg" alt="YouTube" width={24} height={24} className="mr-2" />
                            Дзен
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default NewsCard;
