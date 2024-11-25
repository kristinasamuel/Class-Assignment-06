import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] w-full h-[1411px] lg:h-[684px] p-[80px] overflow-hidden">
      <div className="flex flex-col items-center md:flex-row  md:justify-between lg:justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <p className="font-Roboto font-semibold text-[18px] ">
            Subscribe to our newsletter
          </p>
          <p className="font-Roboto w-[287px] lg:w-[500px] font-normal text-[16px] mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col w-full md:w-auto items-center lg:items-start gap-4">
          <div className="flex flex-col md:flex-row w-full items-center  gap-[16px]">
            <Input
              type="text"
              placeholder="Enter Your email"
              className="w-full p-2 rounded-[5px] border border-black lg:p-[12px]"
            />
            <Button className="bg-[#FFFFFF] text-[#000000] w-full  lg:w-[119px] rounded-[5px] border border-black font-Roboto font-normal text-[16px] ml-0 lg:ml-[16px] mt-4 lg:mt-0 hover:bg-gray-300">
              Subscribe
            </Button>
          </div>
          <p className="text-center lg:text-left font-Roboto font-normal w-full lg:w-auto text-[12px] mt-6 lg:mt-3">
            By subscribing you agree to with our Privacy Policy
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[40px] mt-[80px] ">
        <div className="flex items-center justify-center lg:justify-start lg:items-start ">
          <div>
            <Image
              src={"/images/Frame 1.png"}
              alt="logo"
              height={32.58}
              width={30.38}
              className="mr-2"
            />
          </div>
          <p className="font-Inter text-[25.07px] font-bold ">Ddsgnr</p>
        </div>
        <div className="text-center lg:text-left">
          <p className="font-Roboto font-semibold text-[16px]">Courses</p>
          <ul className="font-Roboto font-normal text-[14px] mt-[16px] space-y-4">
            <li>Business</li>
            <li>Development</li>
            <li>Technology</li>
            <li>Design</li>
            <li>Programming</li>
          </ul>
        </div>

        <div className="text-center lg:text-left">
          <p className="font-Roboto font-semibold text-[16px]">Resources</p>
          <ul className=" font-Roboto font-normal text-[14px]  mt-[16px] space-y-4">
            <li>Career</li>
            <li>Resume</li>
            <li>Learning</li>
            <li>Interview Preparation</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className="text-center lg:text-left">
          <p className="font-Roboto font-semibold text-[16px]">About Us</p>
          <ul className=" font-Roboto font-normal text-[14px]  mt-[16px] space-y-4">
            <li>Contact</li>
            <li>Help/Support</li>
            <li>FAQ</li>
            <li>Terms and Conditions</li>
            <li>Partners</li>
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <Image
          src={"/images/Divider.png"}
          alt="line"
          width={1120}
          height={100}
          className="w-[640px] lg:w-[1120px]"
        />
      </div>
      <div className="flex flex-col lg:flex-row text-center lg:justify-between w-full space-y-4 lg:w-[1120px] h-[24px] mt-5 lg:space-y-0">
        <div className="flex flex-col lg:flex-row items-center ">
          <p className="flex font-Roboto font-normal text-[14px] ">
            2023 Ddsgnr. All right reserved.
          </p>
          <p className="font-Roboto font-normal text-[14px] ml-5">
            Privacy Policy
          </p>
          <p className="font-Roboto font-normal text-[14px]  ml-4">
            Terms of Service
          </p>
          <p className=" font-Roboto font-normal text-[14px] ml-4">
            Cookies Settings
          </p>
        </div>
        <div className="flex justify-center space-x-4 mt-4 lg:mt-0">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
}
