import Image from "next/image";
import { Button } from "./ui/button";
export default function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row w-full h-100vh lg:h-[800px] bg-[#FFFFFF] overflow-hidden">
      <div className="flex flex-col items-center lg:items-start text-center lg:pl-[80px] lg:mt-[141px] lg:w-[640px]">
        <h1 className="font-bold font-Roboto text-center lg:text-left mt-14 w-[380px] text-[40px] lg:text-[56px] lg:w-[500px] text-[#000000]">
          Learn new skills online with ease
        </h1>
        <p className="font-normal text-center lg:text-left font-Roboto w-[380px] lg:w-[500px] text-[16px] lg:text-[18px] mt-5">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
        <div className="text-left pt-[16px] w-[358px] h-[64px]">
          <Button className="bg-[#000000] text-[14px] lg:text-[16px] font-Roboto w-[150px] lg:w-[178px] h-[48px] rounded-[5px] font-normal text-[#FFFFFF] hover:bg-gray-800">
            Start learning now
          </Button>
          <Button className="font-Roboto font-normal text-[14px] lg:text-[16px] w-[164px] h-[48px] rounded-[5px] ml-4 text-[#000000] border-black border bg-[#FFFFFF] hover:bg-gray-300">
            Explore Courses
          </Button>
        </div>
      </div>
      <div className="text-right mt-8 w-full h-[390px] lg:w-[640px] lg:h-[900px] lg:mt-0 ">
        <Image
          src={"/images/Image1.png"}
          alt="Profile"
          width={640}
          height={900}
          className="object-cover mx-auto"
        />
      </div>
    </div>
  );
}
