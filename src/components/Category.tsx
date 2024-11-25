import Image from "next/image";
import { Button } from "./ui/button";
export default function Categoryes() {
  return (
    <div className="bg-[#FFFFFF] w-full h-100vh lg:h-[900px] pt-[112px] overflow-hidden">
      <div className="flex flex-col items-center ">
        <h2 className="text-center lg:text-left w-[385px] lg:w-[768px] font-Roboto font-bold text-[32px] lg:text-[48px] text-[#000000]">
          Explore Courses By Category
        </h2>
        <p className="font-normal text-center lg:text-left font-Roboto w-[380px] lg:w-[768px] text-[18px] mt-3 ">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center gap-4 md:gap-[6px] lg:gap-[64px] pt-[64px] px-4 md:px-8 ">
        <div className="w-full h-full rounded-[5px] p-[16px] bg-[#F7F7F7]">
          <div className="flex items-center w-full h-full gap-[10px] ">
            <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] bg-[#FFFFFF] gap-[10px]">
              <Image
                src={"/images/pen-tool-2.png"}
                alt="pentool"
                width={32}
                height={32}
              />
            </div>
            <div className="flex-1 w-[246.67px]">
              <h3 className="text-center font-Roboto text-[20px] font-semibold">
                Design & Development
              </h3>
              <p className="text-center font-Roboto font-normal text-[18px] text-[#000000]">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full rounded-[5px] p-[16px] bg-[#F7F7F7]">
          <div className="flex items-center gap-10px w-full h-full">
            <div className=" w-[100px] h-[100px] rounded-[5px] p-[34px] bg-[#FFFFFF] gap-[10px]">
              <Image
                src={"/images/volume-high.png"}
                alt="high-volume"
                width={32}
                height={32}
              />
            </div>

            <div className="flex flex-col w-[246.67px] h-[57px]">
              <h3 className="text-center font-Roboto text-[20px] font-semibold">
                Marketing
              </h3>
              <p className="text-center font-Roboto font-normal text-[18px] text-[#000000]">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full rounded-[5px] p-[16px] bg-[#F7F7F7]">
          <div className="flex items-center gap-10px w-full h-full">
            <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] bg-[#FFFFFF] gap-[10px]">
              <Image
                src={"/images/group.png"}
                alt="group"
                width={32}
                height={32}
              />
            </div>
            <div className="flex-1 w-[246.67px] h-[57px]">
              <h3 className="text-center font-Roboto text-[20px] font-semibold text-[#000000]">
                Development
              </h3>
              <p className="text-center font-Roboto font-normal text-[18px] text-[#000000]">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full rounded-[5px] p-[16px] bg-[#F7F7F7] hidden sm:block lg:block">
          <div className="flex items-center gap-10px w-full h-full">
            <div className=" w-[100px] h-[100px] rounded-[5px] p-[34px] bg-[#FFFFFF] gap-[10px]">
              <Image
                src={"/images/microphone.png"}
                alt="microphone"
                width={32}
                height={32}
              />
            </div>
            <div className="flex-1 w-[246.67px] h-[57px]">
              <h3 className="text-center font-Roboto text-[20px] font-semibold text-[#000000]">
                Communication
              </h3>
              <p className="text-center font-Roboto font-normal text-[18px] text-[#000000]">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full rounded-[5px] p-[16px] bg-[#F7F7F7] hidden sm:block lg:block ">
          <div className="flex items-center gap-10px w-full h-full">
            <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] bg-[#FFFFFF] gap-[10px]">
              <Image
                src={"/images/link.png"}
                alt="link"
                width={32}
                height={32}
              />
            </div>
            <div className="flex-1 w-[246.67px] h-[57px]">
              <h3 className="text-center font-Roboto text-[20px] font-semibold text-[#000000]">
                Digital Marketing
              </h3>
              <p className="text-center font-Roboto font-normal text-[18px] text-[#000000]">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full h-full rounded-[5px] p-[16px] bg-[#F7F7F7] hidden sm:block lg:block">
          <div className="flex items-center gap-10px w-full h-full">
            <div className=" w-[100px] h-[100px] rounded-[5px] p-[34px] bg-[#FFFFFF] gap-[10px]">
              <Image
                src={"/images/arrow-2.png"}
                alt="arrow"
                width={32}
                height={32}
              />
            </div>
            <div className="flex-1 w-[246.67px] h-[57px]">
              <h3 className="text-center font-Roboto text-[20px] font-semibold text-[#000000]">
                Self Development
              </h3>
              <p className="text-center font-Roboto font-normal text-[18px] text-[#000000]">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full rounded-[5px] p-[16px] bg-[#F7F7F7] hidden sm:block lg:block">
          <div className="flex items-center gap-10px w-full h-full">
            <div className=" w-[100px] h-[100px] rounded-[5px] p-[34px] bg-[#FFFFFF] gap-[10px]">
              <Image
                src={"/images/briefcase.png"}
                alt="briefcase"
                width={32}
                height={32}
              />
            </div>
            <div className="flex-1 w-[246.67px] h-[57px]">
              <h3 className="text-center font-Roboto text-[20px] font-semibold text-[#000000]">
                Business
              </h3>
              <p className="text-center font-Roboto font-normal text-[18px] text-[#000000]">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full rounded-[5px] p-[16px] bg-[#F7F7F7] hidden sm:block lg:block">
          <div className="flex items-center gap-10px w-full h-full">
            <div className=" w-[100px] h-[100px] rounded-[5px] p-[34px] bg-[#FFFFFF] gap-[10px]">
              <Image
                src={"/images/book.png"}
                alt="book"
                width={32}
                height={32}
              />
            </div>
            <div className="flex-1 w-[246.67px] h-[57px]">
              <h3 className="text-center font-Roboto text-[20px] font-semibold text-[#000000]">
                Finance
              </h3>
              <p className="text-center font-Roboto font-normal text-[18px] text-[#000000]">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full rounded-[5px] p-[16px] bg-[#F7F7F7] hidden sm:block lg:block ">
          <div className="flex items-center gap-10px w-full h-full">
            <div className=" w-[100px] h-[100px] rounded-[5px] p-[34px] bg-[#FFFFFF] gap-[10px]">
              <Image
                src={"/images/book1.png"}
                alt="book"
                width={32}
                height={32}
              />
            </div>
            <div className="flex-1 w-[246.67px] h-[57px]">
              <h3 className="text-center font-Roboto text-[20px] font-semibold text-[#000000]">
                Consulting
              </h3>
              <p className="text-center font-Roboto font-normal text-[18px] text-[#000000]">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 lg:mt-10 ">
        <Button className="w-[155px] h-[48px] rounded-[5px] border border-[#000000] font-Roboto font-normal text-[16px] text-[#000000] bg-[#FFFFFF] hover:bg-gray-300">
          View All Courses
        </Button>
      </div>
    </div>
  );
}
