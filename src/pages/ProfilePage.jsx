import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/user/profile", {
          withCredentials: true, // 쿠키를 함께 보내기 위해
        });
        setUserInfo(response.data);
      } catch (err) {
        setError("사용자 정보를 불러오는 데 실패했습니다.");
        console.error(err);
      }
    };

    fetchUserInfo();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!userInfo) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="profile-container">
      <h2>프로필</h2>
      <p><strong>이메일:</strong> {userInfo.email}</p>
      <p><strong>닉네임:</strong> {userInfo.nickname}</p>
      <p><strong>가입일:</strong> {new Date(userInfo.createdAt).toLocaleDateString()}</p>
      {/* 프로필 사진이 있으면 보여주기 */}
      {userInfo.profilePicture && <img src={userInfo.profilePicture} alt="Profile" />}
    </div>
  );
};

export default ProfilePage;
