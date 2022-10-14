const myLogger = store => next => action => {
  console.log(action); // 액션 출력
  const result = next(action); // 다음 미들웨어 액션 전달

  console.log('\t', store.getState()); // 업데이트 이후의 상태 조회

  return result;
};

export default myLogger;