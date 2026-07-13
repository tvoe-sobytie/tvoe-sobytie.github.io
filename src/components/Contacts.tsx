import { useState } from 'react';
import Watermark from './Watermark';

export default function Contacts() {
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (text: string, name: string) => {
        navigator.clipboard.writeText(text);
        setCopied(name);
        setTimeout(() => setCopied(null), 2000);
    };

    const contacts = [
        {
            name: 'Ксения',
            role: 'Режиссёр концепции',
            phone: '+7 (963) 455-86-91',
            telegram: 'https://t.me/vivocrea',
            vk: 'https://vk.com/ksyuitsmeok'
        },
        {
            name: 'Екатерина',
            role: 'Менеджер-организатор',
            phone: '+7 (911) 143-65-84',
            telegram: 'https://t.me/you_katya',
            vk: 'https://vk.com/e.yuklyaevskaya'
        }
    ];

    return (
        <section id="contacts" className="relative w-full py-16 md:py-24 overflow-hidden">

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
                        Контакты
                    </h2>
                    <p className="text-xs tracking-[0.2em] text-stone-700 uppercase font-semibold mt-3 drop-shadow-sm">
                        Свяжитесь с нами
                    </p>
                </div>

                {/* Сетка контактов */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto mb-12">
                    {contacts.map((contact, index) => (
                        <div
                            key={index}
                            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-white/50"
                        >
                            <div className="text-center">
                                <h3 className="font-serif text-2xl md:text-3xl text-stone-800 font-bold tracking-wide mb-1">
                                    {contact.name}
                                </h3>
                                <p className="text-xs tracking-[0.2em] text-amber-600 uppercase font-semibold mb-4">
                                    {contact.role}
                                </p>

                                {/* Телефон с копированием */}
                                <div className="mb-6">
                                    <button
                                        onClick={() => copyToClipboard(contact.phone, contact.name)}
                                        className="group flex items-center justify-center gap-2 mx-auto"
                                    >
                                        <span className="text-2xl md:text-3xl font-bold text-stone-800 tracking-wide">
                                            {contact.phone}
                                        </span>
                                        <svg className="w-5 h-5 text-stone-400 group-hover:text-stone-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </button>
                                    {copied === contact.name && (
                                        <p className="text-xs text-green-600 mt-1">Телефон скопирован!</p>
                                    )}
                                </div>

                                {/* Мессенджеры: Telegram + VK */}
                                <div className="flex justify-center gap-4">
                                    <a
                                        href={contact.telegram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-stone-800 hover:bg-stone-700 text-white rounded-full transition duration-300 text-sm"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.6-1.38-.97-2.23-1.56-.99-.69-.35-1.07.22-1.69.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.16-.04-.23-.02-.1.02-1.7 1.08-4.79 3.17-.45.31-.86.46-1.23.45-.4-.01-1.17-.23-1.75-.42-.7-.23-1.26-.35-1.21-.74.03-.2.3-.41.83-.63 3.26-1.42 5.44-2.36 6.54-2.82 3.11-1.3 3.76-1.53 4.18-1.53.09 0 .29.02.42.13.11.09.14.21.15.33.01.09.01.2-.03.33z" />
                                        </svg>
                                        Telegram
                                    </a>
                                    <a
                                        href={contact.vk}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-[#0077FF] hover:bg-[#0066DD] text-white rounded-full transition duration-300 text-sm"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M21.5 7.3c.2-.6 0-1-.7-1h-2.3c-.6 0-.9.3-1.1.6 0 0-1.3 3.1-3.1 5.1-.6.6-.9.8-1.2.8-.2 0-.4-.2-.4-.8V7.3c0-.6-.2-1-.7-1h-3.6c-.4 0-.6.3-.6.6 0 .6.9.8 1 2.5v3.8c0 .8-.1 1-.4 1-.9 0-3-3.2-4.2-6.9-.2-.7-.5-1-1.1-1H3.2c-.7 0-.9.3-.9.6 0 .6.9 3.8 4.1 8 2.2 3.1 5.2 4.8 8 4.8 1.7 0 1.9-.4 1.9-1.1v-2.6c0-.7.3-.9.7-.9.4 0 1.1.2 2.8 1.8.8.8 1.4 1.4 1.8 1.4.5 0 .7-.2 1.1-.6.3-.5.5-1 .9-1.7.1-.3.3-.7 0-1-.2-.3-.8-.7-1.5-1.2-.8-.5-1.3-1-1.5-1.3-.3-.3-.2-.6 0-1 0 0 2.2-3.1 2.4-4.2z" />
                                        </svg>
                                        ВКонтакте
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Общий текст */}
                <div className="text-center max-w-2xl mx-auto">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                        <p className="text-stone-700 text-sm md:text-base leading-relaxed font-semibold mb-4">
                            Напишите нам — обсудим ваш проект и предложим оптимальное решение под ваши задачи и бюджет.
                        </p>
                        <div className="w-24 h-[1px] bg-amber-400/50 mx-auto mt-6"></div>
                    </div>
                </div>

            </div>
        </section>
    );
}