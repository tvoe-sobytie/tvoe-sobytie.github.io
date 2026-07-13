import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Watermark from './Watermark';

export default function Events() {
    const [activeTab, setActiveTab] = useState('private');
    const navigate = useNavigate();

    const categories = {
        private: {
            title: 'Частные торжества',
            subtitle: 'Premium',
            items: [
                { name: 'Режиссерские свадьбы', desc: 'от камерных концептуальных до масштабных свадебных шоу', link: '/weddings' },
                { name: 'Юбилеи и знаковые дни рождения', desc: 'сценарные праздники, юбилеи компаний или персон', link: '/anniversaries' },
                { name: 'Годовщины и семейные гала-ужины', desc: 'закрытые VIP-приемы для близкого круга', link: '/anniversaries-gala' }
            ]
        },
        corporate: {
            title: 'Корпоративные и бизнес-события',
            subtitle: 'Деловой подход',
            items: [
                { name: 'Корпоративные гала-вечера и юбилеи компаний', desc: 'торжественные награждения, масштабные праздники для сотрудников', link: '/corporate-gala' },
                { name: 'Презентации брендов, продуктов и недвижимости', desc: 'премиальные ланчи, открытия флагманских пространств', link: '/presentations' },
                { name: 'Бизнес-форумы, конференции и конгрессы', desc: 'деловые события с безупречной логистикой и техническим продакшеном', link: '/forums' },
                { name: 'MICE и выездные тимбилдинги', desc: 'организация деловых и развлекательных поездок для компаний в России', link: '/mice' }
            ]
        },
        image: {
            title: 'Имиджевые и светские мероприятия',
            subtitle: 'Высокий статус',
            items: [
                { name: 'Грандиозные открытия (Grand Opening)', desc: 'премиальный запуск ресторанов, отелей, автосалонов', link: '/grand-opening' },
                { name: 'Модные показы и арт-перформансы', desc: 'светские события, интеграция искусства и брендов', link: '/fashion-shows' },
                { name: 'Благотворительные балы и аукционы', desc: 'мероприятия высокого статуса с участием медийных лиц', link: '/charity-balls' }
            ]
        }
    };

    const current = categories[activeTab as keyof typeof categories];

    const handleCardClick = (link: string | null) => {
        if (link) {
            navigate(link);
        }
    };

    return (
        <section id="events" className="relative w-full py-16 md:py-24 overflow-hidden">

            {/* Фоновое изображение */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/site-bg.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            ></div>

            {/* Полупрозрачная подложка */}
            <div className="absolute inset-0 bg-white/20"></div>

            {/* Водяной знак */}
            <Watermark />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

                {/* Заголовок секции */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="w-12 h-[2px] bg-stone-600 mx-auto mb-6"></div>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 font-bold tracking-wide drop-shadow-md">
                        События
                    </h2>
                    <p className="text-xs tracking-[0.2em] text-stone-700 uppercase font-semibold mt-3 drop-shadow-sm">
                        Наша экспертиза в каждом формате
                    </p>
                </div>

                {/* Табы */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab('private')}
                        className={`px-6 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-base tracking-[0.15em] font-semibold transition-all duration-300 ${activeTab === 'private'
                            ? 'bg-stone-800 text-white shadow-md'
                            : 'bg-white/60 backdrop-blur-sm text-stone-600 hover:bg-white/80'
                            }`}
                    >
                        Частные торжества
                    </button>
                    <button
                        onClick={() => setActiveTab('corporate')}
                        className={`px-6 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-base tracking-[0.15em] font-semibold transition-all duration-300 ${activeTab === 'corporate'
                            ? 'bg-stone-800 text-white shadow-md'
                            : 'bg-white/60 backdrop-blur-sm text-stone-600 hover:bg-white/80'
                            }`}
                    >
                        Корпоративные
                    </button>
                    <button
                        onClick={() => setActiveTab('image')}
                        className={`px-6 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-base tracking-[0.15em] font-semibold transition-all duration-300 ${activeTab === 'image'
                            ? 'bg-stone-800 text-white shadow-md'
                            : 'bg-white/60 backdrop-blur-sm text-stone-600 hover:bg-white/80'
                            }`}
                    >
                        Имиджевые
                    </button>
                </div>

                {/* Контент активного таба */}
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="font-serif text-2xl md:text-3xl text-stone-800 font-bold tracking-wide">
                            {current.title}
                        </h3>
                        <p className="text-xs tracking-[0.2em] text-amber-600 uppercase font-semibold mt-1">
                            {current.subtitle}
                        </p>
                        <div className="w-16 h-[1px] bg-amber-400/50 mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {current.items.map((item, idx) => (
                            <div
                                key={idx}
                                onClick={() => handleCardClick(item.link)}
                                className={`bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-white/50 group ${item.link ? 'cursor-pointer' : 'cursor-default'
                                    }`}
                            >
                                <div className="w-8 h-[2px] bg-amber-400/50 mb-4 group-hover:w-12 transition-all duration-300"></div>
                                <h4 className="font-serif text-lg md:text-xl text-stone-800 font-bold tracking-wide mb-2">
                                    {item.name}
                                </h4>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}