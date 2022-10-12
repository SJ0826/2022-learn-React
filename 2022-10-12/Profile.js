import React from "react";
import { useParams } from "react-router-dom";

const profiledata = {
  masuri: {
    name: '김수진',
    description: 'Frontend Engineer @ RIDI'
  },
  homer: {
    name: '호머 심슨',
    description: '심슨 가족에 나오는 아빠 역할 캐릭터'
  }
}

// match: 라우트 컴포넌트에서 넣어주는 props. 해당컴포넌트가 자동으로 받아와진다.
function Profile() {
  const { username } = useParams();
  const profile = profiledata[username];

  if(!profile) {
    return <div>존재하지 않는 사용자입니다.</div>
  }

  return (
    <div>
      <h3>{username} ({profile.name})</h3>
      <p>
        {profile.description}
      </p>
    </div>
  )
}

export default Profile;