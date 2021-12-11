import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Wallet from './pages/Wallet/Wallet';

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="wallet" element={<Wallet />} />
                <Route path="wallet/:id" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}
