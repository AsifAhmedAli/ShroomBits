import Assets from '../../components/wallet/Assets/Assets';
import Sidebar from '../../components/wallet/Sidebar/Sidebar';
import TopBar from '../../components/wallet/TopBar/TopBar';
import Header from '../../elements/Header/Header';
import './Wallet.css';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

export default function Wallet() {
    const theme = useContext(ThemeContext);

    return (
        <section id="wallet" className={`${theme.state.darkMode ? 'dark' : 'light'}`}>
            <div className="content">
                <Header title="Shroombits" />
                <Sidebar />
                <TopBar />
                <Assets />
            </div>
        </section>
    )
}
