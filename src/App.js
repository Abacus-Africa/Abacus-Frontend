import ComingSoon from "./pages/comingsoon/ComingSoon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App(props) {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<ComingSoon />} ></Route>
          <Route path='login' element={<Login />} ></Route>
          <Route path='signup' element={<Signup />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
