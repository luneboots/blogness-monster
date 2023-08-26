import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi! I'm Alexandra Gross, a software engineer. Welcome to my sample blog where I showcase my use of Vercel and Next.js. [Under Development]</p>
        <p>
          (This is a sample website - you can find my portfolio at {' '}
          <a href="https://www.mymoonboots.com">mymoonboots</a>.)
        </p>
      </section>
    </Layout>
  );
}