import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
export default function HeaderTop() {
  return (
    <div className="w-full items-center justify-between bg-[#F7F7F7] h-[54px] pl-[62px] border-black border-b hidden md:flex">
      <div className="flex items-center space-x-2">
        <h3 className="font-Roboto font-normal text-[#000000] text-[14px]">
          Phone Number: 956 742 455 678 
        </h3>
        <Image src={"/images/Line 3.png"} alt="line" width={1} height={1} />
        <p className="font-Roboto font-normal text-[14px] text-[#000000]">
          Email:info@ddsgnr.com
        </p>
      </div>
      <div className="flex text-[#000000] pr-[64px] space-x-3">
        <FaFacebookF className="w-[10px] h-[18px]" />
        <FaInstagram className="w-[18px] h-[18px]" />
        <FaTwitter className="w-[18px] h-[15.3px]" />
        <FaLinkedin className="w-[18px] h-[18px]" />
      </div>
    </div>
  );
}
