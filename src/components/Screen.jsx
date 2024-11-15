import React from 'react';

function Screen() {
    return (
        <div>
            <section className='relative flex items-center justify-center h-screen bg-black overflow-hidden'>
                
                {/* Background Image */}
                <img
                    src="https://www.familyvacationcritic.com/wp-content/uploads/sites/19/2020/03/Child-playing-with-puzzle-Twenty20-2048x1024.jpg"
                    alt=""
                    className="w-full h-auto max-h-screen object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 z-0 rounded-lg"></div>

                {/* Content */}
                <div className='absolute flex flex-col md:flex-row justify-between w-full z-10 text-slate-400 px-4 md:px-8'>
                    
                    {/* Left Column */}
                    <div className='w-full md:w-1/2 flex flex-col justify-center items-center gap-5 md:ml-8 text-center md:text-left'>
                        <p className='text-lg sm:text-xl md:text-2xl font-semibold font-mono'>Learn. Create. Improve. Repeat...</p>
                        <p className='text-lg sm:text-xl md:text-2xl font-semibold font-mono'>New User?...</p>

                        <button className="px-12 py-3 sm:px-16 md:px-20 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-all text-lg md:text-xl font-bold font-mono">
                            Get Started
                        </button>
                    </div>
                    
                    {/* Right Column */}
                    <div className='w-full md:w-1/2 mt-6 md:mt-0 md:mr-8 text-center md:text-right'>
                        <p className='text-2xl sm:text-3xl md:text-5xl font-semibold font-mono'>
                            A simple and powerful tool for creating custom quizzes. Whether for learning, training, or fun, you can quickly build quizzes with various question types and instant feedback options. Start crafting engaging quizzes to challenge and inspire your audience!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Screen;



// <div>
// <section className="relative flex items-center justify-center h-screen bg-black overflow-hidden">
//   {/* Video element */}
//   <video
//     ref={videoRef}
//     className="w-full h-auto max-h-screen object-cover rounded-lg shadow-lg"
//     muted
//     playsInline
//     loop
//     preload="auto"
//     src="https://cdn.pixabay.com/video/2016/01/31/2029-153703075_large.mp4"
//   >
//     Your browser does not support the video tag.
//   </video>

//   {/* Transparent overlay for darkening effect */}
//   <div className="absolute inset-0 bg-black bg-opacity-70 rounded-lg"></div>

//   {/* Overlay text */}
//   <div className="absolute text-center text-white z-10">
//     <p className="text-2xl md:text-7xl font-bold animate-fade-in font-[Roboto] select-none mb-4">
//       Welcome to BMW Showroom
//     </p>
//     <p className="text-xl md:text-5xl font-semibold animate-fade-in font-[Roboto] select-none animation-delay-1000">
//       Explore the Power and Luxury
//     </p>
//   </div>
// </section>
// </div>
