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
    return (
        <div className="mx-auto p-5 max-w-7xl">
            <h1 className="font-bold text-2xl mb-4">Add Room</h1>

            <Card className="max-w-3xl">
                <div className="p-8 w-full">
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <div className="md:col-span-2">
                                <TextField name="destinationName" isRequired>
                                    <Label>Room Name</Label>
                                    <Input placeholder="Bali Paradise" radius="lg" />
                                </TextField>
                            </div>

                            <div>
                                <Select name="amenities" className="w-full" radius="lg">
                                    <Label>Amenities</Label>
                                    <Select.Trigger>
                                        <Select.Value placeholder="Select amenity" />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                        <ListBox items={amenities}>
                                            {(item) => (
                                                <ListBox.Item key={item.key} id={item.key}>
                                                    <Label>{item.label}</Label>
                                                </ListBox.Item>
                                            )}
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            <TextField name="capacity">
                                <Label>Capacity</Label>
                                <Input type="number" placeholder="04" radius="lg" />
                            </TextField>

                            <TextField name="price" isRequired>
                                <Label>Hourly Rate (USD)</Label>
                                <Input
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
                                <TextField name="floor">
                                    <Label>Floor</Label>
                                    <Input type="number" placeholder="3" radius="lg" />
                                </TextField>
                          

                            <div className="md:col-span-2">
                                <TextField name="imageUrl" isRequired>
                                    <Label>Image URL</Label>
                                    <Input type="url" placeholder="https://example.com/room.jpg" radius="lg" />
                                </TextField>
                            </div>

                            <div className="md:col-span-2">
                                <TextField name="description" isRequired>
                                    <Label>Description</Label>
                                    <TextArea placeholder="Describe the room experience..." />
                                </TextField>
                            </div>

                        </div>

                        <Button className="w-full bg-purple-800 text-white rounded-md py-2.5 hover:bg-purple-700">
                            Register
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default AddRoomPage;