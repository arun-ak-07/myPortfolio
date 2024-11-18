import React from 'react';

const Introduction = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-200 px-4 sm:px-8"
        >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
                HI! I am Arun AK
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-400">
                FULL STACK DEVELOPER
            </h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 text-center">
                Passionate about building scalable web applications and constantly improving skills in
                both front-end and back-end technologies.
            </p>
        </section>
    );
};

export default Introduction;
