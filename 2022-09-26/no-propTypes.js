//User.propTypes = { ... };
prop-Types

// 타입이 중요한 이유
// 자바스크랩트는 동적 타입 언어
// 타입정의 자체가 훌륭한 문서가 된다.

export default function User({ type, age, male, onChangeName, onChangeTitle }) {
  function onClick1() {
    const msg = `type: ${type}, age: ${age ? age : '알 수 없음'}`;
    log(msg, { color: type === 'gold' ? 'red' : 'black' });
    // ...
  }
  function onClick2(name, title) {
    if (onChangeName) {
      onChangeName(name);
    }
    onChangeTitle(title);
    male ? goMalePage() : goFemalePage();
    // ...
  }
  // ...
  return null;
}