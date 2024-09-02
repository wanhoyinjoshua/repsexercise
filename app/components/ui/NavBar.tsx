'use client'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'
import { action_btn_accent,action_btn_color } from '@/constants/ui_style_tailwind'
import { useState } from 'react'

export default function Navbar() {
    const menuItems=[
        {href:"/ExerciseGallery",
            text:"Exercise Videos"

        },
        {href:"/",
            text:"Program Info"

        },
        {href:"/ChampionsBoard",
            text:"Champion Board"

        },
        {href:"https://researchers.mq.edu.au/en/persons/kate-scrivener",
          text:"Get in touch!"
        }


    ]

    const [isLoggedin,setLoggedin]=useState(false)
  return (
    <Disclosure as="nav" className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center md:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className={`group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-${action_btn_color}`}>
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <a href="/" className="flex flex-shrink-0 items-center">
              <img
                alt="REPS"
                src="/icon-48x48.png"
                className="h-8 w-auto"
              />
            </a>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              {menuItems.map((menu)=>{
                return <a
                key={menu.text}
                href={menu.href}
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
               {menu.text}
              </a>

              })}
             
            </div>
          </div>
          {isLoggedin&&
           <div className="flex items-center">
           <div className="flex-shrink-0">
             <button
               type="button"
               className={`relative inline-flex items-center gap-x-1.5 rounded-md bg-${action_btn_color} px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-${action_btn_accent} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${action_btn_color}`}
             >
               <PlusIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
               New Job
             </button>
           </div>
           <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
             <button
               type="button"
               className={`relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-${action_btn_color} focus:ring-offset-2`}
             >
               <span className="absolute -inset-1.5" />
               <span className="sr-only">View notifications</span>
               <BellIcon aria-hidden="true" className="h-6 w-6" />
             </button>

             {/* Profile dropdown */}
             <Menu as="div" className="relative ml-3">
               <div>
                 <MenuButton className={`relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-${action_btn_color} focus:ring-offset-2`}>
                   <span className="absolute -inset-1.5" />
                   <span className="sr-only">Open user menu</span>
                   <img
                     alt=""
                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                     className="h-8 w-8 rounded-full"
                   />
                 </MenuButton>
               </div>
               <MenuItems
                 transition
                 className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
               >
                 <MenuItem>
                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                     Your Profile
                   </a>
                 </MenuItem>
                 <MenuItem>
                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                     Settings
                   </a>
                 </MenuItem>
                 <MenuItem>
                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                     Sign out
                   </a>
                 </MenuItem>
               </MenuItems>
             </Menu>
           </div>
         </div>
          
          
          }
         
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 pb-3 pt-2">
          {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
          {menuItems.map((menu)=>{

            return  <DisclosureButton
            key={menu.text}
            as="a"
            href={menu.href}
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
          >
            {menu.text}
          </DisclosureButton>

          })}
          
         
        </div>
        {isLoggedin&&
         <div className="border-t border-gray-200 pb-3 pt-4">
         <div className="flex items-center px-4 sm:px-6">
           <div className="flex-shrink-0">
             <img
               alt=""
               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
               className="h-10 w-10 rounded-full"
             />
           </div>
           <div className="ml-3">
             <div className="text-base font-medium text-gray-800">Tom Cook</div>
             <div className="text-sm font-medium text-gray-500">tom@example.com</div>
           </div>
           <button
             type="button"
             className={`relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-${action_btn_color} focus:ring-offset-2`}
           >
             <span className="absolute -inset-1.5" />
             <span className="sr-only">View notifications</span>
             <BellIcon aria-hidden="true" className="h-6 w-6" />
           </button>
         </div>
         <div className="mt-3 space-y-1">
           <DisclosureButton
             as="a"
             href="#"
             className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
           >
             Your Profile
           </DisclosureButton>
           <DisclosureButton
             as="a"
             href="#"
             className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
           >
             Settings
           </DisclosureButton>
           <DisclosureButton
             as="a"
             href="#"
             className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
           >
             Sign out
           </DisclosureButton>
         </div>
       </div>
        
        }
       
      </DisclosurePanel>
    </Disclosure>
  )
}
