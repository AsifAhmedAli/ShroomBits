import { Button } from "react-bootstrap";

export default function Modals({ modal, setModal, modal2, setModal2, counterIncrement, counterDecrement, counter, changeModal, submitHandler }) {
    return (
        <div>
            {modal && <div className="first_modal">
                <div className="close_modal">
                    <i className="fas fa-times" onClick={() => setModal(false)}></i>
                </div>
                <div className="modal_content">
                    <div className="modal_top text-center">
                        <h5 className="mb-1">Price <b>0.06 ETH/WETH</b></h5>
                        <h6>Shrooms minted: <b>1482</b></h6>
                    </div>
                    <div className="modal_bottom text-center">
                        <h4>
                            <b>How many Shrooms would <br /> you like to mint?</b>
                        </h4>
                        <div className="counter">
                            <button className="calc" onClick={counterDecrement}>-</button>
                            <div className="count_val">{counter}</div>
                            <button className="calc" onClick={counterIncrement}>+</button>
                        </div>
                        <div className="modal_btns">
                            <Button>Etherium</Button>&nbsp;&nbsp;&nbsp;
                            <Button onClick={changeModal}>Matic (Polygon)</Button>
                        </div>
                        <div className="modal_cancel">
                            <Button onClick={() => setModal(false)}>Cancel</Button>
                        </div>
                    </div>
                </div>
            </div>}

            {modal2 && <div className="second_modal">
                <div className="close_modal" onClick={() => setModal(false)}>
                    <i className="fas fa-times" onClick={changeModal}></i>
                </div>
                <div className="modal_content">
                    <div className="modal_top text-center">
                        <h3>Step 1</h3>
                    </div>
                    <div className="modal_bottom text-center">
                        <h3 className="my-4 fw-bold">Approve WETH</h3>
                        <Button onClick={submitHandler}>Approve</Button>

                        <div className="mt-2 modal_cancel">
                            <Button onClick={changeModal}>Cancel</Button>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}
