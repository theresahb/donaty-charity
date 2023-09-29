import React from 'react'
import Heading from '../../components/Heading/Heading'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Services from '../../components/Servicess/Services'
import Articles from '../../components/Articles/Articles'
import Testimony from '../../components/Testimony/Testimony'
import Donate from '../../components/Donate/Donate'
import Statistics from '../../components/Statistics/Statistics'
import Answers from '../../components/Answers/Answers'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <main>
      <Heading />
      <Hero />
      <About />
      <Services />
      <Articles />
      <Testimony />
      <Donate />
      <Statistics />
      <Answers />
      <Footer />
    </main>
  )
}

export default Home
