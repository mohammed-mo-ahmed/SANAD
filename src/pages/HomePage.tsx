import { Globe } from 'lucide-react';

interface HomePageProps {
  onLanguageSelect: (language: 'ar' | 'en') => void;
}

function HomePage({ onLanguageSelect }: HomePageProps) {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        backgroundImage: `url("/backgd.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center bg-white/70 p-10 rounded-3xl shadow-xl">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-3">SANAD Smart Belt</h1>
          <p className="text-xl text-gray-600">Select Your Language</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => onLanguageSelect('en')}
            className="w-64 py-6 px-8 bg-white text-gray-800 text-2xl font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-200 hover:border-blue-500"
          >
            English
          </button>
          <button
            onClick={() => onLanguageSelect('ar')}
            className="w-64 py-6 px-8 bg-white text-gray-800 text-2xl font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-200 hover:border-blue-500"
          >
            العربية
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
