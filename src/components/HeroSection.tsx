import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Watermark from './Watermark';
import RequestForm from './RequestForm';

export default function HeroSection() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const goToAbout = () => {
        navigate('/about');
        setIsMenuOpen(false);
    };

    const openVKChat = () => {
        window.open('https://vk.com/tvoyesobytie', '_blank');
    };

    const openForm = () => {
        setIsFormOpen(true);
    };

    return (
        <div className="relative min-h-screen overflow-hidden">

            <div
                className="absolute inset-0 w-full h-full bg-[length:100%_auto] bg-top bg-no-repeat md:bg-cover md:bg-center"
                style={{ backgroundImage: "url('/images/site-bg.jpg')" }}
            ></div>

            <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>

            <Watermark />
            <RequestForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

            <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
                <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
                    <div className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.15em] font-bold cursor-pointer text-stone-900" onClick={() => scrollToSection('hero')}>
                        ТВОЁ СОБЫТИЕ
                    </div>

                    <div className="hidden md:flex items-center space-x-6 text-sm md:text-base tracking-[0.2em] text-stone-700 uppercase font-bold">
                        <button onClick={goToAbout} className="hover:text-amber-600">О НАС</button>
                        <span className="text-stone-400">|</span>
                        <button onClick={() => scrollToSection('services')} className="hover:text-amber-600">УСЛУГИ</button>
                        <span className="text-stone-400">|</span>
                        <button onClick={() => scrollToSection('events')} className="hover:text-amber-600">СОБЫТИЯ</button>
                        <span className="text-stone-400">|</span>
                        <button onClick={() => scrollToSection('contacts')} className="hover:text-amber-600">КОНТАКТЫ</button>
                    </div>

                    <button className="md:hidden flex flex-col space-y-1.5" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className="w-6 h-[2px] bg-stone-800"></span>
                        <span className="w-6 h-[2px] bg-stone-800"></span>
                        <span className="w-6 h-[2px] bg-stone-800"></span>
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg py-6 px-6 flex flex-col items-center space-y-4 border-t border-amber-200 mt-3">
                        <button onClick={goToAbout} className="text-base tracking-[0.2em] text-amber-700 uppercase font-bold">О НАС</button>
                        <button onClick={() => scrollToSection('services')} className="text-base tracking-[0.2em] text-amber-700 uppercase font-bold">УСЛУГИ</button>
                        <button onClick={() => scrollToSection('events')} className="text-base tracking-[0.2em] text-amber-700 uppercase font-bold">СОБЫТИЯ</button>
                        <button onClick={() => scrollToSection('contacts')} className="text-base tracking-[0.2em] text-amber-700 uppercase font-bold">КОНТАКТЫ</button>
                    </div>
                )}
            </div>

            <div className="h-20"></div>

            <div id="hero" className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-6 md:py-8 flex flex-col min-h-screen">
                <div className="flex-1 flex flex-col justify-center items-start text-left -mt-16 md:-mt-20">
                    <div className="w-20 h-[2px] bg-stone-600 mb-8"></div>
                    <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wide leading-[1.2] max-w-5xl text-stone-900 drop-shadow-lg">
                        ОРГАНИЗАЦИЯ МЕРОПРИЯТИЙ
                        <br />
                        <span className="font-bold">ПОД КЛЮЧ</span>
                    </h1>
                    <p className="text-sm md:text-base tracking-[0.3em] text-stone-700 uppercase font-bold mt-8 md:mt-10 drop-shadow-sm">
                        ЧАСТНЫЕ И КОРПОРАТИВНЫЕ СОБЫТИЯ
                    </p>

                    {/* Две кнопки с инверсией при наведении */}
                    <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4">
                        {/* Кнопка 1: ОБСУДИТЬ ПРОЕКТ — чёрная → при наведении прозрачная */}
                        <button
                            onClick={openVKChat}
                            className="group px-10 py-4 md:px-12 md:py-5 bg-stone-900 text-white text-sm md:text-base tracking-[0.2em] uppercase font-bold rounded-full transition-all duration-300 shadow-xl hover:bg-transparent hover:text-stone-900 hover:border-2 hover:border-stone-900 hover:shadow-none"
                        >
                            <span className="relative z-10">ОБСУДИТЬ ПРОЕКТ</span>
                        </button>

                        {/* Кнопка 2: РАССЧИТАТЬ СТОИМОСТЬ */}
                        <button
                            onClick={openForm}
                            className="px-10 py-4 md:px-12 md:py-5 border-2 border-stone-800 text-stone-800 text-sm md:text-base tracking-[0.2em] uppercase font-bold rounded-full transition-all duration-300 hover:bg-stone-800 hover:text-white hover:border-stone-800"
                        >
                            РАССЧИТАТЬ СТОИМОСТЬ
                        </button>
                    </div>

                    <div className="w-40 h-[1px] bg-stone-500 mt-12"></div>
                </div>

                <div className="flex justify-center items-center text-xs md:text-sm tracking-[0.15em] drop-shadow-sm relative -top-8 pb-2">
                    <span className="text-stone-700" style={{ fontFamily: "'Great Vibes', 'Brush Script MT', cursive", fontWeight: '400' }}>
                        © 2026
                    </span>
                </div>
            </div>
        </div>
    );
}