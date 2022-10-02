import React from 'react';
import Hello from './Hello';
import './App.css';


function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };
  return (
    <>
    {/*어쩌고 저쩌고*/}
      <Hello 
      // 이런식으로 작성하는 주석은 화면에 나타타지 않음
      />
      <div style={style}>{name}</div>
      <div className='gray-box'></div>
    </> // 태그는 꼭 닫기
  );
}

export default App;
