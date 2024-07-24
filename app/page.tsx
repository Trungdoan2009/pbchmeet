"use client";

import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function Home() {
  const { fullName, setFullName } = useUser();
  const [roomID, setRoomID] = useState("");
  const router = useRouter();

  useEffect(() => {
    setFullName("");
  }, []);

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <section className="flex flex-col items-center text-center">
        <Image src="/logo.svg" alt="logo" width={200} height={200} />
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent text-5xl mt-8">
          Have a smooth meeting
        </h1>
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent text-5xl mt-4">
          <span className="block">with team members</span>
        </h1>
        <p className="mt-6 sm:text-xl text-gray-300 max-w-lg">
          Zegocloud is a global communication service provider which provides developer-friendly and powerful SDK & APIs
        </p>
        <div className="mt-8 w-full flex flex-col items-center gap-4">
          <input
            type="text"
            id="name"
            onChange={(e) => setFullName(e.target.value)}
            className="border rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 px-4 py-2 w-full text-black"
            placeholder="Enter your name"
          />
          {fullName && fullName.length >= 3 && (
            <div className="w-full flex flex-col items-center gap-4">
              <div className="w-full flex items-center gap-4">
                <input
                  type="text"
                  id="roomid"
                  value={roomID}
                  onChange={(e) => setRoomID(e.target.value)}
                  className="border rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 px-4 py-2 w-full text-black"
                  placeholder="Enter room ID to join a meeting"
                />
                <button
                  className="rounded-md bg-blue-600 px-10 py-2 text-sm font-medium text-white hover:bg-blue-700 transition duration-200"
                  onClick={() => router.push(`/room/${roomID}`)}
                  disabled={!roomID}
                >
                  Join
                </button>
              </div>
              <div className="mt-4">
                <button
                  className="text-lg font-medium text-blue-400 hover:underline"
                  onClick={() => router.push(`/room/${uuid()}`)}
                >
                  Or create a new meeting
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
