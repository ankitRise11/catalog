import { Route, Routes } from "react-router-dom";
import Feed from "./Components/Feed";
import LongContent from "./Components/LongContent";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";
import ShortContent from "./Components/ShortContent";
import ShortVideo from "./Components/ShortVideo";

function App() {
  return (
    <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/shortVideo" element={<ShortVideo/>} />
          <Route path="/longContent" element={<LongContent/>} />
          <Route path="/shortContent" element={<ShortContent/>}/>
        </Routes>
    </div>
  );
}

export default App;
