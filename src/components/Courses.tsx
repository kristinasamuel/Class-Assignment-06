import Image from "next/image";
import { Button } from "./ui/button";
export default function Courses() {
  return (
    <div className="bg-[#FFFFFF] w-full h-100vh pt-32 lg:pt-[112px] overflow-hidden">
      <div className="flex flex-col items-center justify-center mb-6">
        <h1 className="font-Roboto font-bold text-[56px] text-[#000000] mb-4 mt-20 md:mt-10 lg:mt-0">
          Courses
        </h1>
        <p className="font-Roboto font-normal text-[18px]">
          Your Ultimate Guide to learning
        </p>
      </div>
      <div className="w-[336px] h-[40px] mx-auto mb-4">
        <ul className="flex justify-around items-center text-center">
          <li className="font-Roboto font-normal text-[16px] border-b-2 border-black pb-2 ">
            Popular
          </li>
          <li className="font-Roboto font-normal text-[16px]">Recommended</li>
          <li className="font-Roboto font-normal text-[16px]">Best Price</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[24px] mt-[12px] place-items-center">
        <div className="bg-[#F7F7F7] w-full h-full items-center rounded-[5px] gap-[24px]">
          <div>
            <Image
              src={"/images/Image2.png"}
              alt="Ui design"
              width={416}
              height={300}
            />
          </div>
          <div className="flex justify-between items-center mx-4 mt-4">
            <p className="font-Roboto font-semibold text-[14px] text-[#000000]">
              Design
            </p>
            <div className="flex items-center space-x-1">
              <Image
                src={"/images/Star 1.png"}
                alt="star" 
                width={24}
                height={24}
              />
              <p className="text-[14px] font-Roboto font-semibold">5.0</p>
            </div>
          </div>
          <div className="mt-4 p-4">
            <h1 className="font-Roboto font-bold text-[24px] text-[#000000]">
              UX/UI Design 201
            </h1>
            <p className="font-Roboto font-normal text-[16px] text-[#000000]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center w-[382px] h-[40px]">
              <button className="font-Roboto font-normal text-[16px] w-[117px] h-[40px] rounded-[5px] border border-black text-[#000000] mt-5 mb">
                Enroll Now
              </button>
              <p className="text-center font-Roboto font-medium text-[16px] mt-4 mx-6">
                $400
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F7F7F7] w-full h-full rounded-[5px] gap-[24px]">
          <div>
            <Image
              src={"/images/Image3.png"}
              alt="Ui ux design"
              width={416}
              height={300}
              className="object-fill"
            />
          </div>
          <div className="flex justify-between items-center mx-4 mt-4">
            <p className="font-Roboto font-semibold text-[14px] text-[#000000]">
              Programmimg
            </p>
            <div className="flex items-center space-x-1">
              <Image
                src={"/images/Star 1.png"}
                alt="star"
                width={24}
                height={24}
              />
              <p className="text-[14px] font-Roboto font-semibold">5.0</p>
            </div>
          </div>
          <div className="mt-4 p-4">
            <h5 className="font-Roboto font-bold text-[24px] text-[#000000]">
              Introduction to Python
            </h5>
            <p className="font-Roboto font-normal text-[16px] text-[#000000]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center w-[382px] h-[40px]">
              <button className="font-Roboto font-normal text-[16px] w-[117px] h-[40px] rounded-[5px] border border-black text-[#000000] mt-5 mb">
                Enroll Now
              </button>
              <p className="font-Roboto font-medium text-center mx-6 text-[16px] mt-4">
                $400
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F7F7F7] w-full h-full rounded-[5px] gap-[24px]">
          <div>
            <Image
              src={"/images/Image4.png"}
              alt="data Analysis"
              width={416}
              height={300}
              className="object-cover"
            />
          </div>
          <div className="flex justify-between items-center mx-4 mt-4">
            <p className="font-Roboto font-semibold text-[14px] text-[#000000]">
              Business
            </p>
            <div className="flex items-center space-x-1">
              <Image
                src={"/images/Star 1.png"}
                alt="star"
                width={24}
                height={24}
              />
              <p className="font-Roboto font-semibold text-[14px]">5.0</p>
            </div>
          </div>
          <div className="mt-4 p-4">
            <h1 className="font-Roboto font-bold text-[24px] text-[#000000]">
              Data Analysis for Beginners
            </h1>
            <p className="font-Roboto font-normal text-[16px] text-[#000000]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center w-[382px] h-[40px]">
              <button className=" font-Roboto font-normal text-[16px] w-[117px] h-[40px] rounded-[5px] border border-black text-[#000000] mt-5 mb">
                Enroll Now
              </button>
              <p className="text-center font-Roboto font-medium text-[16px] mt-4 mx-6">
                $400
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F7F7F7] w-full h-full rounded-[5px] gap-[24px] hidden lg:block ">
          <div>
            <Image
              src={"/images/Image5.png"}
              alt="Art"
              width={416}
              height={300}
              className="object-cover"
            />
          </div>
          <div className="flex justify-between items-center mx-4 mt-4">
            <p className="font-Roboto font-semibold text-[14px] text-[#000000]">
              Art
            </p>
            <div className="flex items-center space-x-1">
              <Image
                src={"/images/Star 1.png"}
                alt="star"
                width={24}
                height={24}
              />
              <p className="text-[14px] font-Roboto font-semibold">5.0</p>
            </div>
          </div>
          <div className="mt-4 p-4">
            <h5 className="font-Roboto font-bold text-[24px] text-[#000000]">
              Art Specialization
            </h5>
            <p className="font-Roboto font-normal text-[16px] text-[#000000]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center w-[382px] h-[40px]">
              <button className="font-Roboto font-normal text-[16px] w-[117px] h-[40px] rounded-[5px] border border-black text-[#000000] mt-5 mb">
                Enroll Now
              </button>
              <p className="text-center mx-6 font-Roboto font-medium text-[16px] mt-4">
                $400
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F7F7F7] w-full h-full rounded-[5px] gap-[24px] hidden lg:block ">
          <div>
            <Image
              src={"/images/Image6.png"}
              alt="law"
              width={416}
              height={300}
              className="object-cover"
            />
          </div>
          <div className="flex justify-between items-center mx-4 mt-4">
            <p className="font-Roboto font-semibold text-[14px] text-[#000000]">
              Law
            </p>
            <div className="flex items-center space-x-1">
              <Image
                src={"/images/Star 1.png"}
                alt="star"
                width={24}
                height={24}
              />
              <p className="text-[14px] font-Roboto font-semibold">5.0</p>
            </div>
          </div>
          <div className="mt-4 p-4">
            <h5 className="font-Roboto font-bold text-[24px] text-[#000000]">
              Rule of Law
            </h5>
            <p className="font-Roboto font-normal text-[16px] text-[#000000]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center w-[382px] h-[40px]">
              <button className="w-[117px] h-[40px] rounded-[5px] border border-black font-Roboto font-normal text-[16px] text-[#000000] mt-5 mb">
                Enroll Now
              </button>
              <p className="text-center mx-6 font-Roboto font-medium text-[16px] mt-4">
                $400
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F7F7F7]  w-full h-full rounded-[5px] gap-[24px] hidden lg:block">
          <div>
            <Image
              src={"/images/Image7.png"}
              alt="tech"
              width={416}
              height={300}
              className="object-cover"
            />
          </div>
          <div className="flex justify-between items-center mx-4 mt-4">
            <p className="font-Roboto font-semibold text-[14px] text-[#000000]">
              Tech
            </p>
            <div className="flex items-center space-x-1">
              <Image
                src={"/images/Star 1.png"}
                alt="star"
                width={24}
                height={24}
              />

              <p className="text-[14px] font-Roboto font-semibold">5.0</p>
            </div>
          </div>
          <div className="mt-4 p-4">
            <h5 className="font-Roboto font-bold text-[24px] text-[#000000]">
              Introduction to webflow
            </h5>
            <p className="font-Roboto font-normal text-[16px] text-[#000000]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>

            <div className="flex items-center w-[382px] h-[40px]">
              <button className="w-[117px] h-[40px] rounded-[5px] border border-black text-[#000000] mt-5 mb">
                Enroll Now
              </button>
              <p className="text-center mx-6 font-Roboto font-medium text-[16px] mt-4">
                $400
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[50px] mb-[50px]">
        <Button className="font-Roboto font-normal text-[16px] w-[152px] h-[40px] rounded-[5px] border-black border bg-[#FFFFFF] text-[#000000] hover:bg-gray-300">
          View All Courses
        </Button>
      </div>
    </div>
  );
}
