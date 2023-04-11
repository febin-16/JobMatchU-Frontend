import React from 'react'
import JobList from '../components/JobList'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
function Home() {
  return (
    <div className='w-full h-auto'>
       <HeroSection/>
      <JobList/>
      <Footer/>
    </div>
  )
}

export default Home