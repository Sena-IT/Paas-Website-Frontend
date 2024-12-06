import PaddedLayout from "@/components/wrapper/PaddedLayout";
import SectionPadding from "@/components/wrapper/SectionPadding";
import React from "react";
import ServiceAccordian from "./child/ServiceAccordian";
import { ServiceSolutionType } from "../type";
import { BASE_URL } from "../constants";

const Services:React.FC<ServiceSolutionType> = ({data}) => {

  return (
    <div
      className="w-full  border-b border-white mt-4 xl:mt-0"
      style={{
        background: "linear-gradient(90deg, #666666 -60%, #000000 80%)",
      }}
    >
      <PaddedLayout className="max-sm:px-6">
        <div className="max-w-[1468px] responsiveWidth mx-auto">
          <SectionPadding>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-[30px]  md:gap-[40px] lg:gap-[60px] w-full">
              <div className="col-span-1 w-full h-full">
                <div className="space-y-4">
                  <h2 className="font-sora text-[32px] md:text-[52px] lg:text-[60px] font-semibold leading-[50.4px] md:leading-[65.52px] lg:leading-[75.6px] text-left">
                   {data?.Heading}
                  </h2>

                  <p className="font-jakarta text-justify md:text-left text-sm md:text-md lg::text-lg  font-normal ">
                   {data?.Description}
                  </p>
                </div>

                <div className="lg:mt-24 md:mt-16 mt-12">
                    <ServiceAccordian data={data?.accordian_data}/>
                </div>


                <div className="lg:mt-24 md:mt-16 mt-12 flex justify-start">
                    <button className="md:px-6 md:py-4 py-3 px-4 text-center bg-yellow-400 text-black font-sora font-medium rounded-full">
                        Learn more
                    </button>
                </div>

                
              </div>

              <div className="col-span-1 h-full w-full">
                <div className="w-full overflow-hidden rounded-[25px]">
                    <img
                    src={`${BASE_URL}${data?.Image.url}`}
                    className="object-cover "
                    />
                </div>
              </div>
            </div>
          </SectionPadding>
        </div>
      </PaddedLayout>
    </div>
  );
};

export default Services;
