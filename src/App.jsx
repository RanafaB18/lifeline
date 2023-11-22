import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./views/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
