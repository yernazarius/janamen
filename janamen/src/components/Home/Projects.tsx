import { conthrax } from '@/styles/fonts';
import NewsCard from './NewsCard';

export default function Projects() {
    return (
        <div className="container px-20 mx-auto mt-36">
            <h1 className={`text-6xl text-center mb-12 ${conthrax.className} uppercase text-white`}> проект <span className='text-primary'>Jana Men</span></h1>

            <div className="flex bg-primary_dark text-white p-6 rounded-lg shadow-lg text-center px-36 flex-col">
                <div>
                    <p>Проект "JanaMen" был инициирован Айтымом Жакуповым в 2021 году с целью помощи людям с избыточным весом и пропаганды здорового образа жизни в Казахстане. Название проекта "JanaMen" переводится как "Новый Я", что символизирует перезагрузку и трансформацию его участников.</p>
                </div>

                <a
                    href="/janamen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex w-64 mx-auto mt-8 items-center px-6 py-3 text-white font-bold shadow-lg transition-transform transform hover:scale-105 custom-button"
                >
                    <div className="absolute inset-0 w-full h-full bg-primary_dark border-2 border-primary clip-path-button_dark"></div>
                    <div className={`relative flex items-center justify-center z-10 w-full h-full text-2xl uppercase ${conthrax.className}`}>
                        подробнее
                    </div>
                </a>
            </div>

            <h1 className={`text-6xl text-center mb-12 mt-24 ${conthrax.className} uppercase text-white`}> проект <span className='text-primary'>Tartyl Fest</span></h1>

            <div className="flex bg-primary_dark text-white p-6 rounded-lg shadow-lg text-center px-36 flex-col">
                <div>
                    <p>
                        Tartyl Fest – это уникальный спортивный фестиваль по подтягиванию на турниках, который впервые был проведён в 2022 году при поддержке «Фонда президентских инициатив «Dara». Амбассадором проекта является Айтым Жакупов – общественный деятель и профессиональный тренер, многократный рекордсмен по Street Workout в Казахстане и в мире, рекордсмен Европы по Street Lifting, один из основателей движения Street Workout в Казахстане. Street Workout – любительский вид спорта, в котором различные упражнения выполняются на уличных спортивных площадках. Чем больше участник подтянется, тем выше его шанс выиграть денежный приз.
                    </p>
                </div>

                <a
                    href="/janamen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex w-64 mx-auto mt-8 items-center px-6 py-3 text-white font-bold shadow-lg transition-transform transform hover:scale-105 custom-button"
                >
                    <div className="absolute inset-0 w-full h-full bg-primary_dark border-2 border-primary clip-path-button_dark"></div>
                    <div className={`relative flex items-center justify-center z-10 w-full h-full text-2xl uppercase ${conthrax.className}`}>
                        подробнее
                    </div>
                </a>
            </div>

        </div >
    );
}
