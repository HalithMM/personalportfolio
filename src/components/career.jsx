import React from "react";

const Career = () => {
  return (
    <div id="experience" className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div 
            className="opacity-0 transform translate-y-8 animate-fade-in-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            <h1 className="text-4xl py-5 md:text-5xl font-bold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent mb-4">
              Career Journey
            </h1>
          </div>
          <div 
            className="opacity-0 transform translate-y-8 animate-fade-in-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
              A timeline of my growth in technology and education
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-gray-600 to-gray-400 h-full hidden md:block"></div>
          
          {/* Mobile Timeline Line */}
          <div className="absolute left-6 w-1 bg-gradient-to-b from-gray-600 to-gray-400 h-full md:hidden"></div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16 relative">
            {/* Current Job 1 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-gray-300 rounded-full border-4 border-gray-900 shadow-lg animate-pulse"></div>
              </div>
              <div className="flex md:hidden absolute left-6 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-gray-300 rounded-full border-4 border-gray-900 shadow-lg animate-pulse"></div>
              </div>
              
              <div 
                className="w-full md:w-5/12 ml-0 md:ml-auto md:pr-12 opacity-0 transform translate-x-8 animate-slide-in-right"
                style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
              >
                <div className="bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-6 border-l-4 border-gray-300">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                    <span className="text-sm font-semibold text-gray-300">CURRENT ROLE</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Front-End Developer</h3>
                  <p className="text-lg text-gray-300 font-semibold mb-2">Dynamic Liquids Pvt. Ltd.</p>
                  <p className="text-gray-400 mb-3">Dec 2024 - Present</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">Nextjs</span>
                    <span className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">UI/UX</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Freelance */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-gray-400 rounded-full border-4 border-gray-900 shadow-lg"></div>
              </div>
              <div className="flex md:hidden absolute left-6 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-gray-400 rounded-full border-4 border-gray-900 shadow-lg"></div>
              </div>
              
              <div 
                className="w-full md:w-5/12 md:mr-auto md:pl-12 opacity-0 transform -translate-x-8 animate-slide-in-left"
                style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
              >
                <div className="bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-6 border-l-4 border-gray-400">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-sm font-semibold text-gray-400">FREELANCE</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Freelance Developer</h3>
                  <p className="text-gray-400 mb-3">Dec 2024 - Present</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">Web Development</span>  
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-gray-500 rounded-full border-4 border-gray-900 shadow-lg"></div>
              </div>
              <div className="flex md:hidden absolute left-6 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-gray-500 rounded-full border-4 border-gray-900 shadow-lg"></div>
              </div>
              
              <div 
                className="w-full md:w-5/12 ml-0 md:ml-auto md:pr-12 opacity-0 transform translate-x-8 animate-slide-in-right"
                style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
              >
                <div className="bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-6 border-l-4 border-gray-500">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
                    <span className="text-sm font-semibold text-gray-500">EDUCATION</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Computer Science and Engineering</h3>
                  <p className="text-lg text-gray-300 mb-2">Kongunadu College of Engineering and Technology</p>
                  <p className="text-gray-400 mb-3">2020 - 2024</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">BE</span>
                    <span className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">CSE</span>
                    <span className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">Graduated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements for decoration */}
          <div className="absolute top-10 -left-10 w-8 h-8 bg-gray-700 rounded-full opacity-60 animate-float"></div>
          <div className="absolute top-1/2 -right-10 w-12 h-12 bg-gray-600 rounded-full opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-20 w-6 h-6 bg-gray-500 rounded-full opacity-60 animate-float" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Career;