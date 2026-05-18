import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
    return (
        <div className='relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800'>
            
            <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
                <div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob'></div>
                <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000'></div>
            </div>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative'>
                <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16'>
                    
                    {/* Text Content */}
                    <div className='w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left'>
                        {/* Badge */}
                        <div className='flex justify-center lg:justify-start'>
                            <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300'>
                                🚀 Start Learning Today
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Find Your Perfect
                            </span>
                            <br className='hidden sm:block' />
                            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                                Study Room
                            </span>
                        </h1>
                        
                        <p className='text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed'>
                            Browse and book quiet, private study rooms in your library. 
                            List your own room and earn money.
                        </p>

                        {/* Stats */}
                        <div className='flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-2'>
                            <div className='text-center'>
                                <div className='text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white'>500+</div>
                                <div className='text-sm text-gray-500 dark:text-gray-400'>Study Rooms</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white'>10k+</div>
                                <div className='text-sm text-gray-500 dark:text-gray-400'>Students</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white'>4.9</div>
                                <div className='text-sm text-gray-500 dark:text-gray-400'>Rating</div>
                            </div>
                        </div>
                        
                        {/* Buttons */}
                        <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-2'>
                            <Link href={'/rooms'}>
                                <Button 
                                    className='w-full sm:w-auto rounded-xl bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg hover:shadow-xl hover:scale-105 transition-all duration-300'
                                >
                                    🏠 Explore Rooms
                                </Button>
                            </Link>
                           
                        </div>
                    </div>

                    {/* Image */}
                    <div className='w-full lg:w-1/2 flex justify-center'>
                        <div className='relative group'>
                            <div className='absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300'></div>
                            <Image
                                className='relative rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-[400px] sm:max-w-[500px] lg:max-w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-300'
                                src={'/hero.png'}
                                alt='Study Room Hero Image'
                                width={800}
                                height={800}
                                priority
                            />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;