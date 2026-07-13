import { useNavigate } from 'react-router-dom';
import Watermark from '../components/Watermark';
import ScrollToTop from '../components/ScrollToTop';
import FloatingBotButton from '../components/FloatingBotButton';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function PresentationsPage() {
    useDocumentMeta(
        'Презентации брендов, продуктов и недвижимости | Твоё событие',
        'Премиальные ланчи и открытия флагманских пространств, которые создают ажиотаж и запоминаются надолго.'
    );
    const navigate = useNavigate();

    const goToCorporateEvents = () => {
        navigate('/');
        setTimeout(() => {
            const eventsSection = document.getElementById('events');
            if (eventsSection) {
                eventsSection.scrollIntoView({ behavior: 'smooth' });
                const corporateTab = document.querySelector('#events .flex button:nth-child(2)') as HTMLButtonElement;
                if (corporateTab) {
                    corporateTab.click();
                }
            }
        }, 150);
    };

    const services = [
        'Интеграция продукта в концепцию: создание вау-эффекта вокруг презентуемого объекта (3D-мэппинг, лазерные шоу, кинетические инсталляции).',
        'Работа со СМИ и инфлюенсерами: организация пресс-зоны, координация работы фотографов и видеографов для мгновенной выдачи контента в сеть.',
        'Разработка уникального мерча и подарков: брендирование сувенирной продукции премиум-класса для первых лиц и партнеров.',
        'Технический надзор: контроль надежности конструкций, энергоснабжения, работы световых и звуковых инженеров.'
    ];

    return (
        <div className="relative min-h-screen overflow-hidden">

            <div
                className="absolute inset-0 w-full h-full bg-[length:100%_auto] bg-top bg-no-repeat md:bg-cover md:bg-center"
                style={{ backgroundImage: "url('/images/limon-bg.jpg')" }}
            ></div>

            <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>

            <Watermark />
            <ScrollToTop />
            <FloatingBotButton />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">

                <div className="mb-8">
                    <button
                        onClick={goToCorporateEvents}
                        className="group flex items-center gap-2 px-6 py-3 bg-stone-800 hover:bg-stone-700 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="text-sm tracking-[0.1em] uppercase font-semibold">Вернуться к корпоративным событиям</span>
                    </button>
                </div>

                <div className="text-center mb-12 md:mb-16">
                    <div className="w-12 h-[2px] bg-stone-600 mx-auto mb-6"></div>
                    <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 font-bold tracking-wide drop-shadow-md">
                        Презентации брендов, продуктов и недвижимости
                    </h1>
                    <p className="text-xs tracking-[0.2em] text-stone-700 uppercase font-semibold mt-3 drop-shadow-sm">
                        премиальные ланчи, открытия флагманских пространств
                    </p>
                </div>

                <div className="max-w-3xl mx-auto text-center mb-12">
                    <p className="text-stone-700 text-base md:text-lg leading-relaxed font-medium">
                        Презентации, которые создают ажиотаж и запоминаются надолго. Мы превращаем запуск
                        продукта или открытие пространства в событие, о котором говорят в профессиональном сообществе
                        и медиа.
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

                <div className="text-center mt-12">
                    <button
                        onClick={() => window.open('https://vk.com/tvoyesobytie', '_blank')}
                        className="px-8 py-3 bg-stone-800 text-white rounded-full text-sm tracking-[0.2em] uppercase font-bold hover:bg-stone-700 transition"
                    >
                        Организовать презентацию
                    </button>
                </div>

            </div>
        </div>
    );
}