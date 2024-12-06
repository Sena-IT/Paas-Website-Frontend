import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import React from 'react'
import { NAV_LINKS } from '../constants'

const MobileSideBar = () => {
  return (
    <Sheet>
        <SheetTrigger asChild className='sm:hidden'>
            <Menu className='w-8 h-8 text-white cursor-pointer'/>
        </SheetTrigger>
        <SheetContent className='bg-[#2f2f2f] shadow-lg border-0 ring-0'>
            <SheetTitle className='hidden'></SheetTitle>
            <ul className='space-y-6 text-white mt-16'>
                {
                    NAV_LINKS.map((item,i)=>(
                        <li  
                        key={i}
                        role="presentation"
                        className="">
                           <span className='cursor-pointer font-sora text-[16px]  hover:text-gray-300/60 transition-colors duration-500 hover:transition-colors hover:duration-500'>
                           {item.name}
                           </span>
                        </li>
                    ))
                }
            </ul>
        </SheetContent>
    </Sheet>
  )
}

export default MobileSideBar