import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // useNavigate import
import "../styles/auth.css";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();  // navigate 함수 초기화

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");  // 메시지 초기화

    try {
      const response = await axios.post("http://localhost:8080/api/auth/signup", {
        email,
        password,
        nickname,
      });
      alert("회원가입 성공!");
      console.log("회원가입 성공:", response.data);

      // 회원가입 성공 후 로그인 페이지로 리디렉션
      navigate("/");  // 로그인 페이지로 이동
    } catch (error) {
      const status = error.response ? error.response.status : "응답 없음";
      alert(`회원가입 실패했습니다. (상태 코드: ${status})`);
      setMessage(`회원가입 실패: ${status}`);
      console.error("회원가입 실패:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">회원가입</button>
      </form>
      {message && <p className="error-message">{message}</p>}
    </div>
  );
};

export default RegisterPage;
