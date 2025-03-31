import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // 메시지 초기화

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });

      // 로그인 성공 시, 프로필 페이지로 리디렉션
      alert("로그인 성공!");
      console.log("로그인 성공:", response.data);

      // 로그인 후 프로필 페이지로 리디렉션
      navigate("/profile");
    } catch (error) {
      const status = error.response ? error.response.status : "응답 없음";
      alert(`로그인 실패했습니다. (상태 코드: ${status})`);
      setMessage(`로그인 실패: ${status}`);
      console.error("로그인 실패:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">로그인</button>
      </form>
      {message && <p className="error-message">{message}</p>}
      <p>
        계정이 없으신가요? <a href="/register">회원가입</a>
      </p>
    </div>
  );
};

export default LoginPage;
