import {FaDribbble, FaLinkedin,FaTwitter } from "react-icons/fa";
import Image from "next/image"
export default function OurTeam() {
  return (
    <div className="w-full bg-[#F7F7F7] pt-[112px] overflow-hidden ">
     <div className="flex flex-col items-center justify-center ">
 <h2 className="font-Roboto font-bold text-[48px]"> Our team</h2>
     <p className="font-Roboto font-normal  text-center w-[363px] sm:w-[768px] lg:w-[768px] text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center text-center gap-[64px] mt-[64px]" >
         <div className="flex flex-col justify-center items-center">
          <Image
          src={"/images/profile1.png"}
          alt={"profile"}
          width={80}
          height={80}
          className="object-cover"
          />
          <p className="font-Roboto font-semibold text-[20px] mt-[16px]" >James Nduku</p>
          <p className="font-Roboto font-normal text-[18px]">Marketing Coordinator</p>
          <div className="flex justify-center items-center gap-[14px] mt-[40px]">
           <FaLinkedin className="w-[24px] h-[24px]"/>
           <FaTwitter className="w-[24px] h-[24px]"/>
           <FaDribbble className="w-[24px] h-[24px]" />
          </div>
         </div>
         <div className="flex flex-col justify-center items-center">
          <Image
          src={"/images/profile2.png"}
          alt={"profile"}
          width={80}
          height={80}
          className="object-cover"
          
          />

          <p className="font-Roboto font-semibold text-[20px] mt-[16px]" >Joseph Munyambu</p>
          <p className="font-Roboto font-normal text-[18px]">Nursing Assistant</p>
          <div className="flex justify-center items-center gap-[14px] mt-[40px]">
           <FaLinkedin className="w-[24px] h-[24px]"/>
           <FaTwitter className="w-[24px] h-[24px]"/>
           <FaDribbble className="w-[24px] h-[24px]" />
          </div>
         </div>
         <div className="flex flex-col justify-center items-center">
          <Image
          src={"/images/profile3.png"}
          alt={"profile"}
          width={80}
          height={80}
          className="object-cover"
          
          />

          <p className="font-Roboto font-semibold text-[20px] mt-[16px]" >Joseph Ngumbau</p>
          <p className="font-Roboto font-normal text-[18px]">Medical Assistant</p>
          <div className="flex justify-center items-center gap-[14px] mt-[40px]">
           <FaLinkedin className="w-[24px] h-[24px]"/>
           <FaTwitter className="w-[24px] h-[24px]"/>
           <FaDribbble className="w-[24px] h-[24px]" />
          </div>
         </div>
         <div className="flex-col justify-center items-center hidden sm:flex lg:flex">
          <Image
          src={"/images/profile4.png"}
          alt={"profile"}
          width={80}
          height={80}
          className="object-cover"
          
          />

          <p className="font-Roboto font-semibold text-[20px] mt-[16px]" >Erick Kipkemboi</p>
          <p className="font-Roboto font-normal text-[18px]">Web Designer</p>
         
         </div>
         <div className="flex-col justify-center items-center hidden sm:flex lg:flex ">
          <Image
          src={"/images/profile5.png"}
          alt={"profile"}
          width={80}
          height={80}
          className="object-cover"
          
          />

          <p className="font-Roboto font-semibold text-[20px] mt-[16px]" >Stephen Kerubo</p>
          <p className="font-Roboto font-normal text-[18px]">President of Sales</p>
         
         </div>
         <div className="hidden sm:flex lg:flex flex-col justify-center items-center">
          <Image
          src={"/images/profile6.png"}
          alt={"profile"}
          width={80}
          height={80}
          className="object-cover"
          
          />

          <p className="font-Roboto font-semibold text-[20px] mt-[16px]">John Leboo</p>
          <p className="font-Roboto font-normal text-[18px]">Dog Trainer</p>
         
         </div>
     </div>
    </div>
  )
}
