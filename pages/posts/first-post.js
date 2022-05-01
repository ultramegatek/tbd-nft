import Head from 'next/head'
import Layout from '../../components/LandingScreen'
import Link from 'next/link'

import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function FirstPost() {
  const { width, height } = useWindowSize()

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={500}
        recycle={false}
      />
      <h1>Under Development</h1>
      <h2>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}