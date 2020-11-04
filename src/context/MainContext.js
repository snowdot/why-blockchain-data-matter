import React, { useEffect, useState } from 'react';
import tech from '../data/tech.json';
import nontech from '../data/nontech.json';
import meaning from '../data/meaning.json';
import * as d3 from 'd3';

export const MainContext = React.createContext();
MainContext.displayName = 'MainProvider';

export const MainProvider = ({ children }) => {
    const [file, setFile] = useState('no tech');
    const [title, setTitle] = useState('no tech');
    const [terms, setTerms] = useState({
        first: 'no tech',
        array: []
    });
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState(0);
    const [hasRotate, setHasRotate] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showTerms, setShowTerms] = useState(false);

    useEffect(() => {
        if(file === 'tech') {
            setTitle('why blockchain data matter');
            setData(tech);
            setTerms({
                first: 'tech',
                array: meaning.sort((a, b) => d3.ascending(a.tech, b.tech))
            })
        } else {
            setTitle('why wizard spells matter');
            setData(nontech);
            setTerms({
                first: 'no tech',
                array: meaning.sort((a, b) => d3.ascending(a.notech, b.notech))
            })
        }
    }, [file]);

    return (
        <MainContext.Provider 
            value={{
                state: {
                    data,
                    current,
                    file,
                    title,
                    terms,
                    hasRotate,
                    showModal,
                    showTerms
                },
                setState: {
                    setCurrent,
                    setFile,
                    setHasRotate,
                    setShowModal,
                    setShowTerms
                }
            }}
        >
            {children}
        </MainContext.Provider>
    )
}
