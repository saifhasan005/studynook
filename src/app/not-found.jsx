"use client";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="space-y-4">
        <h1 className="text-9xl font-extrabold tracking-widest text-purple-800 dark:text-purple-500 animate-pulse">
          404
        </h1>


        <div className="bg-purple-100 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 px-3 py-1 text-sm rounded-md rotate-12 absolute inline-block translate-x-12 -translate-y-16 select-none font-medium">
          Page Not Found
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 pt-4">
          Oops! You have wandered into empty space.
        </h2>

        <p className="mx-auto max-w-md text-slate-500 dark:text-slate-400 text-sm md:text-base">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
      </div>

      <div className="mt-8">
        <Link href={'/'}>
          <Button

            className="bg-purple-800 text-white font-medium px-6 py-2 rounded-md hover:bg-purple-700 transition-colors shadow-lg shadow-purple-800/20"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}