import React from 'react';
import './CardSlice.css';
import CloseBtn from './CloseBtn';

const CardSlice = props => {
    const { name, description } = props;

    return(
        <section className="nes-dialog is-rounded card__slice">
            <p className="name">{name}</p>
            <p className="description">{description}</p>
            <CloseBtn />
        </section>
    );
}

export default CardSlice;
