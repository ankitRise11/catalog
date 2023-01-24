import { Route, Routes } from "react-router-dom";
import Feed from "./Components/Feed";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";
import ShortVideo from "./Components/ShortVideo";

function App() {
  return (
    <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/shortVideo" element={<ShortVideo/>} />
        </Routes>
    </div>
  );
}

export default App;
