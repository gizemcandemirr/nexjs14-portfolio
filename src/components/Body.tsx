import React from "react";
import Image from "next/image";

const Body = () => {
  return (
    <div className="flex justify-between p-6 w-full">
      <div className="flex flex-col">
          <Image
            src="/frame.png"
            alt="Illustration"
            width={250}
            height={250}
          />
        <h1 className="text-5xl font-bold">I design top notch websites</h1>
      </div>

   
      <div className="mt-8 flex flex-col text-2xl pl-16">
        <p className="mb-4 text-gray-600 w-[40rem] ">
          Crafting seamless digital experiences with clean and efficient code,
          bringing your ideas to life in the most engaging way possible.
        </p>
        <button className="px-6 py-2 bg-black text-white rounded w-32 ml-64">
          Hire me
        </button>
      </div>
    </div>
  );
};

export default Body;
