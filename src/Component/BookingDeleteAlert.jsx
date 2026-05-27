"use client";
import { AlertDialog, Button } from "@heroui/react";
import { FiXCircle } from "react-icons/fi";
import { useRouter } from "next/navigation"; 
function BookingDeleteAlert({ data }) {
    const router = useRouter(); 
    const handleDeleteBooking = async () => {
        
        const res = await fetch(`http://localhost:5000/booking/${data}`, {
            method: "PATCH", 
            headers: {
                'content-type': 'application/json'
            }
        });
        const booking = await res.json();
        console.log(booking);   
        
        if (booking.modifiedCount > 0) {
            router.refresh(); 
        }
    };

    return (
        <AlertDialog>
            <Button
                className="flex items-center gap-1.5 text-sm font-semibold text-red-400 bg-red-400/10 border border-red-400/30 hover:bg-red-400/20 hover:border-red-400 rounded-lg px-3.5 py-1.5 transition-all"
            >
                <FiXCircle size={14} />
                Cancel Booking
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Cancel Your Booking?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>Are you sure you want to cancel this booking?</p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                No, Keep It
                            </Button>
                            <Button onClick={handleDeleteBooking} slot="close" variant="danger">
                                Yes, Cancel Booking
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}

export default BookingDeleteAlert;