import '../styles/globals.css'
import RouterWrapper from '../components/RouteWrapper';
import {useRouter} from 'next/router';
import Layout from '../components/Layout'
import Layout2 from '../components/Layout2';
import { appWithTranslation } from 'next-i18next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GoogleAnalytics } from "nextjs-google-analytics";
function MyApp({ Component, pageProps }) {
  
  const router = useRouter();
  if(router.asPath =='/' || router.asPath =='/#downloads' ||router.asPath.startsWith('/Program')||router.asPath =='/test')  {
    return (

      <Layout2>
        <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
      </Layout2>
    )
 }
  return (
    <Layout>
      <GoogleAnalytics trackPageViews />
  <Component {...pageProps} />
  </Layout>
  
  )
}

export default appWithTranslation(MyApp)


export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}