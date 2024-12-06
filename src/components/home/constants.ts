import { AccordianData } from "./type"

export const BANNER_TEXT='Sourcing Pilots for your Robotic Fleet'


export const SERVICE_ACCORDIAN:AccordianData[]=[
    {
        heading:'Low Latency',
        data:"Our solution includes not only sourcing expert pilots but also providing a robust network infrastructure to ensure seamless operations. We leverage India's premier internet infrastructure, offering speeds up to 10 Gbps and achieving latency as low as 170 ms to the U.S. West Coast."
    },
    {
        heading:'Competetive Pricing',
        data:"Robot Pilot Talent in the US / Europe costs anywhere between $12-25/hour. Robot foundation models will require millions of hours of data. We can provide more than 50-80% cost savings."
    },
    {
        heading:'Rapid Scaling',
        data:"Managing a remote workforce in the complex regulatory framework in India is daunting. We provide an easy interface to scale your pilot pool rapidly. Ability to run data collection operations 24/7 ."
    }
]


export const BASE_URL=process.env.NEXT_PUBLIC_API_URL