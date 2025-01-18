import React from "react";
import "@style/services.css";
import img from "@/constants/img";
import WhoWeAre from "./WhoWeAre";
import ServiceHome from "./ServiceHome";
import CustomCMS from "./CustomCMS";
import ToolsWeb from "./ToolsWeb";
import Languages from "./Languages";
import ContactForm from "../contact/ContactForm";
import ServicesSlider from "../(seo)/ServicesSlider";

const WebsiteDevelopment = () => {
  let data={
    title:"Web Development",
    dec:` Take your online presence to the next level. We specialize in     creating innovative and user-friendly websites tailored to your business needs. Let’s turn your ideas into reality.`,
    img:img.WebsiteDevelopmentSlider,
    title2:"Empowering Your Online Presence",
    dec2:" Social media has influenced enormous waves as a medium of communication and has risen as the best arena that has impacted different audiences from varied backgrounds and cultures. Our strategies for social media trigger your intended interest group and not simply mess the space with insufficient content. Our entire team has been consistently endeavoring to mark an impression and to become a native on Facebook, Pinterest, Instagram, Twitter, LinkedIn and Google+."
  }
  return (
    <>
      <ServicesSlider data={data} />
      <WhoWeAre />
      <ServiceHome />
      <CustomCMS />
      <ToolsWeb />
      <Languages />
      <div className="mb-5">
        <ContactForm />
      </div>
    </>

  );
};

export default WebsiteDevelopment;
