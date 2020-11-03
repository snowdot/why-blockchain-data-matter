import React, { useState } from 'react';
import './Buttons.css';
import TermsBtn from './TermsBtn';
import SliceBtn from './SliceBtn';
import SpinBtn from './SpinBtn';

const SideBtns = () => {
    const [active, setActive] = useState('6r4t');
    const btns = [
        {
            id: 'f4d5',
            name: 'tech'
        },
        {
            id: '6r4t',
            name: 'no tech'
        }
    ];

    return(
        <div className="btnsContainer">
            <TermsBtn />
            <div className="btnsWrapper">
                {
                    btns.map(btn => (
                        <SliceBtn
                            key={btn.id}
                            id={btn.id}
                            value={btn.name}
                            active={active}
                            setActive={setActive}
                        />
                    ))
                }
            </div>
            <SpinBtn />
        </div>
    );
}

export default SideBtns;
