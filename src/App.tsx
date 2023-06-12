import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>root</div>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
