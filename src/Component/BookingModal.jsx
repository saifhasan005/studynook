"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";


export function BookingModal({ singleRoom, onPublish }) {
    const hourlyRate = singleRoom?.hourlyRate || 3;
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [note, setNote] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const timeToDecimal = (timeStr) => {
        if (!timeStr) return 0;
        const [hours, minutes] = timeStr.split(":").map(Number);
        return hours + minutes / 60;
    };

    const calculateTotalCost = () => {
        if (!startTime || !endTime) return 0;
        const startTotal = timeToDecimal(startTime);
        const endTotal = timeToDecimal(endTime);
        if (endTotal > startTotal) {
            return (endTotal - startTotal) * hourlyRate;
        }
        return 0;
    };

    const totalCost = calculateTotalCost();
    const todayDate = new Date().toISOString().split("T")[0];

    const handleSubmit = async () => {
        setError("");

        if (!date) {
            setError("Please select a date");
            toast.error("Please select a date");
            return;
        }
        
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            setError("Please select today or a future date.");
            toast.error("Please select today or a future date");
            return;
        }

        if (!startTime || !endTime) {
            setError("Please select both start and end times.");
            toast.error("Please select both start and end times");
            return;
        }

        const startDecimal = timeToDecimal(startTime);
        const endDecimal = timeToDecimal(endTime);
        
        if (endDecimal <= startDecimal) {
            setError("End time must be after start time.");
            toast.error("End time must be after start time");
            return;
        }

        setIsSubmitting(true);

        const bookingData = {
            roomId: singleRoom?._id,
            roomName: singleRoom?.roomName,
            roomImage: singleRoom?.imageUrl,
            hourlyRate: singleRoom?.hourlyRate,
            floor: singleRoom?.floor,
            date: date,
            startTime: startTime,
            endTime: endTime,
            note: note,
            totalCost: totalCost
        };

        try {
            const result = await onPublish(bookingData);
            
            toast.success('✅ Room booked successfully!', {
                duration: 3000,
                position: 'top-center',
                style: {
                    background: '#10b981',
                    color: '#fff',
                    padding: '14px',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: '500'
                },
                icon: '🎉'
            });
            
            setDate("");
            setStartTime("");
            setEndTime("");
            setNote("");
            setIsOpen(false);
        } catch (err) {
            toast.error(err.message || 'Booking failed!', {
                duration: 4000,
                position: 'top-center',
                style: {
                    background: '#ef4444',
                    color: '#fff',
                    padding: '14px',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: '500'
                },
                icon: '❌'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const modalStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9998,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        modal: {
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            maxWidth: '500px',
            width: '90%',
            margin: '20px',
            padding: '24px',
            position: 'relative',
            zIndex: 9999,
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
        },
        title: {
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '20px'
        },
        label: {
            display: 'block',
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '8px'
        },
        input: {
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            color: '#1f2937',
            backgroundColor: '#ffffff'
        },
        select: {
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            color: '#1f2937',
            backgroundColor: '#ffffff'
        },
        textarea: {
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            color: '#1f2937',
            backgroundColor: '#ffffff',
            resize: 'vertical'
        },
        error: {
            padding: '8px',
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '8px',
            color: '#dc2626',
            fontSize: '14px',
            marginBottom: '16px'
        },
        priceBox: {
            marginTop: '8px',
            padding: '12px',
            backgroundColor: '#f3e8ff',
            borderRadius: '12px',
            border: '1px solid #e9d5ff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        priceText: {
            fontSize: '12px',
            color: '#9333ea',
            fontWeight: '500'
        },
        totalPrice: {
            fontSize: '24px',
            fontWeight: '900',
            color: '#7e22ce'
        },
        button: {
            width: '100%',
            padding: '10px',
            backgroundColor: '#9333ea',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '16px'
        },
        closeButton: {
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            color: '#9ca3af'
        },
        flexRow: {
            display: 'flex',
            gap: '16px',
            marginBottom: '16px'
        },
        flexCol: {
            flex: 1
        },
        mb4: {
            marginBottom: '16px'
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                style={{
                    backgroundColor: '#7e22ce',
                    color: '#ffffff',
                    fontWeight: 'bold',
                    padding: '12px 32px',
                    borderRadius: '12px',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                Book Now
            </button>

            {isOpen && (
                <div style={modalStyles.overlay}>
                    <div style={modalStyles.modal}>
                        <button 
                            onClick={() => setIsOpen(false)}
                            style={modalStyles.closeButton}
                        >
                            ✕
                        </button>

                        <h2 style={modalStyles.title}>Book Your Room</h2>

                        <div style={modalStyles.mb4}>
                            <label style={modalStyles.label}>Date</label>
                            <input
                                type="date"
                                min={todayDate}
                                value={date}
                                onChange={(e) => {
                                    setDate(e.target.value);
                                    setError("");
                                }}
                                style={modalStyles.input}
                            />
                        </div>

                        <div style={modalStyles.flexRow}>
                            <div style={modalStyles.flexCol}>
                                <label style={modalStyles.label}>Start Time</label>
                                <select
                                    value={startTime}
                                    onChange={(e) => {
                                        setStartTime(e.target.value);
                                        setError("");
                                    }}
                                    style={modalStyles.select}
                                >
                                    <option value="">Select Start Time</option>
                                    <option value="09:00">09:00 AM</option>
                                    <option value="10:00">10:00 AM</option>
                                    <option value="11:00">11:00 AM</option>
                                    <option value="12:00">12:00 PM</option>
                                    <option value="13:00">01:00 PM</option>
                                    <option value="14:00">02:00 PM</option>
                                    <option value="15:00">03:00 PM</option>
                                    <option value="16:00">04:00 PM</option>
                                    <option value="17:00">05:00 PM</option>
                                </select>
                            </div>

                            <div style={modalStyles.flexCol}>
                                <label style={modalStyles.label}>End Time</label>
                                <select
                                    value={endTime}
                                    onChange={(e) => {
                                        setEndTime(e.target.value);
                                        setError("");
                                    }}
                                    style={modalStyles.select}
                                >
                                    <option value="">Select End Time</option>
                                    <option value="10:00">10:00 AM</option>
                                    <option value="11:00">11:00 AM</option>
                                    <option value="12:00">12:00 PM</option>
                                    <option value="13:00">01:00 PM</option>
                                    <option value="14:00">02:00 PM</option>
                                    <option value="15:00">03:00 PM</option>
                                    <option value="16:00">04:00 PM</option>
                                    <option value="17:00">05:00 PM</option>
                                    <option value="18:00">06:00 PM</option>
                                </select>
                            </div>
                        </div>

                        <div style={modalStyles.mb4}>
                            <label style={modalStyles.label}>Note (optional)</label>
                            <textarea
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                rows="3"
                                style={modalStyles.textarea}
                                placeholder="Write your note here..."
                            />
                        </div>

                        {error && (
                            <div style={modalStyles.error}>
                                {error}
                            </div>
                        )}

                        <div style={modalStyles.priceBox}>
                            <div>
                                <p style={modalStyles.priceText}>Hourly Rate: ${hourlyRate}/hr</p>
                                <p style={{...modalStyles.priceText, fontWeight: 'bold'}}>Total Price</p>
                            </div>
                            <div style={modalStyles.totalPrice}>
                                ${totalCost}
                            </div>
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            style={{
                                ...modalStyles.button,
                                backgroundColor: isSubmitting ? '#c084fc' : '#9333ea'
                            }}
                        >
                            {isSubmitting ? "Booking..." : "Publish Room"}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default BookingModal;