import Watermark from './Watermark';

export default function Geography() {
    const cities = [
        { name: 'Санкт-Петербург', region: 'Северо-Запад' },
        { name: 'Москва', region: 'Центр' },
        { name: 'Тюмень', region: 'Урал' },
        { name: 'Екатеринбург', region: 'Урал' },
        { name: 'Курган', region: 'Урал' },
        { name: 'Краснодар', region: 'Юг' }
    ];

    return (
        <section id="geography" className="relative w-full py-16 md:py-24 overflow-hidden">

            {/* Фоновое изображение */}
            <div
                className="absolute inset-0 w-full h-full bg-[length:100%_auto] bg-top bg-no-repeat md:bg-cover md:bg-center"
                style={{
                    backgroundImage: "url('/images/about-bg.jpg')"
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
                        География проектов
                    </h2>
                    <p className="text-xs tracking-[0.2em] text-stone-700 uppercase font-semibold mt-3 drop-shadow-sm">
                        Где мы уже работали
                    </p>
                </div>

                {/* Карта-схема с городами */}
                <div className="max-w-6xl mx-auto">
                    <div className="relative mb-12 md:mb-16">
                        {/* Линия-маршрут */}
                        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-stone-400 to-transparent -translate-y-1/2"></div>

                        {/* Точки с городами */}
                        <div className="relative flex justify-between flex-wrap gap-6 md:gap-4">
                            {cities.map((city, index) => (
                                <div key={index} className="text-center relative z-10 flex-1 min-w-[80px]">
                                    {/* Точка */}
                                    <div className="w-3 h-3 bg-stone-600 rounded-full mx-auto mb-3 shadow-md"></div>
                                    {/* Карточка города */}
                                    <div className="bg-white/70 backdrop-blur-sm rounded-xl px-3 py-2 inline-block shadow-sm">
                                        <p className="text-stone-800 font-bold text-sm md:text-base">{city.name}</p>
                                        <p className="text-stone-500 text-[10px] tracking-wide">{city.region}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-stone-700 text-sm md:text-base leading-relaxed font-semibold drop-shadow-sm">
                            Готовы реализовать проект <span className="text-amber-600">в любом городе России</span>
                        </p>
                        <div className="w-24 h-[1px] bg-amber-400/50 mx-auto mt-6"></div>
                    </div>
                </div>

                {/* Статистика/факты — обновлённая */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 md:mt-20 text-center">
                    <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
                        <p className="text-2xl md:text-3xl font-bold text-stone-800">6+</p>
                        <p className="text-[10px] tracking-[0.15em] text-stone-500 uppercase mt-1">лет опыта</p>
                    </div>
                    <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
                        <p className="text-2xl md:text-3xl font-bold text-stone-800">6+</p>
                        <p className="text-[10px] tracking-[0.15em] text-stone-500 uppercase mt-1">городов</p>
                    </div>
                    <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
                        <p className="text-2xl md:text-3xl font-bold text-stone-800">300+</p>
                        <p className="text-[10px] tracking-[0.15em] text-stone-500 uppercase mt-1">проектов</p>
                    </div>
                    <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
                        <p className="text-2xl md:text-3xl font-bold text-stone-800">100+</p>
                        <p className="text-[10px] tracking-[0.15em] text-stone-500 uppercase mt-1">клиентов</p>
                    </div>
                </div>

                {/* Дополнительная строка с восторженными зрителями */}
                <div className="text-center mt-8">
                    <p className="text-stone-600 text-sm italic font-medium">
                        ✨ 15 000+ зрителей в восторге ✨
                    </p>
                </div>

            </div>
        </section>
    );
}