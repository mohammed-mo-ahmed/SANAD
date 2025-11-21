import { ArrowLeft } from 'lucide-react';

interface ComicPageProps {
  language: 'ar' | 'en';
  onBack: () => void;
}

function ComicPage({ language, onBack }: ComicPageProps) {
  const comicImages = language === 'ar'
    ? [
        'https://images.pexels.com/photos/7974387/pexels-photo-7974387.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/8853447/pexels-photo-8853447.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/7135056/pexels-photo-7135056.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ]
    : [
        'https://images.pexels.com/photos/7135037/pexels-photo-7135037.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/6303761/pexels-photo-6303761.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/8988363/pexels-photo-8988363.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{language === 'ar' ? 'العودة' : 'Back'}</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {language === 'ar' ? 'قصة حزام ساند الذكي' : 'SANAD Smart Belt Story'}
        </h2>

        <div className="space-y-4">
          {comicImages.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={image}
                alt={`Comic panel ${index + 1}`}
                className="w-full h-auto"
                loading={index > 0 ? 'lazy' : 'eager'}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center pb-8">
          <button
            onClick={onBack}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
          >
            {language === 'ar' ? 'العودة إلى الصفحة الرئيسية' : 'Back to Home'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComicPage;
