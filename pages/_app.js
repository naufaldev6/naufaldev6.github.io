import '@/styles/globals.css'
import i18n from '../i18n'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  if (router.locale) {
    i18n.changeLanguage(router.locale)
  }
  
  return <Component {...pageProps} />
}
