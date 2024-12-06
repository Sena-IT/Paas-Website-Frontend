import { BannerDataType, SolutionAccordianDataType, SolutionDataType } from "@/types/HomeTypes"

export type AccordianData={
    heading:string
    data:string
}


export type HomeBannerType={
    data?:BannerDataType
}


export type ServiceSolutionType={
    data?:SolutionDataType
}

export type AccordianDataType={
    data?:SolutionAccordianDataType[]
}