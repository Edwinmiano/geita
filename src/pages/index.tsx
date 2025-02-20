import Head from 'next/head';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Testimonials } from '@/components/Testimonials';
import { Layout } from '@/components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Geita Investments Limited - Your Trusted Construction Materials Supplier</title>
        <meta name="description" content="Leading supplier of quality construction materials in the region. We offer cement, bricks, steel, timber, and more with reliable delivery and expert consultation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        <Features />
        <Testimonials />
      </Layout>
    </>
  );
}
