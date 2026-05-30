"use client";
import { Button, Input, Label, Modal, Surface, TextArea, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiEdit } from "react-icons/bi";

const amenities = [
    { key: "whiteboard", label: "Whiteboard", icon: "📝" },
    { key: "projector", label: "Projector", icon: "📽️" },
    { key: "wifi", label: "Wi-Fi", icon: "📶" },
    { key: "power", label: "Power Outlets", icon: "🔌" },
    { key: "quiet", label: "Quiet Zone", icon: "🤫" },
    { key: "ac", label: "Air Conditioning", icon: "❄️" },
];

export function EditModal({ singleRoom }) {
    const router = useRouter();
    const { _id } = singleRoom;
    const [selectedAmenities, setSelectedAmenities] = useState(singleRoom?.amenities || []);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const formData = new FormData(e.currentTarget);
        const roomData = Object.fromEntries(formData.entries());
        

        roomData.amenities = selectedAmenities;
        
        // ✅ Number fields convert করো
        roomData.capacity = Number(roomData.capacity);
        roomData.hourlyRate = Number(roomData.hourlyRate);
        roomData.floor = Number(roomData.floor);

        try {
            const res = await fetch(`http://localhost:5000/rooms/${_id}`, {
                method: "PATCH",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(roomData)
            });
            
            const data = await res.json();
            
            if (res.ok) {
                toast.success('Room Edited Successfully!');
                
                // ✅ Modal বন্ধ করে page refresh করো
                router.refresh(); // Server Component re-fetch করে
                
                // অথবা full reload
                // window.location.reload();
                
            } else {
                toast.error(data.error || 'Failed to update room');
            }
        } catch (error) {
            console.error('Update error:', error);
            toast.error('Something went wrong!');
        } finally {
            setLoading(false);
        }
    };

    const handleCheckboxChange = (amenityLabel) => {
        if (selectedAmenities.includes(amenityLabel)) {
            setSelectedAmenities(selectedAmenities.filter(a => a !== amenityLabel));
        } else {
            setSelectedAmenities([...selectedAmenities, amenityLabel]);
        }
    };
    
    const removeAmenity = (amenityLabel) => {
        setSelectedAmenities(selectedAmenities.filter(a => a !== amenityLabel));
    };

    return (
        <Modal>
            <Button variant="outline" className="mt-5 mb-3 rounded-lg text-sm sm:text-base px-3 sm:px-4 py-2">
                <BiEdit className="text-base sm:text-lg" /> 
                Edit
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="w-[95vw] sm:max-w-md md:max-w-lg lg:max-w-xl max-h-[90vh] overflow-y-auto">
                        <Modal.CloseTrigger />

                        <Modal.Header className="px-4 sm:px-6 pt-4 sm:pt-6">
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BiEdit className="text-lg" />
                            </Modal.Icon>
                            <Modal.Heading className="text-lg sm:text-xl">
                                Edit Room Details
                            </Modal.Heading>
                        </Modal.Header>

                        <Modal.Body className="p-4 sm:p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">

                                        {/* Room Name */}
                                        <div className="md:col-span-2">
                                            <TextField>
                                                <Label className="text-sm sm:text-base">Room Name</Label>
                                                <Input
                                                    key={`roomName-${_id}`}
                                                    defaultValue={singleRoom?.roomName}
                                                    name="roomName"
                                                    placeholder="e.g., Quantum Coding Cell"
                                                    radius="lg"
                                                    className="text-sm sm:text-base"
                                                />
                                            </TextField>
                                        </div>

                                        {/* Amenities */}
                                        <div className="md:col-span-2">
                                            <Label className="block text-sm sm:text-base font-medium mb-2 sm:mb-3">
                                                Amenities <span className="text-gray-400 text-xs sm:text-sm">(Select multiple)</span>
                                            </Label>

                                            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                                                {amenities.map((amenity) => (
                                                    <label
                                                        key={amenity.key}
                                                        className={`
                                                            flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg border cursor-pointer transition-all
                                                            ${selectedAmenities.includes(amenity.label)
                                                                ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 shadow-sm'
                                                                : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600'
                                                            }
                                                        `}
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            className="w-4 h-4 sm:w-4 sm:h-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500 cursor-pointer"
                                                            checked={selectedAmenities.includes(amenity.label)}
                                                            onChange={() => handleCheckboxChange(amenity.label)}
                                                        />
                                                        <span className="text-base sm:text-lg flex-shrink-0">{amenity.icon}</span>
                                                        <span className="text-xs sm:text-sm font-medium truncate">{amenity.label}</span>
                                                    </label>
                                                ))}
                                            </div>

                                            {selectedAmenities.length > 0 && (
                                                <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                                                    {selectedAmenities.map((amenity) => (
                                                        <span
                                                            key={amenity}
                                                            className="inline-flex items-center gap-1 sm:gap-1.5 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full group cursor-pointer hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                                                            onClick={() => removeAmenity(amenity)}
                                                            title="Click to remove"
                                                        >
                                                            <span className="text-sm">
                                                                {amenities.find(a => a.label === amenity)?.icon}
                                                            </span>
                                                            <span className="hidden xs:inline">{amenity}</span>
                                                            <span className="text-purple-400 hover:text-red-400 transition-colors ml-0.5">×</span>
                                                        </span>
                                                    ))}
                                                    <button
                                                        type="button"
                                                        onClick={() => setSelectedAmenities([])}
                                                        className="text-xs text-red-500 hover:text-red-700 dark:hover:text-red-400 px-2 py-1 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                                    >
                                                        Clear all
                                                    </button>
                                                </div>
                                            )}

                                            <p className="text-xs text-gray-500 mt-2">
                                                {selectedAmenities.length} amenity(s) selected
                                            </p>
                                        </div>

                                        {/* Capacity */}
                                        <div>
                                            <TextField>
                                                <Label className="text-sm sm:text-base">Capacity</Label>
                                                <Input
                                                    key={`capacity-${_id}`}
                                                    defaultValue={singleRoom?.capacity}
                                                    name="capacity"
                                                    type="number"
                                                    placeholder="4"
                                                    radius="lg"
                                                    min="1"
                                                    className="text-sm sm:text-base"
                                                />
                                            </TextField>
                                        </div>

                                        {/* Hourly Rate */}
                                        <div>
                                            <TextField>
                                                <Label className="text-sm sm:text-base">Hourly Rate (USD)</Label>
                                                <Input
                                                    key={`rate-${_id}`}
                                                    defaultValue={singleRoom?.hourlyRate}
                                                    name="hourlyRate"
                                                    type="number"
                                                    placeholder="5"
                                                    radius="lg"
                                                    min="0"
                                                    step="0.5"
                                                    className="text-sm sm:text-base"
                                                    startContent={
                                                        <div className="pointer-events-none flex items-center">
                                                            <span className="text-default-400 text-sm sm:text-base">$</span>
                                                        </div>
                                                    }
                                                />
                                            </TextField>
                                        </div>

                                        {/* Floor */}
                                        <div>
                                            <TextField>
                                                <Label className="text-sm sm:text-base">Floor</Label>
                                                <Input
                                                    key={`floor-${_id}`}
                                                    defaultValue={singleRoom?.floor}
                                                    name="floor"
                                                    type="number"
                                                    placeholder="3"
                                                    radius="lg"
                                                    min="0"
                                                    className="text-sm sm:text-base"
                                                />
                                            </TextField>
                                        </div>

                                        <div>
                                            <TextField>
                                                <Label className="text-sm sm:text-base">Room Number</Label>
                                                <Input
                                                    key={`roomNum-${_id}`}
                                                    defaultValue={singleRoom?.roomNumber}
                                                    name="roomNumber"
                                                    type="text"
                                                    placeholder="e.g., 301-A"
                                                    radius="lg"
                                                    className="text-sm sm:text-base"
                                                />
                                            </TextField>
                                        </div>

                                        {/* Image URL */}
                                        <div className="md:col-span-2">
                                            <TextField >
                                                <Label className="text-sm sm:text-base">Image URL</Label>
                                                <Input
                                                    key={`img-${_id}`}
                                                    defaultValue={singleRoom?.imageUrl}
                                                    name="imageUrl"
                                                    type="url"
                                                    placeholder="https://example.com/room.jpg"
                                                    radius="lg"
                                                    className="text-sm sm:text-base"
                                                />
                                            </TextField>
                                        </div>

                                        {/* Description */}
                                        <div className="md:col-span-2">
                                            <TextField >
                                                <Label className="text-sm sm:text-base">Description</Label>
                                                <TextArea
                                                    key={`desc-${_id}`}
                                                    defaultValue={singleRoom?.description}
                                                    name="description"
                                                    placeholder="Describe the room experience, facilities, and any special features..."
                                                    minRows={3}
                                                    className="text-sm sm:text-base"
                                                />
                                            </TextField>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-purple-800 text-white rounded-md py-2.5 sm:py-3 text-sm sm:text-base font-medium hover:bg-purple-700 transition-colors mt-4 disabled:opacity-50"
                                    >
                                        {loading ? '⏳ Saving...' : '💾 Save Changes'}
                                    </Button>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}