import ComingSoon from "./pages/comingsoon/ComingSoon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nav from "./components/nav/Nav";

function App(props) {
  

  return (
    <div>
      <Router>
        {/* <Nav /> */}
        <Routes>
          <Route path='/' element={<ComingSoon />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
