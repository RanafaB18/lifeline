import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./views/SignUp";
import AskQuestionPage from "./views/AskQuestionPage";
import SignIn from "./views/SignIn"
import { LoadingProvider } from "./context/LoadingContext";
import Dashboard from "./views/Dashboard";
import RequireAuth from "./components/RequireAuth"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/dashboard"} replace />}/>
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route
          path="/signup"
          element={
            <LoadingProvider>
              <SignUp />
            </LoadingProvider>
          }
        />
        <Route
          path="/signin"
          element={
            <LoadingProvider>
              <SignIn />
            </LoadingProvider>
          }
        />
        <Route path="/askquestion" element={<AskQuestionPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
