import React from 'react'
import { PaddedLayoutType } from './type'
import { cn } from '@/lib/utils'

const PaddedLayout:React.FC<PaddedLayoutType> = ({children,className}) => {
  return (
    <div className={cn('sm:px-5 px-2',className)}>
        {children}
    </div>
  )
}

export default PaddedLayout