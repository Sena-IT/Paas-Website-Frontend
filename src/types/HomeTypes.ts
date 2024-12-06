export type HomeDataType={
    banner:BannerDataType[]
    id:number
    solutions:SolutionDataType
}


export type BannerDataType={
    id:number
    description:string
    image:ImageType
    heading:string
}

export type ImageType={
    id:number
    width:number
    height:number
    url:string
}


export type SolutionDataType={
    Description:string
    Heading:string
    Image:ImageType
    accordian_data:SolutionAccordianDataType[]
    id:number
}


export type SolutionAccordianDataType={
    id:number
    Heading:string
    Description:string
}