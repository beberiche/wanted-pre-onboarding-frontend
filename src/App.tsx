import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from 'components/pages/signin';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>root</div>} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
