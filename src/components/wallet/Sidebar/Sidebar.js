import './Sidebar.css';
import { sidebar_top_address, sidebar_top_img } from '../../../assets';
import { useContext } from 'react';
import { ThemeContext } from '../../../ThemeContext';

export default function Sidebar({ toggleSidebar, setToggleSidebar }) {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const switchTheme = () => {
        if (darkMode)
            theme.dispatch({ type: "LIGHT" });
        else
            theme.dispatch({ type: "DARK" });
    };

    return (
        <section id="wallet_sidebar" className={`${darkMode ? 'dark' : 'light'}`}>
            <div className={`content ${toggleSidebar && 'close'}`}>
                <div className="top_section">
                    <img src={sidebar_top_img} alt="person" />
                    <h2 className="name">anon.eth</h2>
                    <h5 className='address'><span>0xa0z7...68a</span>&nbsp;&nbsp;<img src={sidebar_top_address} alt="address_icon" /></h5>
                </div>
                <div className="theme_switcher">
                    <h6 className="text-capitalize">Dark mode</h6>
                    <label class="switch">
                        <input type="checkbox" onClick={switchTheme} />
                        <span class="slider round"></span>
                    </label>
                </div>
                <div className="filters">
                    <h6 className="filter_text">Filters</h6>
                    <a href="#s" className='remove_all'>Remove all</a>
                </div>
                <h5 className='type_label'>Network</h5>
                <div className='checks'>
                    <div className='check'>
                        <h6 className='title'>Etherium</h6>
                        <input type="checkbox" />
                    </div>
                    <div className='check'>
                        <h6 className='title'>Polygon (Matic)</h6>
                        <input type="checkbox" />
                    </div>
                </div>
                <h5 className='type_label'>Asset Type</h5>
                <div className='checks'>
                    <div className='check'>
                        <h6 className='title'>2D Shrooms</h6>
                        <input type="checkbox" />
                    </div>
                    <div className='check'>
                        <h6 className='title'>Backgrounds</h6>
                        <input type="checkbox" />
                    </div>
                    <div className='check'>
                        <h6 className='title'>Land</h6>
                        <input type="checkbox" />
                    </div>
                    <div className='check'>
                        <h6 className='title'>Items</h6>
                        <input type="checkbox" />
                    </div>
                    <div className='check'>
                        <h6 className='title'>Etherium</h6>
                        <input type="checkbox" />
                    </div>
                </div>
                <div className="hide_filter pb-3 pt-1" onClick={() => setToggleSidebar(!toggleSidebar)}><small>Hide filters</small></div>
            </div>
        </section>
    )
}
