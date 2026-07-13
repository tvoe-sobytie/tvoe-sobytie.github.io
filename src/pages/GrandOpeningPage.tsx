import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Watermark from '../components/Watermark';
import ScrollToTop from '../components/ScrollToTop';
import FloatingBotButton from '../components/FloatingBotButton';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function GrandOpeningPage() {
    useDocumentMeta(
        'Грандиозные открытия (Grand Opening) | Твоё событие',
        'Премиальный запуск ресторанов, отелей и автосалонов — открытие, которое задаёт стандарты и остаётся в истории бренда.'
    );
    const navigate = useNavigate();
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const goToImageEvents = () => {
        navigate('/');
        setTimeout(() => {
            const eventsSection = document.getElementById('events');
            if (eventsSection) {
                eventsSection.scrollIntoView({ behavior: 'smooth' });
                const imageTab = document.querySelector('#events .flex button:nth-child(3)') as HTMLButtonElement;
                if (imageTab) {
                    imageTab.click();
                }
            }
        }, 150);
    };

    const services = [
        'Создание инфоповода: разработка концепции, которая привлечет внимание целевой аудитории и вызовет резонанс в медиа.',
        'Режиссура момента открытия: постановка кульминационной части (разрезание ленты, световой перформанс, эффектный запуск механизмов).',
        'Светский этикет: приглашение медийных лиц, организация Welcome-drink с участием шеф-барменов, контроль дресс-кода.'
    ];

    const galleryImages = [
        '/images/gallery-1.jpg',
        '/images/gallery-3.jpg',
        '/images/gallery-4.jpg',
        '/images/gallery-5.jpg',
        '/images/gallery-6.jpg',
        '/images/gallery-1.jpg'
    ];

    return (
        <div className="relative min-h-screen overflow-hidden">

            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/orange-fon.jpg')" }}
            ></div>

            <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>

            <Watermark />
            <ScrollToTop />
            <FloatingBotButton />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">

                <div className="mb-8">
                    <button
                        onClick={goToImageEvents}
                        className="group flex items-center gap-2 px-6 py-3 bg-stone-800 hover:bg-stone-700 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="text-sm tracking-[0.1em] uppercase font-semibold">Вернуться к имиджевым событиям</span>
                    </button>
                </div>

                <div className="text-center mb-12 md:mb-16">
                    <div className="w-12 h-[2px] bg-stone-600 mx-auto mb-6"></div>
                    <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 font-bold tracking-wide drop-shadow-md">
                        Грандиозные открытия (Grand Opening)
                    </h1>
                    <p className="text-xs tracking-[0.2em] text-stone-700 uppercase font-semibold mt-3 drop-shadow-sm">
                        премиальный запуск ресторанов, отелей, автосалонов
                    </p>
                </div>

                <div className="max-w-3xl mx-auto text-center mb-12">
                    <p className="text-stone-700 text-base md:text-lg leading-relaxed font-medium">
                        Открытие, которое задаёт стандарты. Мы создаём инфоповод, о котором говорят,
                        и момент открытия, который остаётся в истории бренда.
                    </p>
                    <div className="w-24 h-[1px] bg-amber-400/50 mx-auto mt-8"></div>
                </div>

                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="font-serif text-2xl md:text-3xl text-stone-800 font-bold text-center mb-8">
                        Что мы предлагаем
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((service, idx) => (
                            <div key={idx} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm flex gap-3">
                                <div className="text-amber-500 text-xl mt-0.5">✦</div>
                                <p className="text-stone-700 text-sm leading-relaxed">{service}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="text-center text-[10px] tracking-[0.2em] text-stone-700 uppercase font-bold mb-6 drop-shadow-sm">
                        Наши проекты
                    </p>

                    <div className="relative">
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-md hidden md:block"
                        >
                            <svg className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div
                            ref={scrollRef}
                            className="flex overflow-x-auto gap-5 pb-6 scrollbar-none snap-x snap-mandatory"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {galleryImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="w-[280px] md:w-[320px] shrink-0 snap-start aspect-[4/5] rounded-2xl overflow-hidden bg-stone-200 shadow-md"
                                >
                                    <img
                                        src={img}
                                        alt={`Grand Opening ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-md hidden md:block"
                        >
                            <svg className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <button
                        onClick={() => window.open('https://vk.com/tvoyesobytie', '_blank')}
                        className="px-8 py-3 bg-stone-800 text-white rounded-full text-sm tracking-[0.2em] uppercase font-bold hover:bg-stone-700 transition"
                    >
                        Организовать открытие
                    </button>
                </div>

            </div>
        </div>
    );
}