import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaStar } from 'react-icons/fa';

const ClientReview = () => {
    const reviews = [
        {
            id: 1,
            name: "Jiniya Jeni",
            role: "Full Stack Developer",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
            comment: "StudyNook completely changed my study routine. The Silent Focus Pod is incredibly quiet and perfect for debugging complex projects!",
            rating: 5
        },
        {
            id: 2,
            name: "Ahsan Habib",
            role: "UI/UX Designer",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
            comment: "The booking flow is super smooth and the high-speed internet is top-notch. Highly recommended for students and freelancers.",
            rating: 5
        },
        {
            id: 3,
            name: "Nusrat Jahan",
            role: "CSE Student",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            comment: "Affordable price packs and brilliant hospitality. The 24/7 access option helps me during my exam nights.",
            rating: 4
        },
        {
            id: 4,
            name: "Anika Tahsin",
            role: "Content Writer",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            comment: "As a remote worker, I needed a cozy yet corporate vibe. StudyNook's complimentary coffee and lightning-fast Wi-Fi are absolute lifesavers!",
            rating: 5
        },

    ];

    return (
        <div className="container mx-auto my-[80px] px-4 overflow-hidden">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400">What Our Clients Say</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Real feedback from real members of our community</p>
            </div>


            <div className="w-full">
                <Marquee
                    speed={140}
                    pauseOnHover={true}
                    gap={30}
                    gradient={false}
                >
                    {reviews.map(review => (

                        <div
                            key={review.id}
                            className="w-[350px] md:w-[400px] h-[230px] p-6 border rounded-2xl bg-white dark:bg-zinc-900 dark:border-zinc-800 flex flex-col justify-between shadow-sm mx-2"
                        >
                            <div>
                                <div className="flex gap-1 mb-3 text-amber-500">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                                <p className="italic text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                                    {review.comment}
                                </p>
                            </div>

                           
                            <div className="flex items-center gap-4 pt-3 border-t dark:border-zinc-800 mt-auto">
                                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                                    <Image
                                        src={review.image}
                                        alt={review.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-bold text-gray-800 dark:text-white truncate text-sm">{review.name}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default ClientReview;