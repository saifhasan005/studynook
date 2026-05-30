import BookingDeleteAlert from '@/Component/BookingDeleteAlert';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;
    const { id } = user;
    const res = await fetch(`http://localhost:5000/booking/${id}`);
    const data = await res.json();
    return (
        <div className="container mx-auto mt-[45px] px-4">
            <p className="font-bold text-3xl text-center text-purple-500 mb-8 tracking-tight">
                My Bookings
            </p>

            {data.length < 0 ?
                <p className='text-center mt-[45px]'>No Booking Data Found</p> :
                <div className="flex flex-col gap-5 max-w-3xl mx-auto">
                    {data.map(booking => (
                        <div
                            key={booking._id}
                            className="flex gap-0 rounded-2xl overflow-hidden border border-purple-900/30 bg-[#1a1a24] hover:border-purple-700/30 transition-colors"
                        >

                            <div className="w-40 min-w-40 relative flex-shrink-0">
                                <Image
                                    src={booking.roomImage}
                                    width={400}
                                    height={400}
                                    alt={booking.roomName}

                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1 flex flex-col gap-2 p-5">
                                <p className="font-bold text-lg text-purple-100 tracking-tight">
                                    {booking.roomName}
                                </p>

                                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 bg-purple-900/20 border border-purple-700/30 rounded-md px-2.5 py-1 w-fit">
                                    🕐 {booking.startTime} – {booking.endTime}
                                </span>
                               


                                <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl font-bold font-mono ">
                                            ${booking.totalCost}
                                        </span>

                                        <p className={`font-semibold ${booking.status === 'canceled' ? 'text-red-400' : 'text-green-400'}`}>
                                            {booking.status === 'canceled' ? 'Canceled' : 'Confirmed'}
                                        </p>
                                    </div>


                                    {booking.status !== 'canceled' && (
                                        <BookingDeleteAlert data={booking._id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default MyBookingPage;