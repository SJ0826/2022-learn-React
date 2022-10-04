import React, { useRef, useState, useMemo } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중');
  return users.filter(user => user.active).length;
}

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
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    }
  ]);

  const nextId = useRef(4); // useRef는 어떤 값을 계속 기억하고 싶을 때도 사용한다.

  // 배열에 값을 추가할 때는 스프레드 연산자 또는 concat
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

  // 값을 제거할 때는  filter
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  // 특정 값만 업데이트할 때는 map함수
  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id
      ? {...user, active: !user.active }
      : user
    ))
  }

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
    <CreateUser 
      username={username} 
      email={email} 
      onChange={onChange} 
      onCreate={onCreate}
    />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    <div>활성 사용자 수: {count} </div>
    </>
  )
}

export default App;
