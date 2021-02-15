import '../styles/globals.css'
import 'swiper/swiper.scss'
import { ThemeProvider } from 'styled-components'
import lightTheme from '../themes/light'
import darkTheme from '../themes/dark'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} /> 
    </ThemeProvider>
  )
}

export default MyApp
