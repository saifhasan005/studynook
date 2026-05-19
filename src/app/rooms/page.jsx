import RoomCard from "@/Component/RoomCard";

const RoomsPage = async () => {
        const res = await fetch('http://localhost:5000/rooms', { cache: 'no-store' });
    const data = await res.json();
    console.log(data);
    return (
        <div className="container mx-auto mt-[50px]">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {
            data.map((room, index) =>(
                <RoomCard index={index} room={room} key={room._id}/>
            ))
           }
           </div>
        </div>
    );
};

export default RoomsPage;