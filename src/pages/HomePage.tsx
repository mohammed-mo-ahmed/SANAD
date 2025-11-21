import { Globe } from 'lucide-react';

interface HomePageProps {
  onLanguageSelect: (language: 'ar' | 'en') => void;
}

function HomePage({ onLanguageSelect }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 flex items-center justify-center p-6">
      <div className="text-center">
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
            
          </div>
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
