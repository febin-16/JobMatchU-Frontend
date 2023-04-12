import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Category from "./pages/Category";
import { UserContextProvider } from "./context/UserContextProvider";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import './App.css'

function App() {
  return(
    <div>  
      <BrowserRouter>
        <UserContextProvider>
            <div>
                <Navbar/>
              <Routes>
                <Route path={"/"} element={<Home/>} exact />
                <Route path={"/Profile"} element={<Profile/>} exact />
                <Route path={"/Category"} element={<Category/>} exact />
              </Routes>
            </div>
        </UserContextProvider>
      </BrowserRouter>
  </div>
  );
}

export default App
