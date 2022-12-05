import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/_Templates/Home';
import Snow from './Components/_Templates/Snow';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/snow" element={<Snow />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
