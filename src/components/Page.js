import React, { useContext } from 'react';
import './Page.css';
import logo from '../assets/logo.png';
import SideBtns from './SideBtns';
import Modal from './Modal';
import Wheel from './Wheel';
import { MainContext } from '../context/MainContext';

const Page = () => {
    const mainContext = useContext(MainContext);

    return (
        <div className="container">
            <header className="title">{mainContext.state.title}</header>
            <main>
                <SideBtns />
                <Wheel />
            </main>
            <Modal />
            <footer>
                <a
                    className="link"
                    href="https://www.covalenthq.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    made for 
                    <img
                        className="logo"
                        src={logo}
                        alt="logo"
                    ></img>
                    by snowdot
                </a>
            </footer>
        </div>
    );
}

export default Page;
