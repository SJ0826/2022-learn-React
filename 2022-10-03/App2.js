import React, { useRef, useState } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';



function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
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
  ]);



  const nextId = useRef(4); // useRef는 어떤 값을 계속 기억하고 싶을 때도 사용한다.

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers(users.concat(user)); // 배열 복사
    setInputs({
      username: '',
      email: ''
    })
    nextId.current += 1;
  }

  return (
    <>
    <CreateUser 
      username={username} 
      email={email} 
      onChange={onChange} 
      onCreate={onCreate}
    />
    <UserList users={users}/>
    </>
  )
}

export default App;
