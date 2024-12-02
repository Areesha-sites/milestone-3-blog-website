"use client";
import Image from "next/image";
export default function HomeMainImage() {
  return (
    <div className=" xl:ml-[-20%] group/card mt-8 xl:mt-12">
      <div
        className="cursor-pointer overflow-hidden relative xl:h-[22rem] 2xl:h-[30rem] 2xl:max-w-2xl h-[13rem] md:h-[15rem] lg:h-[17rem] lg:max-w-xs xl:w-full shadow-xl shadow-gray-300 rounded-md xl:max-w-[400px] max-w-[270px] mx-auto flex flex-col justify-between p-4"
        style={{
          backgroundImage: "url('/person-climbing.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src="/person-climbing.jpg"
            className="xl:h-10 xl:w-10 h-8 w-8 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal xl:text-[13px] text-[12px]  2xl:text-[18px] text-gray-800 relative z-10">
              Manu Arora
            </p>
            <p className="xl:text-[10px] text-[10px] text-gray-400  2xl:text-[14px]">
              2 min read
            </p>
          </div>
        </div>
        <div className="text-content">
          <h1 className="font-bold xl:text-[15px] text-[13px]  2xl:text-[24px]  text-gray-50 relative z-10">
            Alice Harper
          </h1>
          <p className="font-bold xl:text-[12px] 2xl:text-[15px] text-[11px] text-gray-50 relative z-10 ">
            The Journey to self-improvement begins with a single step.
          </p>
        </div>
      </div>
    </div>
  );
}