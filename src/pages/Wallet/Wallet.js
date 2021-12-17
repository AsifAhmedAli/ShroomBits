import Assets from '../../components/wallet/Assets/Assets';
import Sidebar from '../../components/wallet/Sidebar/Sidebar';
import TopBar from '../../components/wallet/TopBar/TopBar';
import Header from '../../elements/Header/Header';
import './Wallet.css';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../ThemeContext';

export default function Wallet() {
    const theme = useContext(ThemeContext);
    const [toggleSidebar, setToggleSidebar] = useState(typeof window !== 'undefined' && window.matchMedia("(max-width: 820px)").matches);

    useEffect(() => {
        window.matchMedia("(max-width: 820px)").addEventListener('change', e => {
            setToggleSidebar(e.matches);
        });
    }, [])

    return (
        <section id="wallet" className={`${theme.state.darkMode ? 'dark' : 'light'}`}>
            <div className="content">
                <Header title="Shroombits" />
                <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
                <TopBar />
                <Assets toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
            </div>
        </section>
    )
}
