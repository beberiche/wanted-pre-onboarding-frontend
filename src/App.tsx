import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages

import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';
import Todo from './components/pages/Todo';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>root</div>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
