import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import About from './About';
import HistorySample from './HistorySample';
import Home from './Home';
import Profiles from './Profiles';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr />
      <Routes>     
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path='/history' element={<HistorySample />} />
      </Routes>
 
    </div>
  );
};

export default App;
