import React from 'react'
import PaddedLayout from '../wrapper/PaddedLayout'
import Link from 'next/link'
import { BASE_APP_URL, FOOTER_COMPANY_AND_YEAR, FOOTER_LINKS } from './constants'


const Footer = () => {
  return (
    <div className='w-full'>
        <PaddedLayout className='max-w-[1468px] mx-auto
        xl:max-w-[1200px]  
        2xl:max-w-[1400px] 
        [@media_(min-width:1800px)]:max-w-[1700px] 
        lg:max-w-[1100px]  
        md:max-w-[800px]   
        md:w-[90%]'>
          <div className="flex flex-col gap-5 md:flex-row items-center justify-between py-[45px]  md:pt-[80px]  lg:pt-[127px] md:pb-[30px] w-full">
            <div className=" flex w-full justify-center md:contents">
              {
                FOOTER_LINKS.map((item,i)=>(
                <div className="text-center w-1/2 text-white md:w-1/3 space-x-5 md:space-x-8 font-sora font-normal text-[12px] md:text-[16px] lg:leading-[20.16px]"
                key={i}
                >
                    <a href={`${BASE_APP_URL}${item.link}`}
                    className="cursor-pointer">
                      {item.name}
                    </a>
                </div>
                ))
              }
            </div>
            <div className="text-center w-full text-white md:w-1/3 space-x-5 md:space-x-8 font-sora font-normal text-[12px] md:text-[16px] lg:leading-[20.16px]">
              <p className="cursor-pointer">{FOOTER_COMPANY_AND_YEAR}</p>
            </div>
          </div>
        </PaddedLayout>
    </div>
  )
}

export default Footer