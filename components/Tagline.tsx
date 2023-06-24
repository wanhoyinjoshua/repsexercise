import React from 'react'
import Videobutton from './videobutton'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Tagline = () => {
    const { t } = useTranslation()
  return (
    <div>
     
<section className="overflow-hidden bg-white sm:grid sm:grid-cols-2 h-full">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div
      className="mx-auto max-w-xl text-center "
    >
      <h2 className="text-2xl font-bold text-grey-100 md:text-3xl">
      {t('tagline')}
      
      </h2>

      <p className="hidden  text-grey-100 md:mt-4 md:block">
      {t('tagdescription')}
      
      </p>

      <div className="mt-4 md:mt-8 ">
        <section className='flex flex-col gap-y-0.5'>
            <div  className='flex flex-row gap-x-0.5'>
            <Videobutton link={"/Push"} content={t('push_button_word')}></Videobutton>
            <Videobutton link={"/Task"} content={t('task_button_word')}></Videobutton>

            </div>
     
     
     

        </section>
       
      </div>
    </div>
  </div>

  <img
    alt="Student"
    src="/logo.png"
    className="h-56 w-full object-cover sm:h-full"
  />
</section>
    </div>
  )
}

export default Tagline

