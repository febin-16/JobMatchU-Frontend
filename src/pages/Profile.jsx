import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import Profile_Info from '../components/Profile_Info'
import Prof_Application from '../components/Prof_Application'
import { UserContext } from "../context/UserContextProvider";
import Favourites from './Favourites';
function Profile() {
  const [isOpen, setIsOpen] = useState(true);
  const [prof, setProf] = useState("Profile");
  const { user } = useContext(UserContext);
  return (
    <main
      className="min-h-screen w-full bg-gray-100 text-gray-700"
      x-data="layout"
    >
      <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-3xl"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
          <div>{prof}</div>
        </div>
      </header>

      <div className="flex">
        <aside
          className={`h-screen flex w-72  flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2 ${
            isOpen ? "block" : "hidden"
          } md:block`}
          x-show="asideOpen"
        >
          <Link
            onClick={() => setProf("Dashboard")}
            className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
          >
            <span className="text-2xl">
              <i className="bx bx-home"></i>
            </span>
            <span>Dashboard</span>
          </Link>

          <Link
            onClick={() => setProf("Chat")}
            className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
          >
            <span className="text-2xl">
              <i className="bx bx-cart"></i>
            </span>
            <span>Chat</span>
          </Link>

          <Link
            onClick={() => setProf("Applications")}
            className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
          >
            <span className="text-2xl">
              <i className="bx bx-shopping-bag"></i>
            </span>
            <span>My Applications</span>
          </Link>

          <Link
            onClick={() => setProf("Favourites")}
            className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
          >
            <span className="text-2xl">
              <i className="bx bx-heart"></i>
            </span>
            <span>My Favourites</span>
          </Link>

                <Link onClick={()=>setProf("Profile")}  className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                    <span className="text-2xl"><i className="bx bx-user"></i></span>
                    <span>Profile</span>
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
                <div className="w-full p-4">
                    Dashboard
                </div>
            }  
             {prof=="Applications" && 
                <div className={`${isOpen ? "hidden":"block"} w-full  md:block`} >
                    <Prof_Application/>
                </div>
            }
            {prof=="Favourites" && 
                <Favourites/>
            }   
            </div>
    </main>
  );
}
export default Profile;
