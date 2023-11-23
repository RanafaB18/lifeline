import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./views/SignUp";
import Dashboard from "./views/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
