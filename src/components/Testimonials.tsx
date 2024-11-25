import { FaStar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import Image from "next/image";
export default function Testimonials() {
  return (
    <div className="bg-[#F7F7F7] w-full h-[830.89px] pt-[32px] md:pt-[35px] lg:pt-[112px] px-10 lg:px-[64px] overflow-hidden">
      <h2 className="font-Roboto font-bold text-[48px] hidden md:block lg:block">
        Customer testimonials
      </h2>
      <h4 className="font-Roboto w-full font-bold text-center justify-center text-[32px] md:hidden ">
        What Our Student Say
      </h4>
      <p className="text-center lg:text-left  text-[18px] font-Roboto font-normal w-[361px] md:w-[400px] lg:w-[560px] mt-[8px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[24px]  text-center justify-center mt-[64px]">
        <div className="w-full h-full p-[32px] items-center  border border-black">
          <div className="flex">
            <FaStar className="w-[20px]" />
            <FaStar className="w-[20px]" />
            <FaStar className="w-[20px]" />
            <FaStar className="w-[20px]" />
            <FaStar className="w-[20px]" />
          </div>
          <p className="font-Roboto font-normal text-left text-[18px] mt-8">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare."
          </p>
          <div className="flex items-center space-x-3">
            <Image
              src={"/images/profile3.png"}
              alt="profile"
              width={56}
              height={56}
              className="rounded-full"
            />
            <div className="mt-[2px]">
              <p className="font-Roboto font-semibold text-[16px]">
                James Nduku
              </p>
              <p className="font-Roboto font-normal text-[16px]">
                Software Developer
              </p>
            </div>
          </div>
        </div>
        <div className="w-full p-[32px] h-full border border-black hidden md:block lg:block">
          <div className="flex  ">
            <FaStar className="w-[20px]" />
            <FaStar className="w-[20px]" />
            <FaStar className="w-[20px]" />
            <FaStar className="w-[20px]" />
            <FaStar className="w-[20px]" />
          </div>
          <p className="font-Roboto font-normal text-left text-[18px] mt-8">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare."
          </p>
          <div className="flex items-center space-x-3">
            <Image
              src={"/images/profile1.png"}
              alt="profile"
              width={56}
              height={56}
              className="rounded-full"
            />
            <div className="mt-[2px]">
              <p className="font-Roboto font-semibold text-[16px]">
                Erick Kipkemboi
              </p>
              <p className="font-Roboto font-normal text-[16px]">
                Scrum Master
              </p>
            </div>
          </div>
        </div>
        <div className="w-full p-[32px] h-full  border border-black hidden md:hidden lg:block">
          <div className="flex  ">
            <FaStar className="w-[20px]" />
            <FaStar className="w-[20px]" />
            <FaStar className="w-[20px]" />
            <FaStar className="w-[20px]" />
            <FaStar className="w-[20px]" />
          </div>
          <p className="font-Roboto font-normal text-left text-[18px] mt-6">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare."
          </p>
          <div className="flex items-center space-x-3">
            <Image
              src={"/images/profile6.png"}
              alt="profile"
              width={56}
              height={56}
              className="rounded-full"
            />
            <div className="mt-[2px]">
              <p className="font-Roboto font-semibold text-[16px]">
                Stephen Kerubo
              </p>
              <p className="font-Roboto font-normal text-[16px]">
                Stephen Kerubo
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex  space-x-2 mt-[64px]">
          <Image src={"/images/Dot1.png"} alt="dot" width={8} height={8} />
          <Image src={"/images/Dot.png"} alt="dot" width={8} height={8} />
          <Image src={"/images/Dot.png"} alt="dot" width={8} height={8} />
          <Image src={"/images/Dot.png"} alt="dot" width={8} height={8} />
          <Image src={"/images/Dot.png"} alt="dot" width={8} height={8} />
        </div>
        <div className="flex space-x-2 mt-[64px]">
          <Image
            src={"/images/Button1.png"}
            alt="arrow"
            height={48}
            width={48}
            className="rounded-[50px]  h-[48px] w-[48px]  "
          />

          <Image
            src={"/images/Button1.png"}
            alt="arrow"
            height={48}
            width={48}
            className="rounded-[50px] h-[48px] w-[48px] "
          />
        </div>
      </div>
    </div>
  );
}
