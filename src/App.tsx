import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beach from './Components/_Templates/Beach';
import Home from './Components/_Templates/Home';
import Snow from './Components/_Templates/Snow';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/snow" element={<Snow />}></Route>
        <Route path="/beach" element={<Beach />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
