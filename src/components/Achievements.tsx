export default function Achievements() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[500px] md:h-[400px] lg:h-[488px] overflow-hidden">
      <div className="h-[264px] text-center">
        <h2 className="font-Roboto font-bold text-[32px] lg:text-[48px] ">Our Achivements</h2>
        <p className="font-Roboto font-normal text-[18px] text-center w-full lg:w-[1152px] hidden lg:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
         <p className="font-Roboto font-normal text-[18px] text-center w-[362px] mt-6 flex lg:hidden ">  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[24px] mt-10 lg:mt-16">
          <div>
            <h3 className="text-[40px] font-bold font-Roboto text-[#000000]">
              +200
            </h3>
            <p className="text-[16px] font-normal font-Roboto text-[#000000]">
              Courses
            </p>
          </div>
          <div>
            <h3 className="text-[40px] font-bold font-Roboto text-[#000000]">
              50K
            </h3>
            <p className="text-[16px] font-normal font-Roboto text-[#000000]">
              Mentors
            </p>
          </div>
          <div>
            <h3 className="text-[40px] font-bold font-Roboto text-[#000000]">
              370k
            </h3>
            <p className="text-[16px] font-normal font-Roboto text-[#000000]">
              Students
            </p>
          </div>
          <div>
            <h3 className="text-[40px] font-bold font-Roboto text-[#000000]">
              100+
            </h3>
            <p className="text-[16px] font-normal font-Roboto text-[#000000]">
              Recognition
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
