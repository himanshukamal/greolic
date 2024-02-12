import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IoIosArrowDown } from "react-icons/io";
import {
  GiTooth,
  GiToothbrush,
  GiStethoscope,
  GiHospital,
  GiFamilyHouse,
} from "react-icons/gi";

const FeatureCard = ({ title, description, icon, delay }) => {
  return (
    <div
      className="flex flex-col justify-center items-center rounded-[30px]  p-6 m-4 max-w-[340px]"
      style={{
        animationDelay: `1000s`,
        boxShadow:
          " inset 15px 15px 30px #d2d1cf,inset -15px -15px 30px #ffffff;",
        background: "linear-gradient(145deg, #d9d9b1, #ffffd3)",
      }}
    >
      {icon}
      <h3 className="text-xl font-semibold mb-2 text-[#372F62]">{title}</h3>
      <p className="text-sm text-center overflow-scroll text-[#372F62]">
        {description}
      </p>
    </div>
  );
};

const FeatureList = () => {
  const features = [
    {
      title: "Professional Dentists",
      description: "Experienced and skilled dentists for quality service.",
      icon: <GiStethoscope size={40} />,
      delay: 0.2,
    },
    {
      title: "Advanced Equipment",
      description:
        "State-of-the-art equipment for accurate diagnosis and treatment.",
      icon: <GiHospital size={40} />,
      delay: 0.4,
    },
    {
      title: "Personalized Care",
      description: "Tailored treatment plans to meet individual needs.",
      icon: <GiFamilyHouse size={40} />,
      delay: 0.6,
    },
    {
      title: "Modern Facility",
      description: "Comfortable and welcoming environment for patients.",
      icon: <GiTooth size={40} />,
      delay: 0.8,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          delay={feature.delay}
        />
      ))}
    </div>
  );
};

const DentistFeatures = () => {
  return (
    <div className="container mx-auto py-8 bg-[#fff]">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#372F62]">
        Our Features
      </h2>
      <FeatureList />
    </div>
  );
};

export default DentistFeatures;
