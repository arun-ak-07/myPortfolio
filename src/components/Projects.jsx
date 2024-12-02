import React from 'react';
import jerseyStore from '../assets/jerseyStore.png';
import animeStore from '../assets/animeStore.png';
import deepNetSoft from '../assets/deepNetSoft.png';

const projectsData = [
    {
        id: 1,
        title: 'Anime T-Shirt Store',
        description: 'An e-commerce platform for anime-themed t-shirts with user and admin features.',
        image: animeStore, 
        link: 'https://zoro-frontend.vercel.app/', 
        github: 'https://github.com/arun-ak-07/ZORO-frontend',
    },
    {
        id: 2,
        title: 'Sports Jersey Store',
        description: 'A web app for sports jerseys with robust user and admin functionalities.',
        image: jerseyStore,
        link: 'https://jersey-front-end.vercel.app/', 
        github: 'https://github.com/arun-ak-07/Jersey-Front-End',
    },
    {
        id: 3,
        title: 'Deep Net Soft UI',
        description: 'A unique UI project featuring dynamic sports data visualization.',
        image: deepNetSoft,
        link: 'https://deep-net-soft-front-end.vercel.app/', 
        github: 'https://github.com/arun-ak-07/deepNetSoft-frontEnd',
    },
];

const Projects = () => {
    return (
        <section className="py-10 bg-gray-900 text-gray-900 min-h-screen flex justify-center items-center flex-col" id="projects">
            <h2 className="text-3xl font-bold text-center text-white mb-6">My Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 sm:grid-cols-1 max-w-5xl mx-auto">
                {projectsData.map((project) => (
                    <div 
                        key={project.id} 
                        className="bg-gray-800 rounded-lg shadow-md overflow-hidden sm:mx-0 mx-4 transform transition-transform duration-300 hover:scale-105"
                    >
                        <div className="h-64 w-full p-2">
                            <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                            <p className="text-white mt-2 whitespace-pre-line">{project.description}</p>
                            <div className="mt-4 flex space-x-4 flex-wrap justify-center">
                                <a
                                    href={project.link}
                                    aria-label={`Visit live site for ${project.title}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600 mb-2 sm:mb-0"
                                >
                                    Live Site
                                </a>
                                <a
                                    href={project.github}
                                    aria-label={`View GitHub repository for ${project.title}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-green-500 text-white font-medium rounded-md shadow-md hover:bg-green-600 mb-2 sm:mb-0"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
