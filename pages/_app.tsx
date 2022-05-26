import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-bg w-full h-screen select-none'>
      <Head>
        <title>Todos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
