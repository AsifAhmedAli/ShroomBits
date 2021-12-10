import Sidebar from '../../components/wallet/Sidebar/Sidebar';
import TopBar from '../../components/wallet/TopBar/TopBar';
import Header from '../../elements/Header/Header';
import './Wallet.css';

export default function Wallet() {
    return (
        <section id="wallet" className='light-theme'>
            <div className="content">
                <Header title="Shroombits" />
                <Sidebar />
                <TopBar />
            </div>
        </section>
    )
}
