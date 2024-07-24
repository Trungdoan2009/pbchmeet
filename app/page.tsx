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
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24 bg-white h-screen">
      <section className="flex flex-col items-center text-center w-full h-full">
        <Image src="/logo.svg" alt="logo" width={200} height={200} className="mx-auto" />
        <h1 className="bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text font-extrabold text-transparent text-5xl mt-8 w-full text-center">
          PBC Meet
        </h1>
        <h1 className="bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text font-extrabold text-transparent text-5xl mt-4 w-full text-center">
          <span className="block">Tạo cuộc họp với bạn bè</span>
        </h1>
        <p className="mt-6 sm:text-xl text-gray-600 w-full text-center">
          Đây là nơi để tạo những cuộc họp suôn sẻ với các thành viên        </p>
        <div className="mt-8 w-full flex flex-col items-center gap-4">
          <input
            type="text"
            id="name"
            onChange={(e) => setFullName(e.target.value)}
            className="border rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 px-4 py-2 w-full text-black"
            placeholder="Nhập tên của bạn"
            style={{ backgroundColor: "#F7F7F7", width: "100%", maxWidth: "100%" }}
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
                  placeholder="Nhập ID phòng để tham gia cuộc họp"
                  style={{ backgroundColor: "#F7F7F7", width: "100%", maxWidth: "100%" }}
                />
                <button
                  className="rounded-md bg-blue-600 px-10 py-2 text-sm font-medium text-white hover:bg-blue-700 transition duration-200 w-full"
                  onClick={() => router.push(`/room/${roomID}`)}
                  disabled={!roomID}
                  style={{ width: "100%", maxWidth: "100%" }}
                >
                  Tham gia
                </button>
              </div>
              <div className="mt-4 w-full text-center">
                <button
                  className="text-lg font-medium text-blue-400 hover:underline"
                  onClick={() => router.push(`/room/${uuid()}`)}
                >
                  Hoặc tạo một cuộc họp mới
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
