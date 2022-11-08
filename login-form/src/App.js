import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './Components/Login-Form';
import RegisrationForm from './Components/Registration-Form';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/register" element={<RegisrationForm/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
