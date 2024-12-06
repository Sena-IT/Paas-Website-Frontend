import React from 'react'
import { SectionPaddingLayout } from './type'
import { cn } from '@/lib/utils'

const SectionPadding:React.FC<SectionPaddingLayout> = ({children,className}) => {
  return (
    <div className={cn('py-[47px] md:py-[80px] ',className)}>
        {children}
    </div>
  )
}

export default SectionPadding