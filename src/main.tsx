import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';
import AboutPage from './pages/AboutPage';
import WeddingsPage from './pages/WeddingsPage';
import AnniversariesPage from './pages/AnniversariesPage';
import AnniversariesGalaPage from './pages/AnniversariesGalaPage';
import CorporateGalaPage from './pages/CorporateGalaPage';
import PresentationsPage from './pages/PresentationsPage';
import ForumsPage from './pages/ForumsPage';
import MicePage from './pages/MicePage';
import GrandOpeningPage from './pages/GrandOpeningPage';
import FashionShowsPage from './pages/FashionShowsPage';
import CharityBallsPage from './pages/CharityBallsPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <ScrollToTopOnNavigate />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<AboutPage />} />
                {/* ������� ��������� */}
                <Route path="/weddings" element={<WeddingsPage />} />
                <Route path="/anniversaries" element={<AnniversariesPage />} />
                <Route path="/anniversaries-gala" element={<AnniversariesGalaPage />} />
                {/* ������������� � ������-������� */}
                <Route path="/corporate-gala" element={<CorporateGalaPage />} />
                <Route path="/presentations" element={<PresentationsPage />} />
                <Route path="/forums" element={<ForumsPage />} />
                <Route path="/mice" element={<MicePage />} />
                {/* ��������� � �������� ����������� */}
                <Route path="/grand-opening" element={<GrandOpeningPage />} />
                <Route path="/fashion-shows" element={<FashionShowsPage />} />
                <Route path="/charity-balls" element={<CharityBallsPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);