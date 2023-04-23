import React, { useState, useContext, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import config from "../config";
import { BASE_URL } from "../constants/urls";
import { UserContext } from "../context/UserContextProvider";
import { CategoryContext } from "../context/CategoryContextProvider";
import { getCategoryDetails } from "../api/GetCategoryDetails";
import { useNavigate } from "react-router-dom";
import { ProfileUpdate } from "../api/ProfileUpdate";
const CLIENT_ID = config.googleClientId;
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [tempuser, setTempUser] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const { category, setCategory } = useContext(CategoryContext);
  const [profile, setProfile] = useState(null);
  let navigate = useNavigate();

  async function getProfileData() {
    try {
      const username = localStorage.getItem("username");
      const prof = await ProfileUpdate(username, 1, 2);
      setProfile(prof);
      console.log(prof);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const image_url = localStorage.getItem("image_url");
    const userInfo = {
      username: username,
      email: email,
      image_url: image_url,
    };
    if (username == null || email == null || image_url == null) {
      setUser(null);
    } else {
      setUser(userInfo);
    }
    async function getData() {
      try {
        const cat = await getCategoryDetails();
        setCategory(cat);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
    const ProfileInfo = localStorage.getItem("ProfileInfo");
    if (ProfileInfo == " ") {
      getProfileData();
      if (profile != null) {
        localStorage.setItem("ProfileInfo", JSON.stringify(profile));
      }
    }
  }, [profile]);
  const handleLogin = async (googleData) => {
    console.log(googleData);
    try {
      const response = await axios.post(BASE_URL + "api/auth/google/", {
        token: googleData.credential,
      });
      const data = response.data;
      console.log(data.user.username);
      const userInfo = {
        username: data.username,
        email: data.email,
        image_url: data.image_url,
      };
      setUser(userInfo);
      localStorage.setItem("username", data.user.username);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("image_url", data.user.image_url);
      localStorage.setItem("ProfileInfo", " ");
      getProfileData();
      console.log(localStorage);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("image_url");
    localStorage.removeItem("ProfileInfo");
  };

  return (
    <header className="bg-white shadow">
      <nav className="container w-full mx-auto px-6 py-3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link
                className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
                to="/"
              >
                JobMatchU
              </Link>
              <div className="mx-10 hidden md:block">
                <input
                  type="text"
                  className="w-32 lg:w-64 px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 border border-transparent focus:outline-none focus:bg-white focus:shadow-outline focus:border-blue-400"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`md:flex items-center  ${isOpen ? "block" : "hidden"} `}
          >
            <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
              <Link
                className="my-1 text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0"
                to="#"
              >
                Become A Provider
              </Link>
              <Link
                className="my-1 text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0"
                to="/Favourites"
              >
                <div className="flex flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Favourites</span>
                </div>
              </Link>
              <Link
                className="my-1 text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0"
                to="/Profile"
              >
                Profile
              </Link>
            </div>

            <div className="flex items-center py-2 -mx-1 md:mx-0">
              <GoogleOAuthProvider clientId={CLIENT_ID}>
                <div>
                  {user ? (
                    <div>
                      <button
                        className=" px-3 py-2 mx-1 rounded text-center text-sm bg-blue-500 font-medium text-white leading-5 hover:bg-blue-600 md:mx-0 md:w-auto"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="spacer">
                      <GoogleLogin
                        shape="square"
                        onSuccess={handleLogin}
                        onFailure={console.error}
                      />
                    </div>
                  )}
                </div>
              </GoogleOAuthProvider>
            </div>

            <div className="mt-3 md:hidden">
              <input
                type="text"
                className="w-full px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-outline"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-3 -mx-3 overflow-scroll scroll-hidden">
          {category &&
            category.map((c) => {
              return (
                <Link
                  className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
                  to={`/Category/${c.id}`}
                  key={c.id}
                >
                  {c.name}
                </Link>
              );
            })}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
