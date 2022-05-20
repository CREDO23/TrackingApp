import React from 'react';
import './style.css'

const Navbar = () => {
    return (
        <div className='contenair'>
            <div className='left'>
               LOGO
            </div>
           <ul className='middle'>
                <li>ACCUEIL</li>
                <li>À PROPOS</li>
                <li>COMMENT ÇA MARCHE</li>
           </ul>
           <div className='right'>SE CONNECTER</div>
        </div>
    );
};

export default Navbar;