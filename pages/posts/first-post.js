import Head from 'next/head'
import Layout from '../../components/LandingScreen'
import Link from 'next/link'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Under Development</h1>
      <h2>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}