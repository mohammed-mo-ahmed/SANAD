import { ArrowLeft } from 'lucide-react';

interface ComicPageProps {
  language: 'ar' | 'en';
  onBack: () => void;
}

function ComicPage({ language, onBack }: ComicPageProps) {
  const comicImages = language === 'ar'
    ? [
        '/Ar-Comices/a1.jpg',
        '/Ar-Comices/a2.jpg',
        '/Ar-Comices/a3.jpg',
      ]
    : [
        '/En-Comices/e1.jpg',
        '/En-Comices/e2.jpg',
        '/En-Comices/e3.jpg',
      ];

  return (
    <div className="min-h-screen bg-black overflow-y-auto">
      
      {/* Back Button – floating */}
      <button
        onClick={onBack}
        className="fixed top-4 left-4 z-20 bg-black/50 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-md hover:bg-black/70 transition-all flex items-center gap-2"
      >
        <ArrowLeft className="w-5 h-5" />
        {language === 'ar' ? 'رجوع' : 'Back'}
      </button>

      {/* Full-width Comic Images */}
      <div className="w-full">
        {comicImages.map((image, index) => (
          <img
            key={index}
            src={image}
            className="w-full h-auto"
            alt={`comic-page-${index}`}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>

    </div>
  );
}

export default ComicPage;
