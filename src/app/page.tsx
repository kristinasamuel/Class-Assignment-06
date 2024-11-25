import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";
import HeroSection from "@/components/HeroSection";
import Logos from "@/components/Logos";
import Categoryes from "@/components/Category";
import Achievements from "@/components/Achievements";
import Courses from "@/components/Courses";
import OurTeam from "@/components/OurTeam";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

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
