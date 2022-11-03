import { CameraIcon, PlusCircleIcon } from '@heroicons/react/20/solid'
import {  ChatBubbleLeftRightIcon, CheckBadgeIcon, Cog6ToothIcon, MegaphoneIcon, StarIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const navigation=[
        {id:1, name:'Management', icon:<StarIcon/>, href:'#', current:false,},
        {id:2, name:'Design', icon:<CameraIcon/>,  href:'/design', current:true,},
        {id:3, name:'Development', icon:<Cog6ToothIcon/>, href:'#', current:false,},
        {id:4, name:'Quality assurance', icon:<CheckBadgeIcon/>, href:'#', current:false,},
        {id:5, name:'Marketing', icon:<MegaphoneIcon/>, href:'#', current:false,},
        {id:5, name:'Sales', icon:<ChatBubbleLeftRightIcon/>, href:'#', current:false,},
    ]
    return (
    <div className=' flex  bg-orange-50 h-12 border-y-2   border-orange-100  text-gray-500 font-medium   pl-10'>
        <div className='basis-2/3 space-x-8'>
        {navigation.map((item, idx)=>(
            <Link href={item.href} key={idx}>
            <div className={` ${ item.current && 'bg-orange-100 h-full '}  inline-flex p-2    space-x-2 whitespace-nowrap font-medium`}>
            <p className='w-6 h-6 text-orange-300'>{item.icon}</p>
            <span className=''>{item.name}</span>
            </div>
            </Link>
           
           ))}
           </div>
        <div className='  basis-1/3 space-y-4     '>
            <div className='flex justify-end mr-4 pt-2  '>

            <button >Add a new team</button>
            <PlusCircleIcon className='text-orange-300 w-6 h-6 ml-1 '/>
            </div>
        </div>

    </div>
  )
}
