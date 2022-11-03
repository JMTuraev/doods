import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const navigation=[
        {id:1, name:'Specialists', href:'#', current:false,},
        {id:2, name:'Recommendations', href:'#', current:false,},
        {id:3, name:'Progress', href:'#', current:true,},
        {id:4, name:'Courses', href:'#', current:false,},
    ]
  return (
    <Popover className="relative ">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-20 lg:flex ">
          <a href="#">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-neutral-100 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden space-x-10 md:flex">
     
        {navigation.map((item, idx)=>(
            <Link href={item.href} key={idx}>
                <p className={` ${ item.current ? 'font-bold' : 'font-medium'}  text-base  text-gray-500 hover:text-gray-900`}>
                    {item.name}
                </p>
            </Link>
         ))}
       
       


        </Popover.Group>
        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 space-x-6">
        <div className="relative mt-1 rounded-sm shadow-sm">
        <input
        type="email"
        name="search"
        id="search"
        className="block w-full rounded-md border-gray-300 bg-neutral-100 focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
        placeholder="Search"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
        <a href="#" className="whitespace-nowrap text-md font-medium  text-gray-500 hover:text-gray-900">
            Help
        </a>
          <a href="#" className="whitespace-nowrap text-md font-medium text-gray-500 hover:text-gray-900">
            My account
          </a>
          <img
          className="inline-block h-12 w-12 rounded-full  ring-2 ring-cyan-500 ring-offset-2"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-neutral-100 shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-neutral-100 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
              {navigation.map((item, idx)=>(
                <Link href={item.href} key={idx}>
                    <p className={` ${ item.current ? 'font-bold' : 'font-medium'}  text-base font-medium text-gray-900 hover:text-gray-700`}>
                        {item.name}
                    </p>
                </Link>
             ))}

             
       
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-cyan-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-cyan-600 hover:text-cyan-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
