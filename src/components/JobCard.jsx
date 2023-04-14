import React, {useState} from 'react'
import { BiMoney } from "react-icons/bi";
import {BsBriefcaseFill} from "react-icons/bs";
import {FcLikePlaceholder, FcLike} from "react-icons/fc";
import {HiOutlineClipboardList} from "react-icons/hi";

// bg-gradient-to-r from-gray-400 to-gray-500
// bg-zinc-400 bg-blend-color
// bg-gradient-to-l from-zinc-400 via-zinc-300 to-zinc-400

function JobCard(){
	const [liked,setLiked] = useState(false);
  return (
    <div className='w-full h-auto pb-2 md:pr-2 flex flex-row justify-center'>	
		<div className="w-3/4 min-h-[300px] h-auto md:w-[400px] md:h-[300px] border border-solid rounded-xl p-4 bg-gray-200 hover:shadow-md drop-shadow-md hover:shadow-gray-400">
			<div className="flex justify-between items-center py-4 ">
				<h2 className="text-2xl font-bold text-gray-900 mr-4">Job Title</h2>
				<button className='' onClick={() => setLiked(!liked)}>
					{liked ? <FcLike className='w-10 h-10 '/> : <FcLikePlaceholder className='w-10 h-10 hover:animate-pulse '/>}
				</button>
			</div>
			<div className=''>
				<h3 className="flex flex-wrap text-xl font-large text-gray-900 pt-1">Company Name</h3>
				<h3 className="text-xl font-large text-gray-900 pb-1">Banglore, Karnataka</h3>
				
				<div className='flex flex-row flex-wrap space-x-2 pt-1'>
					<div className='flex px-1 bg-gray-300 rounded'>
						<BiMoney className='place-self-center mr-1'/>
						<span className="text-md font-medium text-grey">10000-11000</span>
					</div>
					<div  className='flex px-1 bg-gray-300 rounded'>
						<BsBriefcaseFill  className='place-self-center mr-1'/>
						<span className="text-md font-medium text-grey">Full Time</span>
					</div>
				</div>
				
				<div className='flex flex-row flex-wrap space-x-2 pt-2'>
					<div className='flex bg-gray-300 rounded'>
						<HiOutlineClipboardList className='place-self-center'/>
						<span>Tag 1</span>
					</div>
					<div className='flex bg-gray-300 rounded'>
						<HiOutlineClipboardList className='place-self-center'/>
						<span>Tag 2</span>
					</div>
					<div className='flex bg-gray-300 rounded'>
						<HiOutlineClipboardList className='place-self-center'/>
						<span>Tag 3</span>
					</div>

				</div>
				
			</div>
			<div className="flex justify-end pt-2">
				<button className="bg-gray-900 rounded-full px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-gray-500 focus:outline-none">View Details</button>
				
			</div>
		</div>

	</div>
  )
}

export default JobCard