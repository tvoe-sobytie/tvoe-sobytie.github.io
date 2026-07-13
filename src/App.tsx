import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Events from "./components/Events";
import Geography from "./components/Geography";
import Contacts from "./components/Contacts";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Separator from "./components/Separator";
import ScrollToTop from "./components/ScrollToTop";
import FloatingBotButton from "./components/FloatingBotButton";

function App() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <Separator />
            <Services />
            <Separator />
            <Events />
            <Separator />
            <Geography />
            <Separator />
            <Contacts />
            <Separator />
            <FAQ />
            <Footer />
            <ScrollToTop />
            <FloatingBotButton />
        </div>
    );
}

export default App;