import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../components/main/main";
import Board from "../components/board/board";
import Example from "../components/login/loginModal";
import RTC from "../components/rtc/recordRTC";
import Test from "../components/test/test";
import LoginModal from "../components/login/loginModal";

const ToyRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/board" element={<Board></Board>}></Route>
        {/* <Route path="/loginModal" element={<LoginModal></LoginModal>}></Route> */}
        <Route path="/rtc" element={<RTC></RTC>}></Route>
        <Route path="/test" element={<Test></Test>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ToyRoute;
