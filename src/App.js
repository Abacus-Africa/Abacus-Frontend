// import ComingSoon from "./pages/comingsoon/ComingSoon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav"
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import Resetpassword from "./pages/resetpassword/Resetpassword";
import Landing from "./pages/landing/Landing";

function App(props) {
  

  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Landing />} ></Route>
          <Route path='login' element={<Login />} ></Route>
          <Route path='signup' element={<Signup />} ></Route>
          <Route path='forgotpassword' element={<ForgotPassword />} ></Route>
          <Route path='resetpassword' element={<Resetpassword />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;