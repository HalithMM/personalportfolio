import React from 'react'

const Skill = () => {
    const images = [
        "images/html.png",
        "images/cascading-style-sheets.png",
        "images/tailwind_icon_131947.png",
        "images/java-script-logo.png",
        "images/reacts.png",
        "images/nextjs_icon.png",
        "images/firebase_logo_icon_145278.png",
        "images/icons8-sql-50.png",
        "images/node.png",
    ];
    const tools = [
        "images/figma.png",
        "images/git.png"
    ]

  return (
    <div  className='w-full min-h-screen bg-gradient-to-br from-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8'>
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
                <div 
                    className="opacity-0 transform translate-y-8 animate-fade-in-up"
                    style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
                >
                    <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
                        Professional <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">SkillSet</span>
                    </h1>
                </div>
                <div 
                    className="opacity-0 transform translate-y-8 animate-fade-in-up"
                    style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
                >
                    <p className='text-lg md:text-xl text-gray-400 max-w-2xl mx-auto'>
                        Technologies and tools I use to bring ideas to life
                    </p>
                </div>
            </div>

            {/* Skills Grid */}
            <div 
                className="opacity-0 transform translate-y-8 animate-fade-in-up mb-20"
                style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-6 md:gap-8">
                    {images.map((img, i) => (
                        <div 
                            key={i} 
                            className="group relative flex flex-col items-center"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-800 rounded-2xl flex items-center justify-center p-4 shadow-2xl border border-gray-700 group-hover:border-gray-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-gray-750">
                                <img 
                                    src={img} 
                                    alt="" 
                                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:brightness-125 transition-all duration-500" 
                                />
                            </div>
                            {/* Hover effect glow */}
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 rounded-2xl blur-xl transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tools Section */}
            <div className="text-center">
                <div 
                    className="opacity-0 transform translate-y-8 animate-fade-in-up mb-12"
                    style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
                >
                    <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                        Development <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">Tools</span>
                    </h2>
                    <p className='text-lg text-gray-400 max-w-2xl mx-auto'>
                        Essential tools that power my development workflow
                    </p>
                </div>

                <div 
                    className="opacity-0 transform translate-y-8 animate-fade-in-up"
                    style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
                >
                    <div className="flex justify-center gap-12 md:gap-16">
                        {tools.map((tool, i) => (
                            <div 
                                key={i} 
                                className="group relative flex flex-col items-center"
                            >
                                <div className="w-24 h-24 md:w-28 md:h-28 bg-gray-800 rounded-2xl flex items-center justify-center p-5 shadow-2xl border border-gray-700 group-hover:border-gray-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-gray-750">
                                    <img 
                                        src={tool} 
                                        alt="" 
                                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:brightness-125 transition-all duration-500" 
                                    />
                                </div>
                                {/* Hover effect glow */}
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 rounded-2xl blur-xl transition-opacity duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-10 w-4 h-4 bg-gray-600 rounded-full opacity-60 animate-float"></div>
            <div className="absolute top-1/2 right-20 w-6 h-6 bg-gray-500 rounded-full opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-1/3 left-20 w-3 h-3 bg-gray-400 rounded-full opacity-60 animate-float" style={{animationDelay: '1s'}}></div>
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
                    transform: translateY(-10px);
                }
            }
            
            .animate-fade-in-up {
                animation: fade-in-up 0.8s ease-out;
            }
            
            .animate-float {
                animation: float 4s ease-in-out infinite;
            }
        `}</style>
    </div>
  )
}

export default Skill