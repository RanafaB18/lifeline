import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./views/SignUp";
import AskQuestionPage from "./views/AskQuestionPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/askquestion" element={<AskQuestionPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
