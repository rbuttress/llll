import Composition from '../components/Composition'
import { Context } from './context'
import './index.css'

function MyApp({ Component, pageProps }) {
  return (
  <Context>
    <Composition>
      <Component {...pageProps} />
    </Composition>
  </Context>
  )
}

export default MyApp
