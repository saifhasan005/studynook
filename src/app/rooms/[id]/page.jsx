import DeleteAlert from "@/Component/DeleteAlert";
import { EditModal } from "@/Component/EditModal";
import PublishNow from "@/Component/PublishNow";

const RoomDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`${process.env.LATEST_ROOM_API}/rooms/${id}`);
    const singleRoom = await res.json()
    return (
        <div className="min-h-screen mt-[45px] bg-gray-50 dark:bg-zinc-950 pb-16">
            <div className="flex gap-4 container mx-auto items-center justify-center">
              <EditModal key={singleRoom._id} singleRoom={singleRoom}/>
              <DeleteAlert singleRoom={singleRoom}/>
            </div>
            <div className=" h-[320px] md:h-[460px] flex items-center justify-center overflow-hidden ">
                <img
                    src={singleRoom.imageUrl}
                    alt={singleRoom.roomName}
                    className="rounded-md h-full object-contain"
                />
                <div />
            </div>
            <p className="text-center mt-[20px] font-semibold text-xl text-purple-500">{singleRoom.roomName}</p>

            <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">


                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: "💰", label: "Hourly Rate", value: `$${singleRoom.hourlyRate}` },
                        { icon: "🪑", label: "Capacity", value: `${singleRoom.capacity} seats` },
                        { icon: "📍", label: "Floor", value: singleRoom.floor ?? "N/A" },
                        { icon: "📅", label: "Total Bookings", value: singleRoom.bookingCount || 0 },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-zinc-800 text-center">
                            <div className="text-2xl mb-1">{stat.icon}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                            <div className="text-lg font-bold text-gray-800 dark:text-white">{stat.value}</div>
                        </div>
                    ))}
                </div>
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-zinc-800">
                    <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-3">About this Room</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{singleRoom.description}</p>
                </div>

                {singleRoom.amenities?.length > 0 && (
                    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-zinc-800">
                        <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Amenities</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {singleRoom.amenities.map((amenity, i) => (
                                <div key={i} className="flex items-center gap-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl px-4 py-3">
                                    <span className="text-sm font-medium text-purple-800 dark:text-purple-300">{amenity}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-6 shadow-lg text-white flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <p className="text-purple-200 text-sm">Ready to reserve?</p>
                        <p className="text-2xl font-bold">${singleRoom.hourlyRate} <span className="text-base font-normal text-purple-200">/ hour</span></p>
                    </div>
                    <PublishNow singleRoom={singleRoom}/>
                </div>

            </div>
        </div>



    );
};

export default RoomDetailsPage;