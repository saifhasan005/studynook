import React from 'react';
import { FaBookOpen, FaWifi, FaCoffee, FaClock } from 'react-icons/fa'; // npm i react-icons দিয়ে ইন্সটল করে নিয়েন ভাই

const OurServices = () => {
    const services = [
        {
            id: 1,
            icon: <FaBookOpen className="text-4xl text-purple-600 mb-4" />,
            title: "Silent Study Zones",
            desc: "Perfect noise-free environments designed for deep focus and heavy learning sessions."
        },
        {
            id: 2,
            icon: <FaWifi className="text-4xl text-purple-600 mb-4" />,
            title: "High-Speed Internet",
            desc: "Blazing fast Wi-Fi connection to ensure uninterrupted research and seamless coding."
        },
        {
            id: 3,
            icon: <FaCoffee className="text-4xl text-purple-600 mb-4" />,
            title: "Complimentary Coffee",
            desc: "Free premium coffee and snacks available to keep your brain active all day long."
        },
        {
            id: 4,
            icon: <FaClock className="text-4xl text-purple-600 mb-4" />,
            title: "24/7 Access",
            desc: "Book your preferred slot anytime, whether you are an early bird or a night owl."
        }
    ];

    return (
        <div className="container mx-auto my-[80px] px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400">Our Premium Services</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Everything you need to boost your productivity</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map(service => (
                    <div key={service.id} className="p-6 border rounded-2xl shadow-sm bg-white dark:bg-zinc-900 dark:border-zinc-800 hover:scale-105 transition-transform duration-300">
                        {service.icon}
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;