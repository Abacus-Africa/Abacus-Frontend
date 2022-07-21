// import ComingSoon from "./pages/comingsoon/ComingSoon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import Resetpassword from "./pages/resetpassword/Resetpassword";
import Landing from "./pages/landing/Landing";
import Pricing from "./components/pricing";
import Nav from "./components/nav/Nav";
import Mainpage from "./pages/mainpage/Mainpage";
import Dashboard from "./pages/mainpage/dashboard/Dashboard";

function App(props) {
  

  return (
    <div>
      <Router>
        {/* <Nav /> */}
        <Routes>
          <Route path='/' element={<Landing />} ></Route>
          <Route path='login' element={<Login />} ></Route>
          <Route path='signup' element={<Signup />} ></Route>
          <Route path='forgotpassword' element={<ForgotPassword />} ></Route>
          <Route path='resetpassword' element={<Resetpassword />} ></Route>
          <Route path='pricing' element={<Pricing />} ></Route>
      
          <Route path='mainpage' element={<Mainpage />} >
            <Route path='dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;