import React from 'react';
import RoomCard from './RoomCard';

const LatestRoom = async () => {
    const res = await fetch('http://localhost:5000/rooms/featured', { cache: 'no-store' });
    const data = await res.json();

    return (
        <div className='container mx-auto mt-[45px] px-4'>
            <h1 
                className='font-bold text-3xl text-purple-700 mb-4'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                Latest Booking
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {
                    data?.map((room, index) => (
                        <RoomCard room={room} key={room._id} index={index} />
                    ))
                }
            </div>
        </div>
    );
};

export default LatestRoom;