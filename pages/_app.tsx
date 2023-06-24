import '../styles/globals.css'
import RouterWrapper from '../components/RouteWrapper';
import {useRouter} from 'next/router';
import Layout from '../components/Layout'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if(router.asPath =='/')  {
    return (
      <Component {...pageProps} />
    )
 }
  return (
    <Layout>
  <Component {...pageProps} />
  </Layout>
  
  )
}

export default appWithTranslation(MyApp)
