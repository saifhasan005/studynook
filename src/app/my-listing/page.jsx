import { auth } from "@/lib/auth";
import { Separator } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";

const MyListingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const res = await fetch(`http://localhost:5000/rooms/user/${session?.user?.id}`);
    const myRooms = await res.json();

    return (
        <div className="mt-[45px] container mx-auto">
            <p className="font-bold text-3xl text-center">My Listing</p>

            {myRooms.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-6xl mb-4">🏠</p>
                    <p className="text-2xl font-bold text-gray-500">No Listings Found!</p>
                    <p className="text-gray-400 mt-2">You have not added any room yet.</p>
                </div>
            ) : (
                myRooms.map(room => (
                    <div className="shadow border rounded-md p-5 mt-[35px]" key={room._id}>
                        <div className="flex items-center gap-5">
                            <Image
                                className="rounded-md"
                                src={room.imageUrl}
                                alt={room.roomName}
                                height={450}
                                width={450}
                            />
                            <div>
                                <h3 className="font-semibold text-2xl text-purple-400">{room.roomName}</h3>
                                <Separator />
                                <h3 className="text-lg">📍Floor: {room.floor}</h3>
                                <Separator />
                                <h3 className="text-lg">Hourly Price : ${room.hourlyRate}</h3>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default MyListingPage;