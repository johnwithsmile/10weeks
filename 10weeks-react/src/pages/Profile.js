import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProfileData = {
  john: {
    id: 1,
    name: "김정동",
    description: "리액트 강의를 배우는 사람입니다.",
  },
  vic: {
    id: 2,
    name: "Vika",
    description: "리액트 강의를 배우는 사람을 구경하는 사람입니다.",
  },
};

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const profile = ProfileData[username];

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h3>{profile.name} 이/가 무엇을 하는 사람일까요?</h3>
      <p>{profile.description}</p>
      <div onClick={handleGoBack}>뒤로가기</div>
    </div>
  );
};

export default Profile;
