import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div
            className="opacity-0 transform translate-y-8 animate-fade-in-up"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-4">
              About Me
            </h1>
          </div>
          <div
            className="opacity-0 transform translate-y-8 animate-fade-in-up"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <p className="text-lg md:text-xl text-gray-600 font-light">
              Passionate Developer • Continuous Learner • Collaborative Team
              Player
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Introduction Card */}
          <div
            className="opacity-0 transform translate-y-8 animate-fade-in-up"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border-l-4 border-blue-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Full Stack Web Developer
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I specialize in crafting engaging and functional full-stack
                experiences for websites and web applications, ensuring they
                contribute to the overall success of the product. With expertise
                spanning both front-end and back-end technologies, I bring
                complete solutions to life.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Feel free to explore my{" "}
                <span className="text-blue-600 font-semibold">Projects</span>{" "}
                section to see some of the work I've done. I'm passionate about
                sharing the knowledge I've gained throughout my journey in web
                development and regularly post valuable content that aims to
                support and inspire others in the development community.
              </p>
            </div>
          </div>

          {/* Career Growth Section */}
          {/* <div 
            className="opacity-0 transform translate-y-8 animate-fade-in-up"
            style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3">🚀</span>
                Ready for New Challenges
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                I'm actively seeking new environments where I can <span className="font-bold">contribute, learn, and grow</span> both professionally and personally. 
                I believe that the right environment can accelerate growth, and I'm excited about opportunities that push boundaries and encourage innovation.
              </p>
              <p className="text-lg leading-relaxed">
                I'm particularly interested in roles that offer <span className="font-bold">collaboration with diverse teams</span>, exposure to new technologies, 
                and the chance to work on meaningful projects that make a difference.
              </p>
            </div>
          </div> */}

          {/* Learning & Collaboration Section */}
          {/* <div 
            className="opacity-0 transform translate-y-8 animate-fade-in-up"
            style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border-l-4 border-green-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="mr-3">🌟</span>
                Growth Mindset & Collaboration
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I thrive in environments where I can <span className="text-green-600 font-semibold">learn from experienced professionals</span> and 
                <span className="text-green-600 font-semibold"> collaborate with passionate individuals</span>. Every day is an opportunity to enhance my skills, 
                adopt new perspectives, and contribute to team success.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether it's through <span className="font-semibold">mentorship, team projects, or knowledge sharing</span>, I'm committed to continuous improvement 
                and believe that the best results come from working together towards common goals.
              </p>
            </div>
          </div> */}

          {/* Call to Action */}
          <div
            className="opacity-0 transform translate-y-8 animate-fade-in-up"
            style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}
          >
            <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Let's Connect & Create!
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                If you have an exciting opportunity that aligns with my skills
                and experience, or if you're looking for a dedicated developer
                who's eager to learn and grow with your team, I'd love to hear
                from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="border-2 border-gray-300 hover:border-white text-gray-300 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Connect
                </Link>
                <Link
                  to="projectss"
                  smooth={true}
                  duration={500}
                  className="border-2 border-gray-300 hover:border-white text-gray-300 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  View my work
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Key Focus Areas */}
        <div
          className="opacity-0 transform translate-y-8 animate-fade-in-up mt-12"
          style={{ animationDelay: "1.3s", animationFillMode: "forwards" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="font-bold text-gray-800 mb-2">Career Growth</h3>
              <p className="text-gray-600">
                Seeking challenging roles that foster professional development
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold text-gray-800 mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Eager to work with diverse teams and learn from others
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-bold text-gray-800 mb-2">Daily Learning</h3>
              <p className="text-gray-600">
                Committed to continuous skill enhancement and knowledge sharing
              </p>
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

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default About;
