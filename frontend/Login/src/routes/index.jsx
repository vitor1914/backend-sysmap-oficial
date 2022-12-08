import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from '../pages/Login/index';
import { Register } from '../pages/Register/index';

export const AppRouter = () => {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    );
};