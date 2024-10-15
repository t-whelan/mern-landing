import Image from "next/image";
import Navbar from "./components/NavBar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import CoursesOffered from "./components/CoursesOffered";
import CourseCover from "./components/CourseCover";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer"



export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <CoursesOffered />
      <CourseCover />
      <FaqSection />
      <Footer />
      
    </>
  );
}
