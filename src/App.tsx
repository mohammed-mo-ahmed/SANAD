import { useState } from 'react';
import HomePage from './pages/HomePage';
import ComicPage from './pages/ComicPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'comic'>('home');
  const [selectedLanguage, setSelectedLanguage] = useState<'ar' | 'en'>('en');

  const handleLanguageSelect = (language: 'ar' | 'en') => {
    setSelectedLanguage(language);
    setCurrentPage('comic');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  return (
    <>
      {currentPage === 'home' && (
        <HomePage onLanguageSelect={handleLanguageSelect} />
      )}
      {currentPage === 'comic' && (
        <ComicPage language={selectedLanguage} onBack={handleBackToHome} />
      )}
    </>
  );
}

export default App;
