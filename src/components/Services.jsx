import React from "react";
import feature from "../assets/features.png";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-16">
        <h1 className="text-center text-blue-800 tracking-wider uppercase wow fadeInUp">
          Services
        </h1>
        <h1 className="text-center text-4xl font-bold text-blue-900 wow fadeInUp">
          We provide quality service
        </h1>
        <div className="px-4 md:px-0 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 py-10">
            <div className="flex col-span-2 md:col-span-1 mt-5">
              <img className="mx-auto wow zoomIn" src={feature} alt="" />
            </div>
            <div className="col-span-2 md:col-span-1 px-0 md:px-10 mt-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <ServiceCard title="Last Mile operations" />
                <ServiceCard title="E-commerce" />
                <ServiceCard title="Proctoring" />
                <ServiceCard title="Web Desigining" />
                <ServiceCard title="Due digilence" />
                <ServiceCard title="Business Development" />
                <ServiceCard title="On Field Audit" />
                <ServiceCard title="Tele Calling" />
                <ServiceCard title="On field Invigilation" />
                <ServiceCard title="Ed-Tech" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
