import React, { useRef } from 'react';
import UserList from './UserList';



function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  const nextId = useRef(4); // useRef는 어떤 값을 계속 기억하고 싶을 때도 사용한다.

  const onCreate = () => {

    console.log(nextId.current); // 4
    nextId.current += 1;
  }

  return (
    <UserList users={users}/>
  )
}

export default App;
