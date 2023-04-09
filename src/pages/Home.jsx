import React from 'react'
import JobList from '../components/JobList'
import HeroSection from '../components/HeroSection'
function Home() {
  return (
    <div className='w-full h-auto'>
       <HeroSection/>
      <JobList/>
    </div>
  )
}

export default Home