'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@heroui/react';
import Link from 'next/link';

const RoomCard = ({ room, index }) => {
    const imageSrc = room.image || room.imageUrl || room?.image_url;
    const ref = useRef(null);
const {_id} = room
    const amenities = Array.isArray(room?.amenities) ? room.amenities : [];
    const visibleAmenities = amenities.slice(0, 3);
    const remainingCount = amenities.length - 3;


    const getAmenityIcon = (amenity) => {
        const iconMap = {
            'Whiteboard': '📝',
            'whiteboard': '📝',
            'Projector': '📽️',
            'projector': '📽️',
            'Wi-Fi': '📶',
            'WiFi': '📶',
            'wifi': '📶',
            'Power Outlets': '🔌',
            'Power Outlet': '🔌',
            'power': '🔌',
            'Quiet Zone': '🤫',
            'quiet': '🤫',
            'Air Conditioning': '❄️',
            'AC': '❄️',
            'ac': '❄️'
        };
        return iconMap[amenity] || '✓';
    };

    const isInView = useInView(ref, {
        once: true,
        margin: "-100px",
        threshold: 0.2
    });

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 100,
                duration: 0.6,
                delay: index * 0.1
            }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover="hover"
            whileTap="tap"
            className="border rounded-xl shadow-sm bg-white dark:bg-zinc-900 overflow-hidden flex flex-col h-full cursor-pointer"
        >
            <motion.div
                className="relative w-full h-[240px] bg-gray-100 shrink-0 overflow-hidden"
                variants={imageVariants}
            >
                <Image
                    src={imageSrc && imageSrc.startsWith('http') ? imageSrc : "https://picsum.photos/id/20/500/300"}
                    alt={room?.roomName || room?.name || 'roomImage'}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='object-cover'
                    priority={index < 4}
                />
            </motion.div>

            <div className="p-5 flex flex-col gap-2">
                <motion.h2
                    className="text-xl font-bold dark:text-white text-gray-800"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.2 }}
                >
                    {room?.roomName || "Unnamed Room"}
                </motion.h2>

                <motion.p
                    className="font-semibold text-gray-600 dark:text-gray-300 text-sm line-clamp-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                >
                    {room?.description || "No description"}
                </motion.p>


                {amenities.length > 0 && (
                    <motion.div
                        className="flex flex-wrap gap-2 mt-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.1 + 0.35 }}
                    >
                        {visibleAmenities.map((amenity, idx) => (
                            <span
                                key={idx}
                                className="inline-flex items-center gap-1 text-xs bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full"
                            >
                                <span>{getAmenityIcon(amenity)}</span>
                                <span>{amenity}</span>
                            </span>
                        ))}

                        {remainingCount > 0 && (
                            <span
                                className="inline-flex items-center text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full cursor-help"
                                title={`${amenities.slice(3).join(', ')}`}
                            >
                                +{remainingCount} more
                            </span>
                        )}
                    </motion.div>
                )}

                <motion.div
                    className='flex gap-4 mt-2 flex-wrap'
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.4 }}
                >
                    <motion.p
                        className="text-sm dark:bg-gray-800  dark:text-gray-300 px-3 py-1 rounded-full"
                        whileHover={{ scale: 1.05, backgroundColor: "purple", color: 'white'  }}
                    >
                        📍 Floor: {room?.floor || "N/A"}
                    </motion.p>
                    <motion.p
                        className="text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                        whileHover={{ scale: 1.05, backgroundColor: "purple", color: 'white'   }}
                    >
                        🪑 Capacity: {room?.capacity || 0} {room?.capacity === 1 ? 'seat' : 'seats'}
                    </motion.p>
                </motion.div>

                {room?.hourlyRate && (
                    <motion.p
                        className="text-lg font-bold text-purple-600 mt-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                    >
                        ${room.hourlyRate}/hour
                    </motion.p>
                )}

               <Link href={`/rooms/${_id}`}>
                <Button variant='outline' className={`rounded-md bg-purple-600 text-white`}>View Details</Button>
               </Link>

            </div>
        </motion.div>
    );
};

export default RoomCard;