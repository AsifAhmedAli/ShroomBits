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
                <Route path="wallet/asset/:id" element={<Profile />} />
                <Route path="wallet/attach" element={<Attachment />} />
                <Route path="wallet/rewards" element={<Rewards />} />
            </Routes>
        </BrowserRouter>
    )
}
