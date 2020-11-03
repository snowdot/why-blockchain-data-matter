import React, { useContext } from 'react';
import './Buttons.css';
import { MainContext } from '../context/MainContext';

const TermsBtn = () => {
    const mainContext = useContext(MainContext);

    const handleOnClick = () => {
        mainContext.setState.setShowModal(true);
        mainContext.setState.setShowTerms(true);
    }

    return(
        <button
            className="nes-btn is-warning terms__button"
            onClick={handleOnClick}
        >
            terms
        </button>
    );
}

export default TermsBtn;
