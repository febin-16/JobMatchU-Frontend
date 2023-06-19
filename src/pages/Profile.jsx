import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import Profile_Info from '../components/Profile_Info'
import Prof_Application from '../components/Prof_Application'
import { UserContext } from "../context/UserContextProvider";
import Favourites from './Favourites';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';
function Profile() {
  const [isOpen, setIsOpen] = useState(true);
  const [prof, setProf] = useState("Profile");
  const { user } = useContext(UserContext);
  return (
    <main
      className="min-h-screen w-full bg-slate-950 text-gray-700"
      x-data="layout"
    >
      <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-slate-900 p-2">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-3xl text-gray-100"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
          <div className='text-gray-100'>{prof}</div>
        </div>
      </header>

      <div className="flex">
        <aside
          className={`h-screen flex w-72  flex-col space-y-2 border-r-2 border-gray-200 bg-slate-950 p-2 ${
            isOpen ? "block" : "hidden"
          } md:block`}
          x-show="asideOpen"
        >
          <Link
            onClick={() => setProf("Dashboard")}
            className="flex items-center space-x-1 rounded-md px-2 py-3 text-gray-100 hover:bg-gray-100 hover:text-gray-900"
          >
            <span className="text-2xl">
              <i className="bx bx-home"></i>
            </span>
            <span >Dashboard</span>
          </Link>

          {/* <Link
            onClick={() => setProf("Chat")}
            className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
          >
            <span className="text-2xl">
              <i className="bx bx-cart"></i>
            </span>
            <span>Chat</span>
          </Link> */}

          <Link
            onClick={() => setProf("Applications")}
            className="flex items-center space-x-1 rounded-md px-2 py-3 text-gray-100 hover:bg-gray-100 hover:text-gray-900"
          >
            <span className="text-2xl">
              <i className="bx bx-shopping-bag"></i>
            </span>
            <span>My Applications</span>
          </Link>

                <Link onClick={()=>setProf("Profile")}  className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-gray-900 text-gray-100">
                    <span className="text-2xl"><i className="bx bx-user"></i></span>
                    <span >Profile</span>
                </Link>
            </aside>
            {prof=="Profile" && 
                <div className="w-full p-4">
                    <Profile_Info/>
                </div>
            }   
            {prof=="Chat" && 
                <div className="w-full p-4">
                    Chat
                </div>
            }  
            {prof=="Dashboard" && 
                <Dashboard/>
            }  
             {prof=="Applications" && 
                <div className={`${isOpen ? "hidden":"block"} w-full  md:block`} >
                    <Prof_Application/>
                </div>
            } 
            </div>
            <Footer/>
    </main>
  );
}
export default Profile;
