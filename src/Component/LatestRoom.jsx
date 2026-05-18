import React from 'react';

const LatestRoom = async () => {
    const res = await fetch('http://localhost:5000/rooms');
    const data = await res.json();
  
    return (
        <div className='container mx-auto mt-[45px] px-4'>
            <h1 className='font-bold text-3xl text-purple-700 mb-4'>Latest Booking</h1>
            
            <div className="space-y-2">
                {
                    data.map(room => {
                        
                        return <h2 key={room._id} className="text-xl dark:text-white text-gray-800">{room.name}</h2>;
                    })
                }
            </div>
        </div>
    );
};

export default LatestRoom;