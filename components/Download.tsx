import React from 'react'
import { useTranslation } from 'next-i18next'
import { SiApple, SiAndroid } from 'react-icons/si';
const Download = () => {
    const { t } = useTranslation()
  return (
    <div id="downloads"><section className="bg-gray-50">
    <div
      className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
    >
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
        {t('secondtag_1')}<br></br>
          <strong className="font-extrabold text-red-700 sm:block">
          {t('secondtag_2')}
          </strong>
        </h1>
  
        <p className="mt-4 sm:text-xl/relaxed">
            {t('downloaddescription')}
         
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            href="https://play.google.com/store/apps/details?id=katescrivener.repsrecoveryexercises&hl=en_AU&gl=US&pli=1"
            target='_blank'
          >
           
      <SiAndroid size={32} />
            Android
          </a>
          
          <a
            className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
            href="https://apps.apple.com/us/app/reps-recovery-exercises/id1453626110"
            target='_blank'
          >
             <SiApple size={32} />
            Apple
          </a>
         
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Download