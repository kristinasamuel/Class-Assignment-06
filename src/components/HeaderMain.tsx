import { FiMenu } from "react-icons/fi";
import { Button } from "./ui/button";
import Image from "next/image";
export default function HeaderMain() {
  return (
    <div className="flex items-center justify-between w-full h-[72px] px-4 lg:pl-[64px] lg:pr-[64px] bg-[#F7F7F7] border-b border-[#676767] overflow-hidden">
      <div className="flex items-center h-[41px] ">
        <Image
          src={"/images/Frame 1.png"}
          alt="logo"
          width={26.76}
          height={26.6}
        />
        <h1 className="font-bold font-Inter text-[20px] lg:text-[25.07px] ml-2">
          Ddsgnr
        </h1>
      </div>
      <div className="flex lg:hidden">
        <FiMenu className="w-[24px] h-[24px]  " />
      </div>
      <div className="items-center text-center bg-[#FFFFFF] h-[44px] hidden lg:flex">
        <ul className="flex items-center font-normal font-Roboto text-[16px] space-x-4 lg:space-x-12">
          <li className="mx-3">Home</li>
          <li>Courses</li>
          <li>Services</li>
          <li>Achievement</li>
          <li>About Us</li>
          <li>Testimonial</li>
        </ul>
        <Button className="font-Roboto text-[16px]  border-black border font-normal h-[40px] w-[80px] text-[#000000] bg-[#FFFFFF] hover:bg-gray-300  ml-3 lg:ml-5 rounded-[5px]">
          Login
        </Button>
        <Button className="font-normal text-[16px] text-[#FFFFFF] font-Roboto bg-[#000000] hover:bg-gray-800 w-[95px] h-[40px] rounded-[5px] ml-3 lg:ml-4">
          Sign Up
        </Button>
      </div>
    </div>
  );
}
