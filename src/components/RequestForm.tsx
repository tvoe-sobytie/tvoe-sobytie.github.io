import { useState } from 'react';

interface RequestFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzZSbpKXYrLSKzYjbARpcii_HCykCw3gcPDhWkbP9iQWt8asul6QOEAy2J6KBe8ILf9/exec';

export default function RequestForm({ isOpen, onClose }: RequestFormProps) {
    const [formData, setFormData] = useState({
        meetingDate: '',
        manager: 'Ксения',
        customerName: '',
        contacts: '',
        eventFormat: 'Свадьба',
        desiredDate: '',
        altDates: '',
        cityLocation: '',
        guestCount: '',
        vipCount: '',
        childrenCount: '',
        eventMeaning: '',
        mood: '',
        guestFeeling: '',
        taboo: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const formatMessage = (data: typeof formData) => {
        return `📋 НОВАЯ ЗАЯВКА НА МЕРОПРИЯТИЕ

📅 Дата встречи: ${data.meetingDate || 'не указана'}
👩‍💼 Менеджер: ${data.manager}
👤 Заказчик: ${data.customerName}
📞 Контакты: ${data.contacts}

━━━━━━━━━━━━━━━━━━━━━
1️⃣ ОСНОВНЫЕ ПАРАМЕТРЫ
━━━━━━━━━━━━━━━━━━━━━
🎉 Формат: ${data.eventFormat}
📆 Желаемая дата: ${data.desiredDate}
🔄 Альтернативные даты: ${data.altDates || 'не указаны'}
📍 Город и локация: ${data.cityLocation}
👥 Гостей: ${data.guestCount} (VIP: ${data.vipCount || '0'}, дети: ${data.childrenCount || '0'})

━━━━━━━━━━━━━━━━━━━━━
2️⃣ АТМОСФЕРА И ЭМОЦИИ
━━━━━━━━━━━━━━━━━━━━━
💭 Смысл события: ${data.eventMeaning || 'не указан'}
🎭 Настроение: ${data.mood || 'не указано'}
❤️ Что должны почувствовать гости: ${data.guestFeeling || 'не указано'}
🚫 Табу: ${data.taboo || 'не указано'}

📅 Заполнена: ${new Date().toLocaleString()}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(GOOGLE_SHEETS_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            alert('✅ Заявка отправлена! Менеджер свяжется с вами.');
            onClose();
        } catch (error) {
            console.error('Ошибка:', error);
            const message = formatMessage(formData);
            navigator.clipboard.writeText(message);
            alert('⚠️ Ошибка отправки. Сообщение скопировано, отправьте менеджеру вручную.');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-y-auto py-8">
            <div className="relative bg-[#FDF7F0] rounded-3xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl">

                {/* Заголовок — как в ServiceModal */}
                <div className="sticky top-0 bg-[#FDF7F0] border-b border-stone-200 px-6 py-4 flex justify-between items-center">
                    <h2 className="font-serif text-2xl text-stone-800 font-bold">Рассчитать стоимость мероприятия</h2>
                    <button onClick={onClose} className="text-stone-400 text-3xl hover:text-stone-600 transition">×</button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">

                    {/* Шапка анкеты */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-stone-200">
                        <div>
                            <label className="block text-xs font-bold text-stone-600 uppercase mb-1">Дата встречи</label>
                            <input type="text" name="meetingDate" placeholder="__ _________ 202_ г." value={formData.meetingDate} onChange={handleChange} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-stone-600 uppercase mb-1">Менеджер</label>
                            <select name="manager" value={formData.manager} onChange={handleChange} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none">
                                <option value="Ксения">Ксения</option>
                                <option value="Екатерина">Екатерина</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-stone-600 uppercase mb-1">Заказчик</label>
                            <input type="text" name="customerName" required value={formData.customerName} onChange={handleChange} placeholder="Имя или название компании" className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-stone-600 uppercase mb-1">Контакты</label>
                            <input type="text" name="contacts" required value={formData.contacts} onChange={handleChange} placeholder="Телефон, Telegram" className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none" />
                        </div>
                    </div>

                    {/* Блок 1 */}
                    <div className="bg-stone-50 rounded-xl p-4 space-y-4 border border-stone-100">
                        <h3 className="font-bold text-stone-800 text-lg flex items-center gap-2">
                            <span className="w-1 h-6 bg-amber-400 rounded-full"></span>
                            1. ОСНОВНЫЕ ПАРАМЕТРЫ
                        </h3>

                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-1">Формат события</label>
                            <select name="eventFormat" value={formData.eventFormat} onChange={handleChange} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none">
                                <option>Свадьба</option>
                                <option>Юбилей</option>
                                <option>Гала-вечер</option>
                                <option>Презентация</option>
                                <option>Сводный формат</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-1">Желаемая дата</label>
                            <input type="text" name="desiredDate" placeholder="__.__.202_" value={formData.desiredDate} onChange={handleChange} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-1">Альтернативные даты</label>
                            <input type="text" name="altDates" placeholder="Если есть" value={formData.altDates} onChange={handleChange} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-1">Город и локация</label>
                            <input type="text" name="cityLocation" placeholder="Москва, Loft Hall" value={formData.cityLocation} onChange={handleChange} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none" />
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-1">Всего гостей</label>
                                <input type="number" name="guestCount" placeholder="100" value={formData.guestCount} onChange={handleChange} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-1">VIP-персон</label>
                                <input type="number" name="vipCount" placeholder="0" value={formData.vipCount} onChange={handleChange} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-1">Детей</label>
                                <input type="number" name="childrenCount" placeholder="0" value={formData.childrenCount} onChange={handleChange} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none" />
                            </div>
                        </div>
                    </div>

                    {/* Блок 2 */}
                    <div className="bg-stone-50 rounded-xl p-4 space-y-4 border border-stone-100">
                        <h3 className="font-bold text-stone-800 text-lg flex items-center gap-2">
                            <span className="w-1 h-6 bg-amber-400 rounded-full"></span>
                            2. АТМОСФЕРА И ЭМОЦИИ
                        </h3>

                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-1">Смысл события в 3 словах</label>
                            <input type="text" name="eventMeaning" placeholder="Любовь, Счастье, Семья" value={formData.eventMeaning} onChange={handleChange} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-1">Какое настроение должно быть?</label>
                            <select name="mood" value={formData.mood} onChange={handleChange} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none">
                                <option value="">Выберите...</option>
                                <option>Драйв</option>
                                <option>Семейный уют</option>
                                <option>Светский пафос</option>
                                <option>Интеллигентный шик</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-1">Что гости должны почувствовать, уходя?</label>
                            <textarea name="guestFeeling" rows={2} placeholder="Счастье, восторг, благодарность..." value={formData.guestFeeling} onChange={handleChange} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-1">Категорические «ТАБУ»</label>
                            <textarea name="taboo" rows={2} placeholder="Чего точно не должно быть?" value={formData.taboo} onChange={handleChange} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"></textarea>
                        </div>
                    </div>

                    {/* Кнопка отправки */}
                    <div className="flex gap-4 pt-4">
                        <button type="submit" disabled={isLoading} className="flex-1 bg-stone-800 hover:bg-stone-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                            {isLoading ? 'Отправка...' : '📋 Рассчитать стоимость'}
                        </button>
                        <button type="button" onClick={onClose} className="px-6 py-3 border border-stone-300 rounded-full hover:bg-stone-100 transition duration-300">
                            Отмена
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}