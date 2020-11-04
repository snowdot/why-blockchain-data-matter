import React, { useContext, useRef } from 'react';
import './Modal.css';
import CardSlice from './CardSlice';
import CardTerms from './CardTerms';
import { MainContext } from '../context/MainContext';

const Modal = () => {
    const mainContext = useContext(MainContext);
    const modalRef = useRef(null);

    const handleOnClick = e => {
        if(e.target === modalRef.current) {
            mainContext.setState.setHasRotate(false);
            mainContext.setState.setShowModal(false);
            mainContext.setState.setShowTerms(false);
        }
    }

    return(
        <>
        {
            mainContext.state.showModal &&
            <div
                ref={modalRef}
                id="modal"
                className="modal"
                onClick={e => handleOnClick(e)}
            >
                {
                    mainContext.state.showTerms &&
                    <CardTerms
                        terms={mainContext.state.terms}
                    />
                }
                {
                    !mainContext.state.showTerms &&
                    <CardSlice
                        name={mainContext.state.data[mainContext.state.current].name}
                        description={mainContext.state.data[mainContext.state.current].description}
                    />
                }
            </div>
        }
        </>
    );
}

export default Modal;
