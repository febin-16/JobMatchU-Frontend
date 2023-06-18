import React from 'react'

const MeetTheTeam = () => {
  return (
	<div>
	  	<div className='h-[50px] w-full flex justify-center bg-gray-300 rounded-md items-center'>
            <h1 className='text-2xl font-sans font-bold text-gray-500'>Our Team</h1>
        </div>
		<div className='flex flex-col md:px-40 px-4 py-4 md:pt-10 items-center'>

			<div className='flex flex-row'>
				<h1 className='text-2xl pr-2 py-2'>Team Members : </h1>
				<div>
					<h1 className='text-2xl font-semibold py-2'>Febin P Biju</h1>
					<h1 className='text-2xl font-semibold py-2'>Don Philip</h1>
					<h1 className='text-2xl font-semibold py-2'>Rizwan AT</h1>
					<h1 className='text-2xl font-semibold py-2'>Hains Dolichan</h1>
				</div>
			</div>
		</div>
	</div>
  )
}

export default MeetTheTeam
