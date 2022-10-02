import React from 'react';

function Hello(props) { // 컴포넌트 이름은 대문자로 시작
  console.log(props);
  return <div style={{
    color: props.color
  }}>안녕하세요 {props.name}</div>;
}


Hello.defaultProps = { // 특정값을 빠뜨렸을때 기본값으로 사용할 값
  name: '이름없음'
}
export default Hello; // Hello라는 컴포넌트를 내보낸다.