import React,{useState, useContext, useEffect} from 'react'
import { ModalContext } from '../context/ModalContextProvider';
import {Link,useLocation} from 'react-router-dom';
import {FcLikePlaceholder, FcLike} from "react-icons/fc";
import { BiMoney,BiUserPlus } from "react-icons/bi";
import {BsBriefcaseFill} from "react-icons/bs";
import {HiOutlineClipboardList} from "react-icons/hi";

function JobModal(){
  const [liked,setLiked] = useState(false);
  const {showModal,setShowModal} = useContext(ModalContext)
  const route = useLocation();
  console.log(route);
  useEffect(()=>{
    const path=route
    //let ind=route.lastIndexOf("/")
    //console.log(ind)
  })
  return (
    <div>
    {showModal&&<div
    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
			<div className="relative w-auto md:w-3/4 my-6 mx-auto max-w-5xl">
				{/*content*/}
				<div className="border-0 rounded-xl shadow-xl relative flex flex-col w-full bg-gray-300 outline-none focus:outline-none overflow-y-scroll  scroll-hidden" style={{ maxHeight: '80vh'}}>
					<div className="ml-8 relative p-6 flex-auto">
						<div className='w-auto flex flex-col'>
							<div className='flex flex-row justify-between items-center py-2'>
								<h1 className='font-bold font-sans text-3xl'>Job Title</h1>
								<div className='flex flex-row items-center pb-2'>
									<button className='bg-gray-900 rounded-full px-4 py-2 text-sm font-semibold text-slate-200 text-xl hover:bg-slate-600'>
									Apply Now
									</button>
									<button className='place-self-center px-2' onClick={() => setLiked(!liked)}>
									{liked ? <FcLike className='w-12 h-12 '/> : <FcLikePlaceholder className='w-12 h-12 hover:animate-pulse '/>}
									</button> 
								</div>     
							</div>
							<div className='py-2 ml-4'>
								<h1 className='text-xl font-semibold py-1'>Company Name</h1>
								<h1 className='text-lg py-1'>Chennai, Tamil Nadu</h1>
								<h1 className='text-lg py-1'>20000 a month</h1>
							</div>
						</div>
						<div className='border-t border-solid border-gray-400 py-2'>
							<h1 className='text-xl font-bold py-2'>Job Details</h1>
							<div className='flex ml-2 px-1 py-2'>
								<BiMoney className='w-5 h-5 place-self-center mr-1'/>
								<span className="text-lg space-x-2 font-medium text-gray">Salary</span>
							</div>
							<div className='py-2'>
								<h1 className='ml-8 inline-block bg-gray-300 rounded px-1 py-1 text-lg'> 20,000 per month</h1>
							</div>
							<div  className='flex ml-2 px-1 py-1'>
								<BsBriefcaseFill  className='w-5 h-5 place-self-center mr-1'/>
								<span className="text-lg space-x-2 font-medium text-gray">Job Type</span>
							</div>
							<div className='py-2'>
								<span className='ml-8 inline-block bg-gray-300 rounded px-1 py-1 text-lg'>Full-time</span>
							</div>
							<div  className='flex ml-2 px-1 py-2'>
								<HiOutlineClipboardList  className='w-5 h-5 place-self-center mr-1'/>
								<span className="text-lg space-x-2 font-medium text-gray">Tag 1</span>
							</div>
						</div>
						<div className='border-t border-solid border-gray-400 py-2'>
							<h1 className='text-xl font-bold py-2'>Full Description</h1>
							<p className='text-md ml-4 py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, quia, minus ullam distinctio deleniti repudiandae voluptatibus suscipit ad et tenetur ut magnam recusandae id modi ex. Quo id modi maxime.</p>
						</div>
						<div className='border-t border-solid border-gray-400 py-2'>
							<h1 className='text-xl font-bold py-2'>Hiring Insights</h1>
							<div className='flex flex-row py-2 ml-4'>
								<BiUserPlus className='w-6 h-6 place-self-center mr-1'/>
								<span className='text-lg space-x-2 text-gray'>Hiring 2 Candidates for this role</span>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-end p-6 border-t border-solid border-gray-400 rounded-b">
						<Link to={`${route.pathname.includes("Category")?'/Category':'/'}`}>
							<button
							className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
							type="button"
							onClick={() => setShowModal(false)}
							>
							Close
							</button>
						</Link>
					</div>
				</div>
			</div>
    </div>}
    <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
	</div>
  );
}

export default JobModal;