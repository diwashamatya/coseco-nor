import HeaderShowcase from "../components/HeaderShowcase";
import Services from "../components/Services";
import ServicesTypography from "../components/ServicesTypography";
import CosecoServices from "../components/Shared/CosecoServices";
import PartnersMarquee from "../components/Shared/Marquee";

import Test from "../components/Test";


const Hero = () => {
  return (
    <>
     
     
      <Test />
      {/* <CosecoServices /> */}
      <PartnersMarquee />
      
      <HeaderShowcase />
    
      <ServicesTypography />
     
     
    </>
  );
};

export default Hero;
