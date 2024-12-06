import PaddedLayout from "@/components/wrapper/PaddedLayout";
import Image from "next/image";
import React from "react";
import { BANNER_TEXT, BASE_URL } from "../constants";
import { HomeBannerType } from "../type";



const HomeBanner:React.FC<HomeBannerType> = ({data}) => {

  return (
    <div className="w-full h-full">
      <PaddedLayout className="my-2 h-full">
        <div
          className="w-full h-[96%] mb-[34px] xl:h-[73vh] rounded-[25px] max-w-[1468px] responsiveWidth mx-auto relative overflow-hidden
        
        "
        >
          <img
            src={`${BASE_URL}${data?.image.url}`}
            alt="bannerImg"
            className="object-cover w-full h-full "
          />

          <div
            className="absolute inset-0 top-0 left-0 z-10 opacity-60"
            style={{
              background:
                "linear-gradient(71.36deg, #000000 31.72%, #666666 131.95%)",
            }}
          ></div>

        
          <div className="absolute bottom-4 z-10 text-[6vw] md:text-[5vw] lg:text-[4vw] font-sora font-semibold leading-[8vw] md:leading-[6vw] lg:leading-[5.3vw] text-left text-white">
            <div className="md:w-[50%] lg:w-[60%] w-[65%] py-[25px] px-[26px] md:py-[50.08px] lg:px-[40px] lg:py-[36.42px] lg:pr-[64.37px] xl:pl-[100px]">
              <p className="">{data?.heading}</p>
            </div>
          </div>
        </div>
      </PaddedLayout>
    </div>
  );
};

export default HomeBanner;
