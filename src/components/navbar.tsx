import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
    links: Array<{
        label: string,
        url: string
    }>
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    const navList = useRef<HTMLDivElement>(null);

    const ToggleMenu = (): void => {
        if (null !== navList.current) {
            navList.current.classList.add('open');
        }
    }

    const CloseMenu = (): void => {
        if (null !== navList.current) {
            navList.current.classList.remove('open');
        }
    }

    return (
        <nav className="main-nav">
            <a className="main-nav__logo" href="#">Da'Journal</a>
            <div className="main-nav__links-container" ref={navList}>

                <ul className="main-nav__links" >
                    {
                        links.map((link, index) => (
                            <li key={index.toString()}><Link to={link.url}>{link.label}</Link></li>
                        ))
                    }
                </ul>
                <div aria-hidden='true' onClick={CloseMenu} className="main-nav__links__overlay"></div>
            </div>

            <svg onClick={ToggleMenu} xmlns="http://www.w3.org/2000/svg" className="main-nav__m-expand-menu" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </nav>
    )
}

export default Navbar;