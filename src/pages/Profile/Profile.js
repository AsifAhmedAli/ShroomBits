import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../elements/Header/Header';
import { ThemeContext } from '../../ThemeContext';
import './Profile.css';
import { asset_1, percentage, profile_vector_1 } from '../../assets';

export default function Profile() {
    const theme = useContext(ThemeContext);

    return (
        <section id="profile" className={`${theme.state.darkMode ? 'dark' : 'light'}`}>
            <Header title="shroombits" />
            <h3 className='text-center fw-bold top_title py-3 mb-3'>Asset#000</h3>

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
                                    <button className='btn'>edit</button>
                                </div>
                                <div className='info'>
                                    <b className='label'>Birthday:</b><span className='text-capitalize'>July,12021</span>
                                </div>
                                <div className='info flexed-col'>
                                    <div className='flexed'>
                                        <b className='label'>Memo:</b>
                                        <button className='btn'>edit</button>
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
                            <div className='sec py-2 px-1'>
                                <img src={profile_vector_1} alt="attach" />
                                <p className="text-capitalize my-2 px-1 text-center">Attach assets</p>
                            </div>
                            <div className='sec py-2 px-1'>
                                <img src={profile_vector_1} alt="attach" />
                                <p className="text-capitalize my-2 px-1 text-center">Attach assets</p>
                            </div>
                            <div className='sec py-2 px-1'>
                                <img src={profile_vector_1} alt="attach" />
                                <p className="text-capitalize my-2 px-1 text-center">Attach assets</p>
                            </div>
                            <div className='sec py-2 px-1'>
                                <img src={profile_vector_1} alt="attach" />
                                <p className="text-capitalize my-2 px-1 text-center">Attach assets</p>
                            </div>
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
