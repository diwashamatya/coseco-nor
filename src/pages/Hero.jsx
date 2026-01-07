import HeaderShowcase from "../components/HeaderShowcase";
import Services from "../components/Services";
import ServicesTypography from "../components/ServicesTypography";
import CosecoServices from "../components/Shared/CosecoServices";
import PartnersMarquee from "../components/Shared/Marquee";
import RootLayout from "../Layouts/RootLayout";
import Test from "../components/Test";
import UseCases from "../components/UseCases/UseCases";
import PerspectiveScroll from "../components/PerspectiveScroll";  
import Features from "../components/Features/Features";


const Hero = () => {
  return (
    <>
     
     
      <Test />
      {/* <CosecoServices /> */}
      <PartnersMarquee />
      
      <HeaderShowcase />
    
      {/* <ServicesTypography /> */}
      <PerspectiveScroll />
      <UseCases />
      <Features />
     
     
    </>
  );
};

export default Hero;
