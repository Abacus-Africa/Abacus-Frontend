import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import Resetpassword from "./pages/resetpassword/Resetpassword";
import Landing from "./pages/landing/Landing";
import Pricing from "./components/pricing";
import Mainpage from "./pages/mainpage/Mainpage";
import Dashboard from "./pages/mainpage/dashboard/Dashboard";
import Support from "./pages/support/Support";
import PasswordChanged from "./pages/passwordChanged/PasswordChanged";
import ContactUs from "./pages/contactUs/ContactUs";
import Inventory from "./pages/mainpage/Inventory/Inventory";

function App(props) {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} ></Route>
          <Route path='login' element={<Login />} ></Route>
          <Route path='signup' element={<Signup />} ></Route>
          <Route path='forgotpassword' element={<ForgotPassword />} ></Route>
          <Route path='resetpassword' element={<Resetpassword />} ></Route>
          <Route path='passwordchanged' element={<PasswordChanged />} ></Route>
          <Route path='pricing' element={<Pricing />} ></Route>
          <Route path='support' element={<Support />}></Route>
          <Route path='contact' element={<ContactUs />}></Route>
         
          <Route path='mainpage' element={<Mainpage />} >
             <Route path='dashboard' element={<Dashboard />} />
             <Route path='inventory' element={<Inventory />} />
          </Route>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;