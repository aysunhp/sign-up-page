import SignUpForm from "./SignUpForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPass from "./components/ForgotPass";
import SignInGoogle from "./components/SignInGoogle";
import LogIn from "./components/LogIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          {/* <Route index element={<SignUpForm />} /> */}
          <Route path="forgotPass" element={<ForgotPass />} />
          <Route path="signInGoogle" element={<SignInGoogle />} />
          <Route path="logIn" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
