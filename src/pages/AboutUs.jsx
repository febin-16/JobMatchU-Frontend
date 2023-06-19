import React from 'react'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
	<div className='bg-gray-950'>
		<div className='h-[50px] w-full flex justify-center bg-gray-900  rounded-md items-center'>
                <h1 className='text-2xl font-sans font-bold text-gray-100'>About Us</h1>
        </div>
		<div className='md:px-40 p-4'>
			<p className='text-lg py-2 text-justify text-gray-100'>
				At JobMatchU, our mission is to connect students with part-time job opportunities, empowering them to gain valuable experience while pursuing their education. We understand the challenges that students face in finding suitable employment that aligns with their skills, schedule, and career aspirations. Therefore, we have created an innovative platform that bridges the gap between job seekers and job providers, making the process seamless and efficient.			
			</p>
			<p className='text-lg py-2 text-justify text-gray-100'>
				With JobMatchU, students can easily create profiles, showcasing their personal details, educational qualifications, and professional achievements. They have access to a comprehensive job listing where they can search for part-time opportunities that match their interests and eligibility criteria. We believe that every job is an opportunity for growth, and our platform aims to present students with a wide range of positions, including both technical and non-technical roles.			
			</p>
			<p className='text-lg py-2 text-justify text-gray-100'>
				On the other side, we provide a platform for job providers, including companies, shop owners, and individuals, to easily post part-time job openings. Our system allows them to specify job details such as duration, salary, and requirements. Job providers can review student profiles, including ratings and previous work experiences, enabling them to make informed decisions when selecting the right candidates for their job openings.			
			</p>
			<p className='text-lg py-2 text-justify text-gray-100'>
				At JobMatchU, we prioritize the security and privacy of our users. We have implemented robust security measures to safeguard personal information and ensure a safe and trustworthy environment for both students and job providers.			
			</p>
			<p className='text-lg py-2 text-justify text-gray-100'>
				Join us today and unlock a world of opportunities. JobMatchU is committed to supporting students in their journey towards professional growth and success.			
			</p>

		</div>
	  <Footer/>
	</div>
  )
}

export default AboutUs
