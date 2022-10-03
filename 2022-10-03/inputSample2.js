// 객체를 업데이트할 때는 새로운 객체를 복사하고 특정값을 덮어 씌우고 새로운 상태로 설정해야한다.
// 이렇게 불변성을 지켜줘야 리액트 컴포넌트에서 상태가 렌더링된것을 감지한다.

import React, { useState } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs, // 객체 복사
      [name]: value,
    });
  };

  const onReset = () => { // 초기화 기능
   setInputs({
    name: '',
    nickname: ''
   })
  };
  
  return (
    <div>
      <input 
        name="name" 
        placeholder="이름" 
        onChange={onChange} 
        value={name} 
      />
      <input 
        name="nickname" 
        placeholder="닉네임" 
        onChange={onChange} 
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} {nickname}
      </div>
    </div>
  )
}

export default InputSample;