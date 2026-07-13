import { useState, useEffect } from 'react';
import RequestForm from './RequestForm';

export default function FloatingBotButton() {
    const [isVisible, setIsVisible] = useState(true);
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 300) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollY = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const openForm = () => {
        setIsFormOpen(true);
    };

    return (
        <>
            <button
                onClick={openForm}
                className={`fixed bottom-24 right-4 z-50 transition-all duration-300 hover:scale-110 active:scale-95 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
                aria-label="Открыть анкету"
            >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg border-2 border-white/20 bg-stone-800 flex items-center justify-center text-white text-2xl">
                    📝
                </div>
            </button>

            {/* Модальное окно с анкетой */}
            <RequestForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </>
    );
}