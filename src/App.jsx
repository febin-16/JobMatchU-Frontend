import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import './App.css'

function App() {
  return(
    <div>  
      <BrowserRouter>
          <div>
            <Navbar/>
            <Routes>
              <Route path={"/"} element={<Home/>} exact />
              <Route path={"/Profile"} element={<Profile/>} exact />
            </Routes>
          </div>
      </BrowserRouter>
  </div>
  );
}

export default App
