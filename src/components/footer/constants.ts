import { FooterLink } from "./type";

export const BASE_APP_URL=process.env.NEXT_PUBLIC_APP_URL
export const FOOTER_LINKS:FooterLink[]=[
    {
        name:'Terms and Conditions',
        link:'termsAndConditions'
    },
    {
        name:'Privacy Policy',
        link:'PrivacyPolicy'
    }
]


export const FOOTER_COMPANY_AND_YEAR='© 2024 · Sena Ai'