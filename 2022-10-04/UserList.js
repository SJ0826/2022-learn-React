// 배열을 렌더링 할 때는 키를 설정해야 효율적으로 렌더링 할 수 있다.
// 고유값이 없는 경우에는 index를 넣을 수 있지만 비효율적이다.
// 다만 데이터가 작은 경우에는 상관없지만 큰 경우에는 key를 설정해야 한다.
// onClick에는 함수를 넣어주는것이 아니라 함수를 호출하는 함수를 넣어줘야한다.

import React, { useEffect, useInsertionEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

  useEffect(() => {
    console.log(user);
  });
  return (
    <div>
      <b 
      style={{
        color: active ? 'green' : 'black',
        cursor: 'pointer'
      }}
      onClick={() => onToggle(id)}
      >
        {username}
      </b> 
      &nbsp;
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button> 
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  
  return (
    <div>
      {users.map(user => (
        <User user={user} 
        key={user.id} 
        onRemove={onRemove} 
        onToggle={onToggle}
      />
      ))}
    </div>
  );
}

export default UserList;