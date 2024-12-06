import HomeBanner from "@/components/home/sections/HomeBanner";
import Services from "@/components/home/sections/Services";
import { getHomeData } from "@/utils/action";


export default async function Home() {

  const homeData=await getHomeData()

  const bannerData=homeData?.banner[0]
  const serviceData=homeData?.solutions

  
  return (
    <div className="w-full flex-col flex">
      <HomeBanner data={bannerData}/>
      <Services data={serviceData}/>
    </div>
  );
}
