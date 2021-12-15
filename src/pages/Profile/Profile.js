import { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Header from '../../elements/Header/Header';
import { ThemeContext } from '../../ThemeContext';
import './Profile.css';
import { asset_1, cart, percentage, pillar, profile_vector_1, rewards } from '../../assets';
import { Link } from 'react-router-dom';

export default function Profile() {
    const theme = useContext(ThemeContext);
    const [nameModal, setNameModal] = useState(false);
    const [memoModal, setMemoModal] = useState(false);

    const changeNameModal = () => {
        setNameModal(!nameModal);
    }

    const changeMemoModal = () => {
        setMemoModal(!memoModal);
    }

    const closeModal = () => {
        setNameModal(false);
        setMemoModal(false);
    }

    return (
        <section id="profile" className={`${theme.state.darkMode ? 'dark' : 'light'}`}>
            <Header title="shroombits" />
            <h3 className='text-center top_title py-3 mb-3'>Asset #000</h3>

            {nameModal ? <div className='custom_modal_layer'>
                <div className="custom_modal">
                    <div className="modal_bottom text-center">
                        <input type="text" placeholder='Enter Name' />
                        <br />
                        <Button onClick={closeModal}>cancel</Button>
                        <Button>Save changes</Button>
                    </div>
                </div>
            </div> : ''}

            {memoModal ? <div className='custom_modal_layer'>
                <div className="custom_modal">
                    <div className="modal_bottom text-center">
                        <textarea type="text" placeholder='Enter Bio' />
                        <br />
                        <Button onClick={closeModal}>cancel</Button>
                        <Button>Save changes</Button>
                    </div>
                </div>
            </div> : ''}

            <Container>
                <div className="row justify-content-between">
                    <div className="col-12 col-lg-6">
                        <div className="about">
                            <h3 className='title'>About</h3>
                            <div className='info_sections'>
                                <div className='info'>
                                    <b className='label'>Name:</b><span className='text-capitalize'>Shroom#2000</span>
                                </div>
                                <div className='info flexed'>
                                    <div>
                                        <b className='label'>Given Name:</b><span className='text-capitalize'>Awesome Shroomy</span>
                                    </div>
                                    <button className='btn' onClick={changeNameModal}>edit</button>
                                </div>
                                <div className='info'>
                                    <b className='label'>Birthday:</b><span className='text-capitalize'>July,12021</span>
                                </div>
                                <div className='info flexed-col'>
                                    <div className='flexed'>
                                        <b className='label'>Memo:</b>
                                        <button className='btn' onClick={changeMemoModal}>edit</button>
                                    </div>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                </div>
                            </div>
                        </div>
                        <h3 className="mt-4">Attributes</h3>
                        <div className="attributes">
                            <div className="attr text-center">
                                <span className='text-capitalize'>cap style</span> <br />
                                <b>Dotted</b>
                            </div>
                            <div className="attr text-center">
                                <span className='text-capitalize'>cap pattern</span> <br />
                                <b>Dotted</b>
                            </div>
                            <div className="attr text-center">
                                <span className='text-capitalize'>pose</span> <br />
                                <b>Dotted</b>
                            </div>
                            <div className="attr text-center">
                                <span className='text-capitalize'>skin color</span> <br />
                                <b>Dotted</b>
                            </div>
                            <div className="attr text-center">
                                <span className='text-capitalize'>Expression</span> <br />
                                <b>Dotted</b>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className='preview'>
                            <div className='top_image'>
                                <img src={asset_1} alt="shroom" />
                            </div>
                        </div>
                        <div className='bottom_sections mt-4'>
                            <Link to='/wallet/attach' className='sec py-2'>
                                <img src={profile_vector_1} alt="attach" />
                                <p className="text-capitalize my-2 px-1 text-center">Attach assets</p>
                            </Link>
                            <Link to='/wallet/rewards' className='sec py-2 px-1'>
                                <img src={rewards} alt="attach" />
                                <p className="text-capitalize my-2 px-1 text-center">Rewards</p>
                            </Link>
                            <Link to='wallet/asset/2' className='sec py-2 px-1'>
                                <img src={cart} alt="attach" />
                                <p className="text-capitalize my-2 px-1 text-center">Sell</p>
                            </Link>
                            <Link to='wallet/asset/2' className='sec py-2 px-1'>
                                <img src={pillar} alt="attach" />
                                <p className="text-capitalize my-2 px-1 text-center">Bridge</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <h3 className="mt-4">Stats</h3>
                <div className='stats text-center'>
                    <div className='stat'>
                        <h3 className='fw-bold'>Density</h3>
                        <img src={percentage} alt="percentage" />
                    </div>
                    <div className='stat'>
                        <h3 className='fw-bold'>Connectivity</h3>
                        <img src={percentage} alt="percentage" />
                    </div>
                    <div className='stat'>
                        <h3 className='fw-bold'>Resistance</h3>
                        <img src={percentage} alt="percentage" />
                    </div>
                    <div className='stat'>
                        <h3 className='fw-bold'>Energy</h3>
                        <img src={percentage} alt="percentage" />
                    </div>
                    <div className='stat'>
                        <h3 className='fw-bold'>Safety</h3>
                        <img src={percentage} alt="percentage" />
                    </div>
                    <div className='stat'>
                        <h3 className='fw-bold'>Reproductivity</h3>
                        <img src={percentage} alt="percentage" />
                    </div>
                    <div className='stat'>
                        <h3 className='fw-bold'>Season</h3>
                        <img src={percentage} alt="percentage" />
                    </div>
                </div>
            </Container>
        </section>
    )
}
