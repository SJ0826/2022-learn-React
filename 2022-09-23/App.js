import ReactDom from 'react-dom';

export default function App() {
  return (
    <>
      <p>안녕</p>
      <Counter />
      {
        ReactDom.createPortal(
          <div>
          <p>안녕하세요</p>
          <p>실전 리액트 프로그래밍 입니다.</p>
          </div>,
          document.getElementId('something'),
        )}
    </>     
  );
}