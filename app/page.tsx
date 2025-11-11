"use client";

import { Lightbulb } from "lucide-react";
import Link from "next/link";

export default function Home() {
  function changeTheme() {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark");
    }
  }

  return (
    <div className="relative">
      <button
        onClick={changeTheme}
        className="fixed top-6 right-6 z-50 rounded-full flex items-center justify-center 
               w-7 h-7 bg-gray-800 dark:bg-yellow-200  hover:bg-gray-700
               text-white shadow-lg transition-transform hover:scale-110 "
      >
        <Lightbulb className="w-4 h-4" />
      </button>
      <div className="flex flex-col gap-y-10 border border-yellow-800 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <p className="dark:text-white text-black md:text-2xl text-xl">
          Welcome to the Client Services Company!
        </p>

        <div className="flex items-center gap-x-6">
          <Link href={"/client/add-new-client"} className="shadow-lg hover:shadow-xl hover:border-black hover:bg-white hover:text-black hover:translate-y-1.5 hoverEffect bg-black border border-white rounded-md px-4 py-1.5">
            Add New Client
          </Link>
          <Link href={"/client/get-all-clients"} className="shadow-lg hover:shadow-xl hover:text-white hover:border-white hover:bg-black hover:translate-y-1.5 hoverEffect bg-white text-black border border-black rounded-md px-4 py-1.5">
            Get All Client
          </Link>
        </div>
      </div>
    </div>
  );
}
