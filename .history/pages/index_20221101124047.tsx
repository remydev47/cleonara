import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { AboutUs, CTA, Hero, Offers, Pricing, Services, Blog, Stats, Steps, Testimonials, Footer } from '../components'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>CLEONARA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Offers />
      <AboutUs />
      <Steps />
      <Services />
      <Stats />
      <Pricing />
      <CTA />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home
