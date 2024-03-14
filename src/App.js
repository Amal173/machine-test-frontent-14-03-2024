import './App.css';
import { Routes, Route } from "react-router-dom"
import Register from './Components/Register/Register';
import Questions from './Components/Questions/Questions';
import Success from './Components/Success/Success';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Register/> } />
        <Route path="/questions" element={ <Questions/> } />
        <Route path="/success" element={ <Success/> } />
      </Routes>
    </div>
  );
}

export default App;
