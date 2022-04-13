import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  <Head>
    <title>Todoist Eisenhower</title>
    <link rel="shortcut icon" href="/todoisticon.ico" />
  </Head>

  return <Component {...pageProps} />
}

export default MyApp
