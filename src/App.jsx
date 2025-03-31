import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./index.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="app-container">
      {isLogin ? <LoginPage toggleForm={toggleForm} /> : <RegisterPage toggleForm={toggleForm} />}
    </div>
  );
}

export default App;
