import { useContext } from 'react';
import { light_theme_wallet_topbar, dark_theme_wallet_topbar_2 } from '../../../assets';
import { ThemeContext } from '../../../ThemeContext';
import './TopBar.css';

export default function TopBar() {
    const theme = useContext(ThemeContext);

    return (
        <section id="topbar" className={`${theme.state.darkMode ? 'dark' : 'light'}`}
        >
            <div className='topbar_img'>
                {theme.state.darkMode ?
                    <img src={dark_theme_wallet_topbar_2} alt="dark" /> :
                    <img src={light_theme_wallet_topbar} alt="light" />
                }
            </div>
            <div className="content">
                <div className='text'>
                    <h1 className='fw-bold text-capitalize'>my wallet</h1>
                    <p className='wallet_id'>0x2e40627F39Fac9277BE724a909ce45A0833A07db</p>
                </div>
            </div>
        </section>
    )
}
