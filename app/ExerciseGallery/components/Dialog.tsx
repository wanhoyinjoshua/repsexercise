'use client'
import React from 'react'
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle,Button } from '@headlessui/react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import PhoneNumber from '@/app/components/ui/PhoneNumber'
import TextInput from '@/app/components/ui/TextInput'
const ShareBookletDialog = (props:{
  isOpen:any
  close:any
}) => {
    const [open, setOpen] = useState(true)
    const [sendOptions,setOption]=useState(0)
    const [phoneNumber,setPhoneNumber]=useState(0)
    const [email,setEmail]=useState("")
    //0 is sms 
    //1 is email
    const categories = [
      {
        name: 'SMS',
        posts: [
          {
            id: 1,
            title: 'Does drinking coffee make you smarter?',
            date: '5h ago',
            commentCount: 5,
            shareCount: 2,
          },
          {
            id: 2,
            title: "So you've bought coffee... now what?",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
          },
        ],
        component:<PhoneNumber inputValue={phoneNumber} setParentInput={setPhoneNumber}/>
      },
      {
        name: 'Email',
        posts: [
          {
            id: 1,
            title: 'Does drinking coffee make you smarter?',
            date: '5h ago',
            commentCount: 5,
            shareCount: 2,
          },
          {
            id: 2,
            title: "Email",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
          },
        ],
        component:<TextInput inputValue={email} setParentInput={setEmail}/>
      }
    
    ]
  return (
    <Dialog open={props.isOpen} as="div" className="relative z-50 focus:outline-none" onClose={close}>
      <DialogBackdrop className="fixed inset-0 bg-black/75" />
        <div className="  fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex  min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full opacity-100 max-w-md rounded-xl text-black p-6 bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-black">
                Share your Exercise Video Booklet
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-black/50">
              <TabGroup
              onChange={(index) => {
                setOption(index)
                console.log('Changed selected tab to:', index)
              }}
              >
          <TabList className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold  focus:outline-none data-[selected]:bg-rose-800/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-rose/10 data-[focus]:outline-1 data-[focus]:outline-rose-800"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ name, posts,component }) => (
              <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                <ul>
                {component}
                  {posts.map((post) => (
                    <div key={post.id} className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5">
                     <section>
                      
                     </section>
                    </div>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
              </p>
              <div className="mt-4 flex justify-between">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={props.close}
                >
                  Cancel
                </Button>
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={props.close}
                >
                  Share via {sendOptions==0?"SMS":"Email"}
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
  )
}

export default ShareBookletDialog