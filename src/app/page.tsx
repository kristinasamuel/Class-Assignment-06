import Achievements from "@/components/Achievements";
import Categoryes from "@/components/Category";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import HeaderMain from "@/components/HeaderMain";
import HeaderTop from "@/components/HeaderTop";
import HeroSection from "@/components/HeroSection";
import Logos from "@/components/Logos";
import OurTeam from "@/components/OurTeam";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
        <HeaderTop/>
        <HeaderMain/>
        <HeroSection/>
        <Logos/>
        <Categoryes/>
        <Achievements/>
        <Courses/>
        <OurTeam/>
        <Testimonials/>
        <Footer/>

    </div>
  );
}
