'use client'
import React from 'react'
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle,Button } from '@headlessui/react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import PhoneNumber from '@/app/components/ui/PhoneNumber'
import TextInput from '@/app/components/ui/TextInput'
import { run_sendEmail } from '@/app/services/email'
import AlertMsg from '@/app/components/ui/SucessMsg'
const ShareBookletDialog = (props:{
  isOpen:any
  close:any
  program_id:any
}) => {
    const [open, setOpen] = useState(true)
    const [sendOptions,setOption]=useState(1)
    const [phoneNumber,setPhoneNumber]=useState(0)
    const [email,setEmail]=useState("")
    const [sending,setSending]=useState(false)
    const [sendSuccess,setSucess]=useState(null)
    const [messages,setMessage]=useState("")
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
              defaultIndex={1}
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
            {sending==true?<div>sending</div>:<div></div>}
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
            <div className='p-3'>
      <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900">
        Messages
      </label>
      <div className="mt-2">
        <textarea
        value={messages}
        onChange={(e)=>{setMessage(e.target.value)}}
          id="comment"
          name="comment"
          rows={4}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
          defaultValue={''}
        />
      </div>
    </div>
            
            {sendSuccess==true?<AlertMsg status={true}></AlertMsg>:sendSuccess==false?<AlertMsg status={false}></AlertMsg>:null}
          
          </TabPanels>
        </TabGroup>
              </p>
              
              <div className="mt-4 flex justify-between">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={()=>{
                    setSucess(null)
                    props.close()

                  }}
                >
                  Cancel
                </Button>
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-rose-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-rose-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={async ()=>{
                    console.log("hi")
                    if(sendOptions==1){
                      setSending(true)
                      const jason= await  run_sendEmail(props.program_id,email,"hi",messages)
                      if(jason instanceof Error){
                        setSending(false)
                        setSucess(false)

                      }else{
                        setSending(false)
                        setSucess(true)

                      }

                    }else{
                      window.alert("SMS is not supported yet")

                    }
                    

                  }}
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