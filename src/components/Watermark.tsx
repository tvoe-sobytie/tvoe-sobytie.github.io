export default function Watermark() {
    return (
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-0 pointer-events-none select-none">
            <img
                src="/images/watermark.png"
                alt="ТВОЁ СОБЫТИЕ"
                className="opacity-30 w-24 md:w-32 lg:w-40"
            />
        </div>
    );
}