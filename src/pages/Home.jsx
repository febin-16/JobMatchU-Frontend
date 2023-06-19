import React from 'react'
import JobList from '../components/JobList'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
function Home({flag}) {
  return (
    <div className='w-full h-auto bg-gradient-to-r from-slate-800 to-slate-950 '>
       <HeroSection/>
      <JobList flag={flag}/>
      <Footer/>
    </div>
  )
}

export default Home