"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

export default function ProfileDropdown({ user }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const initials = user?.name
        ? user.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()
        : "?";

    return (
        <div className="relative" ref={ref}>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-50 transition-all"
            >
                {user?.image ? (
                    <Avatar>
                        <Avatar.Image
                            src={user?.image}
                            alt={user?.name}
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                    </Avatar>





                ) : (
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-medium">
                        {initials}
                    </div>
                )}
                <span className="text-sm font-medium text-gray-700 hidden sm:block">
                    {user?.name?.split(" ")[0]}
                </span>
                <svg
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-lg z-50 overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
                        {user?.image ? (
                            <Avatar>
                                <Avatar.Image
                                    src={user?.image}
                                    alt={user?.name}
                                    className="w-8 h-8 rounded-full object-cover"
                                />
                                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                            </Avatar>
                        ) : (
                            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium">
                                {initials}
                            </div>
                        )}
                        <div>
                            <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                            <p className="text-xs text-gray-500">{user?.email}</p>
                        </div>
                    </div>

                    <div className="py-1">
                        <Link
                            href="/my-listing"
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            🏠 My Listings
                        </Link>
                        <Link
                            href="/my-booking"
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            📅 My Bookings
                        </Link>
                    </div>


                    <div className="border-t border-gray-100 py-1">
                        <button
                            onClick={async () => {
                                setOpen(false);
                                await authClient.signOut();
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                            🚪 Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}