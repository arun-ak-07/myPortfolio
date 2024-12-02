import React from 'react';
import arun from '../assets/arun.jpg';

const About = () => {
    return (
        <section
            id="about"
            className="w-full h-auto md:h-screen bg-gray-900 text-gray-200 flex justify-center items-center py-16 md:py-0"
        >
            <div className="container mx-auto max-w-screen-lg flex flex-col md:flex-row items-center space-y-8 md:space-y-0 px-6">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-extrabold text-gray-100 mb-4">Who Am I?</h2>
                    <p className="text-lg mb-4">
                        Hi, I’m Arun A K, a Full Stack Developer with expertise in React.js, Node.js, Express.js, and
                        database management using PostgreSQL and MongoDB. I specialize in both frontend and backend
                        development, enabling me to build efficient and complete applications.
                    </p>
                    <p className="text-lg mb-6">
                        My strong problem-solving abilities help me tackle challenges effectively, and I’m always eager to learn new technologies and improve my skills. Being fluent in Malayalam, English, Hindi, and Tamil allows me to communicate effectively with diverse teams and clients. My goal is to create high-quality web applications that provide great user experiences.
                    </p>
                    <a
                        href="Arun_New.pdf"
                        download
                        aria-label="Download Arun's CV"
                        className="inline-block bg-gray-700 text-gray-200 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-600 transition-colors hover:scale-105 transition-transform duration-300"
                    >
                        Download CV
                    </a>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center">
                    <div className="w-64 h-64 md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                        <img src={arun} alt="Arun A K" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
