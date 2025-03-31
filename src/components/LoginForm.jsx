// import { useState } from "react";
// import "./styles/auth.css"; 
// import axios from "axios";

// const LoginForm = ({ onSwitch }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("로그인 시도:", { email, password });

//     try {
//       const response = await axios.post('http://localhost:8080/api/login', {
//         email,
//         password
//       });
//       console.log('로그인 성공:', response.data);  // 성공 시 메시지 처리
//       // 로그인 성공 후 페이지 리디렉션 또는 상태 업데이트 등 추가 처리 가능
//     } catch (error) {
//       console.error('로그인 실패:', error.response ? error.response.data : error.message);
//       // 실패 시 사용자에게 알림 처리
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>로그인</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="이메일"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="비밀번호"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">로그인</button>
//       </form>
//       <p>
//         계정이 없으신가요?{" "}
//         <span className="switch-link" onClick={onSwitch}>
//           회원가입
//         </span>
//       </p>
//     </div>
//   );
// };

// export default LoginForm;
