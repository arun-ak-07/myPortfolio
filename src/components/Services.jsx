import React from 'react';
import { FaCode, FaServer, FaLaptopCode } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            title: "Front-End Development",
            description: "Crafting responsive and visually appealing user interfaces that enhance user experience.",
            icon: <FaCode size={40} className="text-indigo-400" />
        },
        {
            title: "Back-End Development",
            description: "Building robust server-side applications to ensure seamless functionality.",
            icon: <FaServer size={40} className="text-green-400" />
        },
        {
            title: "Full Stack Development",
            description: "Integrating front-end and back-end technologies for complete solutions.",
            icon: <FaLaptopCode size={40} className="text-yellow-400" />
        }
    ];

    return (
        <section id="services" className="w-full py-16 h-screen bg-gray-900 text-gray-200 flex justify-center items-center">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-extrabold text-center text-gray-100 mb-8">What I Offer?</h2>
                <h3 className="text-xl font-bold text-center text-gray-300 mb-12">My Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center"
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h4 className="text-2xl font-bold text-gray-100 mb-4">{service.title}</h4>
                            <p className="text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
