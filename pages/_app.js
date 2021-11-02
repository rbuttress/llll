import Composition from '../components/Composition'
import './index.css'

function MyApp({ Component, pageProps }) {
  return (
    <Composition>
      <Component {...pageProps} />
    </Composition>
  )
}

export default MyApp
