import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Attachment from './pages/Attachment/Attachment';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Rewards from './pages/Rewards/Rewards';
import Wallet from './pages/Wallet/Wallet';

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="wallet" element={<Wallet />} />
                <Route path="wallet/:id" element={<Profile />} />
                <Route path="/attach" element={<Attachment />} />
                <Route path="/rewards" element={<Rewards />} />
            </Routes>
        </BrowserRouter>
    )
}
