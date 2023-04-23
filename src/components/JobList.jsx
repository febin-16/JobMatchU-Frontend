import React, { useState, useContext, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import JobCard from "./JobCard";
import { UserContext } from '../context/UserContextProvider';
import { ModalContext } from "../context/ModalContextProvider";
import { JobContext } from "../context/JobContextProvider";
import { ModalDataContext } from "../context/ModalDataContextProvider";
import { getJobDetails } from "../api/GetJobDetails";
import { WishlistDetails } from "../api/WishlistDetails";
import { FcLike } from "react-icons/fc";
import { BiMoney, BiUserPlus } from "react-icons/bi";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { ProfileContext } from "../context/ProfileContextProvider";

function JobList() {
  const { showModal, setShowModal } = useContext(ModalContext);
  const { job, setJob } = useContext(JobContext);
  const {showDataModal,setShowDataModal} = useContext(ModalDataContext);
  const {user} = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    async function getJobData() {
      try {
        const jobs = await getJobDetails();
        setJob(jobs);
      } catch (error) {
        console.log(error);
      }
    }
    getJobData();
  }, [setShowModal]);
  const handleModel = (j) => {
    setShowDataModal(j);
    setShowModal(true);
    console.log(j);
  };
   async function handleWishlist(){
  const profileInfo = JSON.parse(localStorage.getItem('ProfileInfo'));
  const job_id = showDataModal.id;
  const owner_id = showDataModal.owner
  if(profileInfo!= " ")
  {
     try {
       await WishlistDetails(job_id,owner_id,user,1);
     } catch (error) {
       alert("Removed from wishlist");
       console.log(error);
     }
  }
  else
  {
    alert("Complete the profile to Wishlist :)");
    navigate('/Profile');
  }  
  }
  return (
    <div className="h-auto w-full p-5">
      <h2 className="text-4xl md:text-5xl font-medium flex justify-center">
        OUR TOP PICKS
      </h2>
      <div className=" w-full">
        <h3 className="py-4 text-3xl md:text-4xl font-medium flex justify-center md:justify-start">
          Suggested For You
        </h3>
        <div
          className="flex flex-col md:flex-row overflow-y-scroll md:overflow-x-scroll scroll-hidden"
          style={{ maxHeight: "54vh" }}
        >
          {job &&
            job.map((j) => {
              return (
                <div onClick={()=>handleModel(j)} key={j.id}>
                  <JobCard job={j} />
                </div>
              );
            })}
        </div>
      </div>
      <div className=" w-full">
        <h3 className="py-4 text-3xl md:text-4xl font-medium flex justify-center md:justify-start">
          Best of Development
        </h3>
        <div
          className="flex flex-col md:flex-row overflow-y-scroll md:overflow-x-scroll scroll-hidden"
          style={{ maxHeight: "54vh" }}
        >
          {job &&
            job.map((j) => {
              return (
                <div onClick={()=>handleModel(j)} key={j.id}>
                  <JobCard job={j} />
                </div>
              );
            })}
        </div>
      </div>
      <div className=" w-full">
        <h3 className="py-4 text-3xl md:text-4xl font-medium flex justify-center md:justify-start">
          Best of Teaching
        </h3>
        <div
          className="flex flex-col md:flex-row overflow-y-scroll md:overflow-x-scroll scroll-hidden"
          style={{ maxHeight: "54vh" }}
        >
          {job &&
            job.map((j) => {
              return (
                <div onClick={()=>handleModel(j)} key={j.id}>
                  <JobCard job={j} />
                </div>
              );
            })}
        </div>
      </div>
      {showModal && (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full  md:w-3/4 my-6 mx-auto max-w-5xl">
              {/*content*/}
              <div
                className="border-0 rounded-xl shadow-xl relative flex flex-col w-full bg-gray-300 outline-none focus:outline-none overflow-y-scroll  scroll-hidden"
                style={{ maxHeight: "80vh" }}
              >
                <div className="relative  pl-6 py-5 md:p-6 flex-auto md:ml-8">
                  <div className="w-auto flex flex-col">
                    <div className="flex flex-row items-center justify-end pb-2">
                      <button className="bg-gray-900 rounded-full px-4 py-2 text-sm font-semibold text-slate-200 text-xl hover:bg-slate-600">
                        Apply Now
                      </button>
                      <button
                        className="place-self-center px-2"
                        onClick={handleWishlist}
                      >                      
                          <AiOutlineHeart className="w-12 h-12 hover:animate-pulse " />
                  
                      </button>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2">
                      <h1 className="font-bold font-sans text-3xl">{showDataModal.title}</h1>
                    </div>
                    <div className="py-2 ml-4">
                      <h1 className="text-xl font-semibold py-1">
                        Company Name
                      </h1>
                      <h1 className="text-lg py-1">{showDataModal.location}</h1>
                      <h1 className="text-lg py-1">{showDataModal.stripend} a month</h1>
                    </div>
                  </div>
                  <div className="border-t border-solid border-gray-400 py-2">
                    <h1 className="text-xl font-bold py-2">Job Details</h1>
                    <div className="flex ml-2 px-1 py-2">
                      <BiMoney className="w-5 h-5 place-self-center mr-1" />
                      <span className="text-lg space-x-2 font-medium text-gray">
                        Salary
                      </span>
                    </div>
                    <div className="py-2">
                      <h1 className="ml-8 inline-block bg-gray-300 rounded px-1 py-1 text-lg">
                        {showDataModal.stripend}
                         per month
                      </h1>
                    </div>
                    <div className="flex ml-2 px-1 py-1">
                      <BsBriefcaseFill className="w-5 h-5 place-self-center mr-1" />
                      <span className="text-lg space-x-2 font-medium text-gray">
                        Job Type
                      </span>
                    </div>
                    <div className="py-2">
                      <span className="ml-8 inline-block bg-gray-300 rounded px-1 py-1 text-lg">
                        Full-time
                      </span>
                    </div>
                    <div className="flex ml-2 px-1 py-2">
                      <HiOutlineClipboardList className="w-5 h-5 place-self-center mr-1" />
                      <span className="text-lg space-x-2 font-medium text-gray">
                        Tag 1
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-solid border-gray-400 py-2">
                    <h1 className="text-xl font-bold py-2">Full Description</h1>
                    <p className="text-md ml-4 py-2">
                        {showDataModal.description}
                    </p>
                  </div>
                  <div className="border-t border-solid border-gray-400 py-2">
                    <h1 className="text-xl font-bold py-2">Hiring Insights</h1>
                    <div className="flex flex-row py-2 ml-4">
                      <BiUserPlus className="w-6 h-6 place-self-center mr-1" />
                      <span className="text-lg space-x-2 text-gray">
                        Hiring 2 Candidates for this role
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-400 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </div>
      )}
    </div>
  );
}

export default JobList;
