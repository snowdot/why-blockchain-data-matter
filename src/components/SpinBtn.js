import React, { useContext } from 'react';
import './Buttons.css';
import * as d3 from 'd3';
import helpers from '../helpers';
import { MainContext } from '../context/MainContext';

const SpinBtn = () => {
    const mainContext = useContext(MainContext);

    const data = mainContext.state.data;
    const spins = 3;
    const degrees = spins * 360;
    const piedegree = 360 / data.length;
    const duration = 2000;
    const easing = d3.easeCircleOut;

    const spin = d => {
        const randomInd = helpers.getRandomInt(0, data.length);
        const randomPie = helpers.getRandomInt(1, piedegree);
        const rotation = (data.length - randomInd) * piedegree - randomPie + degrees;
    
        const rotTween = () => {
            let i = d3.interpolate(0, rotation);
            return t => {
                return `rotate(${i(t)})`;
            };
        }

        d3.selectAll('.canvas__circle')
            .classed('rotate', true);

        d3.selectAll('.wheel')
            .transition()
            .duration(duration)
            .attrTween('transform', rotTween)
            .ease(easing)
            .on('end', () => {              
                d3.selectAll('.canvas__circle')
                    .classed('rotate', false);

                setTimeout(() => {
                    mainContext.setState.setCurrent(randomInd);
                    mainContext.setState.setShowModal(true);
                }, 500)
            });
    }

    return(
        <button
            className="nes-btn is-error spin__button"
            onClick={spin}
        >
            spin
        </button>
    );
}

export default SpinBtn;
