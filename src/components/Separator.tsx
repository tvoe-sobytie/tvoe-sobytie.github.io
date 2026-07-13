export default function Separator() {
  return (
    <div className="relative w-full h-24 md:h-32 pointer-events-none -my-12 md:-my-16 z-20">
      
      {/* Орнамент с альфа-каналом */}
      <div
        className="absolute inset-0 w-full h-full bg-repeat-x"
        style={{
          backgroundImage: "url('/images/separator-overlay.png')",
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat-x'
        }}
      ></div>
      
      {/* Плавное исчезновение по краям (опционально) */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#FDF7F0] via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#FDF7F0] via-transparent to-transparent"></div>
    </div>
  );
}