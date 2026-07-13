import { useNavigate } from 'react-router-dom';
import Watermark from '../components/Watermark';
import ScrollToTop from '../components/ScrollToTop';
import FloatingBotButton from '../components/FloatingBotButton';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function AboutPage() {
    useDocumentMeta(
        'О нас | Твоё событие — ивент-агентство под ключ',
        'Ксения и Екатерина — основательницы ивент-агентства «Твоё событие». Профильное образование, честность и полное сопровождение мероприятий по всей России.'
    );
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    return (
        <div className="relative min-h-screen overflow-hidden">

            {/* Фоновое изображение */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
            ></div>

            {/* Полупрозрачная подложка */}
            <div className="absolute inset-0 bg-white/20"></div>

            {/* Водяной знак */}
            <Watermark />

            {/* Кнопка "Наверх" */}
            <ScrollToTop />
            <FloatingBotButton />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">

                {/* Кнопка возврата на главную */}
                <div className="mb-8">
                    <button
                        onClick={goToHome}
                        className="group flex items-center gap-2 px-6 py-3 bg-stone-800 hover:bg-stone-700 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="text-sm tracking-[0.1em] uppercase font-semibold">На главную</span>
                    </button>
                </div>

                {/* Заголовок */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="w-12 h-[2px] bg-stone-600 mx-auto mb-6"></div>
                    <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 font-bold tracking-wide drop-shadow-md">
                        О нас
                    </h1>
                    <p className="text-xs tracking-[0.2em] text-stone-700 uppercase font-semibold mt-3 drop-shadow-sm">
                        Кто создаёт ваши события
                    </p>
                </div>

                {/* ===== БЛОК 1: Общее фото + приветствие ===== */}
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                    <div className="lg:w-1/2">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-stone-200">
                            <img
                                src="/images/team-photo.jpg"
                                alt="Ксения и Екатерина"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md">
                            <p className="text-stone-700 text-base md:text-lg leading-relaxed font-medium">
                                Приветствуем! Мы — <span className="font-bold text-stone-800">Ксения и Екатерина</span>,
                                основательницы ивент-агентства <span className="font-bold text-stone-800">«ТВОЁ СОБЫТИЕ»</span>.
                            </p>
                            <p className="text-stone-700 text-base md:text-lg leading-relaxed font-medium mt-4">
                                Мы создали это агентство, потому что верим: идеальный праздник рождается на стыке
                                безупречного сити-менеджмента, дипломной режиссуры и искренней любви к людям.
                            </p>
                            <p className="text-stone-700 text-base md:text-lg leading-relaxed font-medium mt-4">
                                Мы молоды, амбициозны, полны творческой энергии, и с нами действительно круто работать.
                            </p>
                            <p className="text-stone-700 text-base md:text-lg leading-relaxed font-medium mt-4">
                                Наш главный приоритет — <span className="font-bold text-stone-800">организация мероприятий «под ключ»</span>.
                                Это значит, что с момента первой встречи и до финального салюта вы отдыхаете,
                                пока мы управляем каждой деталью вашего торжества.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ===== БЛОК 2: География и мобильность ===== */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md">
                        <p className="text-stone-700 text-base md:text-lg leading-relaxed font-medium">
                            Мы не признаем рамок, шаблонов и ограничений. Наша география — вся Россия.
                            За нашими плечами десятки успешных проектов в Екатеринбурге, Москве,
                            Санкт-Петербурге, Тюмени, Кургане и Краснодаре. Мы мобильны, легки на подъем
                            и готовы реализовать проект вашей мечты в любой точке страны.
                        </p>
                    </div>
                </div>

                {/* ===== БЛОК 3: Фото с хлопушкой ===== */}
                <div className="flex flex-col lg:flex-row-reverse gap-12 items-center mb-16">
                    <div className="lg:w-1/2">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-stone-200">
                            <img
                                src="/images/team-clapper.jpg"
                                alt="Ксения и Екатерина с хлопушкой"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md">
                            <p className="text-stone-700 text-base md:text-lg leading-relaxed font-medium">
                                Наш профессионализм подкреплен серьезной академической базой.
                                Катя окончила Санкт-Петербургский государственный институт культуры (СПбГИК),
                                а Ксюша — Ленинградский областной колледж культуры и искусства (ЛОККИИ)
                                и Московский государственный институт культуры (МГИК).
                            </p>
                            <p className="text-stone-700 text-base md:text-lg leading-relaxed font-medium mt-4">
                                Мы знаем ивент-индустрию изнутри: от законов драматургии до технических нюансов звука и света.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ===== БЛОК 4: Цитата Ксении ===== */}
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                    <div className="lg:w-1/3">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-stone-200">
                            <img
                                src="/images/ksenia-quote.jpg"
                                alt="Ксения"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="lg:w-2/3">
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-amber-400">
                            <p className="text-stone-700 text-base md:text-lg leading-relaxed font-medium italic">
                                «Для нас не существует слов "невозможно" или "слишком сложно".
                                Профильное режиссерское образование научило нас главному: любое событие —
                                это живой организм, где важен каждый винтик. Мы убрали из лексикона ограничения,
                                чтобы создавать праздники, которые удивляют даже искушенных».
                            </p>
                            <p className="text-amber-600 text-sm tracking-[0.2em] uppercase font-bold mt-4">
                                — Ксения
                            </p>
                        </div>
                    </div>
                </div>

                {/* ===== БЛОК 5: Цитата Екатерины ===== */}
                <div className="flex flex-col lg:flex-row-reverse gap-12 items-center mb-16">
                    <div className="lg:w-1/3">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-stone-200">
                            <img
                                src="/images/ekaterina-quote.jpg"
                                alt="Екатерина"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="lg:w-2/3">
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-amber-400">
                            <p className="text-stone-700 text-base md:text-lg leading-relaxed font-medium italic">
                                «События "под ключ" — это наша страсть и зона личной ответственности.
                                Мы честны со своими клиентами на все 100%, умеем слушать и мгновенно адаптироваться
                                к любым изменениям. С нами не просто комфортно — с нами драйвово, легко и надежно
                                от первой идеи до финального бенгальского огня».
                            </p>
                            <p className="text-amber-600 text-sm tracking-[0.2em] uppercase font-bold mt-4">
                                — Екатерина
                            </p>
                        </div>
                    </div>
                </div>

                {/* ===== БЛОК 6: Почему нам доверяют? ===== */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="font-serif text-2xl md:text-3xl text-stone-800 font-bold tracking-wide">
                            Почему нам доверяют?
                        </h2>
                        <div className="w-16 h-[1px] bg-amber-400/50 mx-auto mt-4 mb-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Образование */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md group hover:shadow-lg transition-all duration-300">
                            <div className="flex justify-center mb-4">
                                <svg className="w-12 h-12 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22v-5" />
                                </svg>
                            </div>
                            <h3 className="font-serif text-xl font-bold text-stone-800 mb-2">Высшее профильное образование</h3>
                            <p className="text-stone-600 text-sm">СПбГИК, ЛОККИИ, МГИК — академическая база высшего уровня</p>
                        </div>

                        {/* Честность */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md group hover:shadow-lg transition-all duration-300">
                            <div className="flex justify-center mb-4">
                                <svg className="w-12 h-12 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="font-serif text-xl font-bold text-stone-800 mb-2">Абсолютная честность</h3>
                            <p className="text-stone-600 text-sm">Прозрачные сметы, открытые договоры, без скрытых комиссий</p>
                        </div>

                        {/* Поддержка */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md group hover:shadow-lg transition-all duration-300">
                            <div className="flex justify-center mb-4">
                                <svg className="w-12 h-12 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="font-serif text-xl font-bold text-stone-800 mb-2">Всеобъемлющая поддержка</h3>
                            <p className="text-stone-600 text-sm">От концепта до координации подрядчиков в день мероприятия</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}