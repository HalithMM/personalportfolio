import { useEffect, useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import EmailIcon from '@mui/icons-material/Email';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const Footer = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        imageRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id='contact' className="w-full min-h-[70vh] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 md:p-12 gap-8 md:gap-12">
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60 blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-60 blur-xl"></div>
      
      {/* Left content with animations */}
      <div className="relative z-20 flex-1 text-center md:text-left flex flex-col justify-center gap-6 max-w-2xl">
        <div 
          className="opacity-0 transform translate-y-8 animate-fade-in-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h1>
        </div>
        
        <div 
          className="opacity-0 transform translate-y-8 animate-fade-in-up"
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            Hey there! I'm passionate about creating innovative solutions and collaborating on exciting projects. 
            Let's connect and bring amazing ideas to life together. 🌟
          </p>
        </div>

        <div 
          className="opacity-0 transform translate-y-8 animate-fade-in-up"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          <div className="flex justify-center md:justify-start gap-6 mt-4">
            <a 
              href="https://github.com/HalithMM/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <GitHubIcon 
                className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300 text-3xl" 
              />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohamed-halith-m-771904260" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <LinkedInIcon 
                className="text-gray-600 group-hover:text-blue-700 transition-colors duration-300 text-3xl" 
              />
            </a>
            <a 
              href="mailto:mohamedhalith881@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <EmailIcon 
                className="text-gray-600 group-hover:text-pink-500 transition-colors duration-300 text-3xl" 
              />
            </a>
            <a 
              href="https://wa.me/918525023957"
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <PermPhoneMsgIcon
                className="text-gray-600 group-hover:text-pink-500 transition-colors duration-300 text-3xl" 
              />
            </a>
            <a 
              href="/Mohamed Halith m.pdf" 
              download  
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <FileCopyIcon
                className="text-gray-600 group-hover:text-pink-500 transition-colors duration-300 text-3xl" 
              />
            </a>
          </div>
        </div>

        {/* Additional contact info */}
        <div 
          className="opacity-0 transform translate-y-8 animate-fade-in-up mt-8"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
        >
          <p className="text-gray-500 text-sm md:text-base">
            Ready to start a conversation?<br />
            Let's make something extraordinary! 🚀
          </p>
        </div>
      </div>

      {/* Right image with floating animation */}
      <div className="flex-1 w-full md:w-auto relative flex justify-center items-center min-h-[400px] md:min-h-[500px]">
        <div 
          ref={imageRef}
          className="relative w-full max-w-md md:max-w-lg lg:max-w-xl animate-float"
          style={{ animationDuration: '6s' }}
        >
          <img
            src="/Connect.png"
            alt="Connect Illustration"
            className="w-full h-auto object-cover rounded-3xl shadow-2xl transform transition-transform duration-1000"
          />
          
          {/* Floating elements around the image */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse opacity-80"></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-400 rounded-full animate-pulse opacity-60" 
               style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 -right-8 w-6 h-6 bg-green-400 rounded-full animate-pulse opacity-70"
               style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Mobile overlay with better styling */}
        <div className="absolute inset-0 md:hidden w-full h-full flex items-center justify-center">
          <div 
            className="w-4/5 h-3/5 bg-cover bg-center rounded-3xl relative overflow-hidden"
            style={{ backgroundImage: "url('/Connect.png')" }}
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-3xl flex items-center justify-center">
              <span className="text-white text-lg font-semibold">Let's Connect! 👋</span>
            </div>
          </div>
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Footer;