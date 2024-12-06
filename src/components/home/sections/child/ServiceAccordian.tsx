import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { SERVICE_ACCORDIAN } from "../../constants";
import { AccordianDataType } from "../../type";

const ServiceAccordian:React.FC<AccordianDataType> = ({data}) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {data?.map((item, i) => (
        <AccordionItem value={item.Heading} key={i}>
          <AccordionTrigger className="hover:no-underline text-lg md:text-xl font-normal font-sora">
            {item.Heading}
          </AccordionTrigger>
          <AccordionContent className="font-jakarta text-sm md:text-md pl-12 text-wrap">
            {item.Description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ServiceAccordian;
