import Head from 'next/head'
import LandingScreen, { siteTitle } from '../components/LandingScreen'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <LandingScreen home>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Development playground used for experimental purposes.</p>
      </section>
      <h3>
        <p>
          Jump to{' '}
          <Link href="/posts/first-post">
            <a>First Post</a>
          </Link>
        </p>
        <p>
          Jump to{' '}
          <a href="/sign-in">NFT Platform</a>
        </p>
      </h3>
    </LandingScreen>
  )
}