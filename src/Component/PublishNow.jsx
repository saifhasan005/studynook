'use client';
import { authClient } from '@/lib/auth-client';
import React from 'react';
import BookingModal from './BookingModal';

const PublishNow = ({ singleRoom }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handlePublish = async (bookingData) => {
        const publishData = {
            ...bookingData,
            userId: user?.id,
            userEmail: user?.email,
            userName: user?.name,
            bookedAt: new Date().toISOString()
        };

        const res = await fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(publishData)
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message);
        }

        return data;
    };

    return (
        <div>
            <BookingModal singleRoom={singleRoom} onPublish={handlePublish} />
        </div>
    );
};

export default PublishNow;