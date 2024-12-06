import { HeaderNavigationLinks } from "./types";


export const BASE_APP_URL=process.env.NEXT_PUBLIC_APP_URL
export const NAV_LINKS:HeaderNavigationLinks[]=[
    {
        name:'Services',
        link:'#serviceSection'
    },
    {
        name:'About Us',
        link:'#aboutSection'
    },
    {
        name:'Contact Us',
        link:'#contactSection'
    },
    {
        name:'Blogs',
        link:'blogs'
    },
    {
        name:'Careers',
        link:'career'
    }
]