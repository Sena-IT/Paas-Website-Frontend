'use server'

import { HomeDataType } from "@/types/HomeTypes";
import axios, { AxiosError } from "axios";
import { GET_HOMEDATA_API_URL } from "./api";

const BASE_URL=process.env.NEXT_PUBLIC_API_URL
export const getHomeData=async():Promise<HomeDataType|null>=>{

    'use server'

    const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${BASE_URL}${GET_HOMEDATA_API_URL}`,
        headers: {},
      };
try {
    const response=await axios.request(config)
    const data:HomeDataType=response.data.data
    return data
} catch (error) {
    console.log(error)
    return null
}

}