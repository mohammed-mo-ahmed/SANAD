import { Globe } from 'lucide-react';

interface HomePageProps {
  onLanguageSelect: (language: 'ar' | 'en') => void;
}

function HomePage({ onLanguageSelect }: HomePageProps) {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url("/backgd.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for blur */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Main content box */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center bg-gray-800/30 p-5 rounded-2xl shadow-xl z-10 w-11/12 sm:w-1/3">
  <div className="mb-8">
    <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-2">SANAD Smart Belt</h1>
  </div>

  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    <button
      onClick={() => onLanguageSelect('en')}
      className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-white text-gray-800 text-lg sm:text-xl font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-200 hover:border-blue-500"
    >
      English
    </button>
    <button
      onClick={() => onLanguageSelect('ar')}
      className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-white text-gray-800 text-lg sm:text-xl font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-200 hover:border-blue-500"
    >
      العربية
    </button>
  </div>
</div>


    </div>
  );
}

export default HomePage;
