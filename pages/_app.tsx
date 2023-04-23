import '../styles/globals.css'
import RouterWrapper from '../components/RouteWrapper';
import Layout from '../components/Layout'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
  <Component {...pageProps} />
  </Layout>
  
  )
}

export default MyApp
