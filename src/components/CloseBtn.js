import React, { useRef, useContext } from 'react';
import { MainContext } from '../context/MainContext';

const CloseBtn = () => {
    const mainContext = useContext(MainContext);
    const btnRef = useRef(null);

    const handleOnClick = e => {
        if(e.target === btnRef.current) {
            mainContext.setState.setShowModal(false);
            mainContext.setState.setShowTerms(false);
        }
    }

    return(
        <div className="close__button">
            <button
                ref={btnRef}
                className="nes-btn is-primary"
                onClick={e => handleOnClick(e)}
            >
                Got it
            </button>
        </div>
    );
}

export default CloseBtn;
