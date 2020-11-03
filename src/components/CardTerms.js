import React from 'react';
import './CardTerms.css';
import CloseBtn from './CloseBtn';

const CardTerms = props => {
    const { terms } = props;

    return(
        <section className="nes-dialog is-rounded card__terms">
            <h2>terminology</h2>
            <div className="">
                <table className="nes-table is-bordered is-dark">
                    <thead>
                        <tr>
                            <th>{terms.first === 'tech' ? 'tech' : 'no tech'}</th>
                            <th>{terms.first === 'tech' ? 'no tech' : 'tech'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            terms.array.map((term, index) => (
                                <tr key={index}>
                                    <td>{terms.first === 'tech' ? term.tech : term.notech}</td>
                                    <td>{terms.first === 'tech' ? term.notech : term.tech}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <CloseBtn />
        </section>
    );
}

export default CardTerms;
