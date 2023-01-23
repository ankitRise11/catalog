import { Route, Routes } from "react-router-dom";
import "./App.css";
import Feed from "./Components/Feed";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/feed" element={<Feed/>}/>
        </Routes>
    </div>
  );
}

export default App;
