import React, { useContext } from 'react';
import './Buttons.css';
import * as d3 from 'd3';
import { MainContext } from '../context/MainContext';

const SliceBtn = props => {
    const { id, value, active, setActive } = props;
    const mainContext = useContext(MainContext);

    const handleOnClick = (e) => {
        d3.selectAll('*').interrupt();
        setActive(e.target.id);
        mainContext.setState.setHasRotate(false);
        mainContext.setState.setFile(e.target.value);
    }

    return(
        <button
            id={id}
            className={`nes-btn slice__button ${id === active ? 'active' : ''}`}
            value={value}
            onClick={e => handleOnClick(e)}
        >
            {value}
        </button>
    );
}

export default SliceBtn;
