import ComingSoon from "./pages/comingsoon/ComingSoon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import Resetpassword from "./pages/resetpassword/Resetpassword";

function App(props) {
  

  return (
    <div>
      <Router>
        {/* <Nav /> */}
        <Routes>
          <Route path='/' element={<ComingSoon />} ></Route>
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
