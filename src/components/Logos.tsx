import Image from "next/image";
export default function Logos() {
  return (
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row lg:justify-between items-center w-full bg-[#F7F7F7] lg:h-[228px] overflow-hidden">
      <div className="text-center lg:text-left mb-6 lg:mb-0 ">
        <h5 className="font-bold font-Roboto text-[24px] mt-5 md:mt-0 lg:mt-0 w-[320px] text-[#000000]">
          Trusted by 2000+ companies worldwide.
        </h5>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-6 lg:flex items-center justify-center w-full md:w-[800px] lg:w-[880px] h-[56px] gap-6 lg:gap-8 ">
        <Image
          src={"/images/Airbnb4 Logo.png"}
          alt="logo"
          width={123.8}
          height={38.52}
        />
        <Image
          src={"/images/Airbnb5 Logo.png"}
          alt="logo"
          width={123.8}
          height={38.52}
        />
        <Image
          src={"/images/Airbnb Logo.png"}
          alt="logo"
          width={123.8}
          height={38.52}
        />
        <Image
          src={"/images/Airbnb1 Logo.png"}
          alt="logo"
          width={123.8}
          height={38.52}
          className="hidden md:flex"
        />
        <Image
          src={"/images/Airbnb2 Logo.png"}
          alt="logo"
          width={123.8}
          height={38.52}
            className="hidden md:flex"
        />
        <Image
          src={"/images/Airbnb3 Logo.png"}
          alt="logo"
          width={123.8}
          height={38.52}
          className="hidden md:flex"
        />
      </div>
    </div>
  );
}
