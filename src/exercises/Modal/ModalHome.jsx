import React, { useCallback, useState } from "react";
import BackButton from "../common/BackButton";
import './modal.css';

const ModalHome = () => {
    const [modal,setModal] = useState(false);
    const handleOnClick = useCallback(()=> setModal(!modal),[modal])

    return(<div style={{position:'absolute'}}>
        <BackButton />
        <h1>Modal Home Page</h1>
        <h3 style = {{cursor:'pointer'}} onClick={handleOnClick}>Click to open modal</h3>
        {modal ? <div className="modal">
            <button onClick={handleOnClick}>Close</button>
        </div> : ''}
    </div>)
}

export default ModalHome;