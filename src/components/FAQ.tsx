import { useState } from 'react';
import Watermark from './Watermark';

interface FaqItem {
    question: string;
    answer: string;
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqItems: FaqItem[] = [
        {
            question: 'Сколько стоит организация мероприятия?',
            answer: 'Стоимость рассчитывается индивидуально в зависимости от формата, количества гостей и сложности. Заполните анкету «Рассчитать стоимость» — мы подготовим коммерческое предложение в течение 24 часов.'
        },
        {
            question: 'За сколько нужно начинать подготовку?',
            answer: 'Минимальный срок организации — от 2 недель. Для крупных мероприятий (свадьбы, корпоративы от 100+ гостей) рекомендуем начинать за 2-3 месяца.'
        },
        {
            question: 'Работаете ли вы в других городах?',
            answer: 'Да! Наша география — вся Россия. Мы готовы реализовать проект в любом городе: от Калининграда до Владивостока.'
        },
        {
            question: 'Какие форматы мероприятий вы организуете?',
            answer: 'Частные торжества (свадьбы, юбилеи, гала-ужины), корпоративные события (форумы, презентации, тимбилдинги), имиджевые мероприятия (Grand Opening, модные показы, благотворительные балы).'
        },
        {
            question: 'Есть ли у вас портфолио?',
            answer: 'Да, предоставим портфолио по запросу. Напишите менеджеру в Telegram или ВКонтакте.'
        },
        {
            question: 'Как происходит оплата?',
            answer: 'Работаем по договору. Предоплата 50%, остальное — после мероприятия. Все сметы прозрачны, скрытых комиссий нет.'
        },
        {
            question: 'Можно ли заказать только часть услуг?',
            answer: 'Да, мы берём в работу как полный цикл мероприятий, так и отдельные задачи: подбор площадки, разработка концепции, координация подрядчиков.'
        }
    ];

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="relative w-full py-16 md:py-24 overflow-hidden">

            {/* Фоновое изображение */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
            ></div>

            {/* Полупрозрачная подложка */}
            <div className="absolute inset-0 bg-white/20"></div>

            {/* Водяной знак */}
            <Watermark />

            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10">

                {/* Заголовок */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="w-12 h-[2px] bg-stone-600 mx-auto mb-6"></div>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 font-bold tracking-wide drop-shadow-md">
                        Часто задаваемые вопросы
                    </h2>
                    <p className="text-xs tracking-[0.2em] text-stone-700 uppercase font-semibold mt-3 drop-shadow-sm">
                        Ответы на главные вопросы
                    </p>
                </div>

                {/* Аккордеон FAQ */}
                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md border border-white/50"
                        >
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/30 transition"
                            >
                                <span className="font-serif text-lg md:text-xl text-stone-800 font-semibold">
                                    {item.question}
                                </span>
                                <svg
                                    className={`w-5 h-5 text-amber-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                            >
                                <div className="px-6 pb-4">
                                    <p className="text-stone-600 text-base leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Дополнительный призыв */}
                <div className="text-center mt-8">
                    <p className="text-stone-500 text-sm">
                        Не нашли ответ на свой вопрос? Напишите менеджеру — поможем!
                    </p>
                </div>

            </div>
        </section>
    );
}