import React, { useRef, useState, useMemo, useCallback } from 'react';
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
  // inputs가 바뀔때만 새로운 함수를 생성하고 그렇지 않으면 기존의 함수를 재사용한다.
  const onChange = useCallback( e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]); 

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
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers(users => users.concat(user)); // 배열 복사, 파라미터에서 users를 조회하기 때문에 배열에 users를 넣지 않아도 된다.
    setInputs({
      username: '',
      email: ''
    })
    nextId.current += 1;
  }, [username, email]);

  // 값을 제거할 때는  filter
  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id));
  }, []);

  // 특정 값만 업데이트할 때는 map함수
  const onToggle = useCallback(id => {
    setUsers(users => users.map(
      user => user.id === id
      ? {...user, active: !user.active }
      : user
    ))
  }, []);

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
