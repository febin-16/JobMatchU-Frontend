import React from 'react'
import JobCard from './JobCard'

function JobList(){
  return (
    <div className='h-auto w-full p-5'>
      <h2 className='text-4xl md:text-5xl font-medium flex justify-center'>OUR TOP PICKS</h2>
      <div className=' w-full'>
        <h3 className='py-4 text-3xl md:text-4xl font-medium flex justify-center md:justify-start'>Suggested For You</h3>
          <div className='flex flex-col md:flex-row overflow-y-scroll md:overflow-x-scroll scroll-hidden' style={{ maxHeight: '54vh' }}>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
          </div>
      </div>
      <div className=' w-full'>
        <h3 className='py-4 text-3xl md:text-4xl font-medium flex justify-center md:justify-start'>Best of Development</h3>
          <div className='flex flex-col md:flex-row overflow-y-scroll md:overflow-x-scroll scroll-hidden' style={{ maxHeight: '54vh' }}>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
          </div>
      </div>
      <div className=' w-full'>
        <h3 className='py-4 text-3xl md:text-4xl font-medium flex justify-center md:justify-start'>Best of Teaching</h3>
          <div className='flex flex-col md:flex-row overflow-y-scroll md:overflow-x-scroll scroll-hidden' style={{ maxHeight: '54vh' }}>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
          </div>
      </div>
    </div>
  )
}

export default JobList