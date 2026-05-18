'use client'
import { Input, Select, Label, ListBox, TextArea, TextField, Button, Card } from "@heroui/react";

const amenities = [
    { key: "whiteboard", label: "Whiteboard" },
    { key: "projector", label: "Projector" },
    { key: "wifi", label: "Wi-Fi" },
    { key: "power", label: "Power Outlets" },
    { key: "quiet", label: "Quiet Zone" },
    { key: "ac", label: "Air Conditioning" },
];

const AddRoomPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const room = Object.fromEntries(formData.entries());

        const res = await fetch(`http://localhost:5000/rooms`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(room)
        })
        const data = await res.json();
        console.log(data);
    };

    return (

        <div className="mx-auto px-4 py-6 md:p-8 max-w-7xl">
            <h1 className="font-bold text-2xl md:text-3xl mb-6 text-slate-800 dark:text-slate-100 text-center">Add Room</h1>

            <Card className="max-w-3xl w-full mx-auto">

                <div className="p-5 md:p-8 w-full">
                    <form onSubmit={onSubmit} className="space-y-6 md:space-y-8">


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">


                            <div className="md:col-span-2">
                                <TextField isRequired>
                                    <Label>Room Name</Label>
                                    <Input name="roomName" placeholder="Quantum Coding Cell" radius="lg" />
                                </TextField>
                            </div>

                            <div className="w-full">
                                <Select name="amenities" className="w-full" radius="lg">
                                    <Label>Amenities</Label>
                                    <Select.Trigger>
                                        <Select.Value placeholder="Select amenity" />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                        <ListBox items={amenities}>
                                            {(item) => (
                                                <ListBox.Item key={item.key} id={item.key} textValue={item.label}>
                                                    <Label>{item.label}</Label>
                                                </ListBox.Item>
                                            )}
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>


                            <div>
                                <TextField>
                                    <Label>Capacity</Label>
                                    <Input name="capacity" type="number" placeholder="04" radius="lg" />
                                </TextField>
                            </div>


                            <div>
                                <TextField isRequired>
                                    <Label>Hourly Rate (USD)</Label>
                                    <Input
                                        name="hourlyRate"
                                        type="number"
                                        placeholder="5"
                                        radius="lg"
                                        startContent={
                                            <div className="pointer-events-none flex items-center">
                                                <span className="text-default-400 text-small">$</span>
                                            </div>
                                        }
                                    />
                                </TextField>
                            </div>


                            <div>
                                <TextField>
                                    <Label>Floor</Label>
                                    <Input name="floor" type="number" placeholder="3" radius="lg" />
                                </TextField>
                            </div>


                            <div className="md:col-span-2">
                                <TextField isRequired>
                                    <Label>Image URL</Label>
                                    <Input name="imageUrl" type="url" placeholder="https://example.com/room.jpg" radius="lg" />
                                </TextField>
                            </div>

                            <div className="md:col-span-2">
                                <TextField isRequired>
                                    <Label>Description</Label>
                                    <TextArea name="description" placeholder="Describe the room experience..." />
                                </TextField>
                            </div>

                        </div>


                        <Button type="submit" className="w-full bg-purple-800 text-white rounded-md py-3 text-base font-medium hover:bg-purple-700 transition-colors">
                            Register
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default AddRoomPage;