import React,{useState} from 'react'
import ReactCountryFlag from "react-country-flag"
import Link from "next/link"
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router';
    
const HeaderNav = () => {
    const { t } = useTranslation()
    const router = useRouter();
  const { locale } = router;
    
    const [showdropdown, setDrop] = useState(false);
    const [country,setCountry]=useState("AU")
    const mapcountry={
        'AU':"English (AUS)",
        "VI":"Tiếng Việt",
        "AR":"العربية",
        "HK":"中文 (繁體)"
    }

    function togglebutton(){
        setDrop(!showdropdown)

    }
  return (
    <div>
        
        
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center">
      <img src="/icon-48x48.png" className="h-8 mr-3" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">REPS</span>
  </a>
  
  <div className="flex items-center md:order-2 relative">
      <button type="button" onClick={togglebutton}   data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
      <ReactCountryFlag countryCode={locale.toUpperCase()}svg />
        {mapcountry[locale.toUpperCase()]}
      </button>
      
      <div className={`z-50 ${showdropdown?"":"hidden"} absolute top-full left-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700`} id="language-dropdown-menu">
        <ul className="py-2 font-medium" role="none">
        <li>
          <Link onClick={()=>{setCountry("AU")}} href="/" locale="au" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
              <div className="inline-flex items-center">
              <ReactCountryFlag countryCode="AU" svg />
                English(AUS)
              </div>
            </Link>
          </li>
          <li>
          <Link onClick={()=>{setCountry("VI")}} href="/" locale="vi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
              <div className="inline-flex items-center">
              <ReactCountryFlag countryCode="VI" svg />
                Tiếng Việt
              </div>
            </Link>
          </li>
          <li>
          <Link onClick={()=>{setCountry("AR")}} href="/" locale="ar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
              <div className="inline-flex items-center">
              <ReactCountryFlag countryCode="AR" svg />
                العربية
              </div>
            </Link>
          </li>
          
          <li>
            <Link onClick={()=>{setCountry("HK")}} href="/" locale="hk" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
              <div className="inline-flex items-center">
              <ReactCountryFlag countryCode="HK" svg />
                中文 (繁體)
              </div>
            </Link>
          </li>
        </ul>
      </div>

     
  </div>

  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-language-select">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="/" className="block py-2 pl-3 pr-4 text-white bg-rose-700 rounded md:bg-transparent md:text-rose-700 md:p-0 md:dark:text-rose-500" aria-current="page">{t('nav_home')}</a>
      </li>
      <li>
        <a href="/Push" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0 dark:text-white md:dark:hover:text-rose-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">PUSH</a>
      </li>
      <li>
        <a href="/Task" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0 dark:text-white md:dark:hover:text-rose-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">TASK</a>
      </li>
      <li>
        <a href="/Program_info" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0 dark:text-white md:dark:hover:text-rose-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{t('nav_info')}</a>
      </li>
      <li>
        <a href="#downloads" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0 dark:text-white md:dark:hover:text-rose-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{t('nav_downloads')}</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  
  </div>
  )
}

export default HeaderNav

