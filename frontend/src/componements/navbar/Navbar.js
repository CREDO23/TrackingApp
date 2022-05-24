import React from 'react';
import './style.css'

const Navbar = () => {
    return (
        <div className='contenair'>
            <div className='left'>
               LOGO
            </div>
           <ul className='middle'>
                <li><a href='#ACCUEIL'>ACCUEIL</a></li>
                <li><a href='#À PROPOS'>À PROPOS</a></li>
                <li><a href='#COMMENT ÇA MARCHE'>COMMENT ÇA MARCHE ?</a></li>
           </ul>
           <div className='right'><a href='#CONNEXION'>CONNEXION</a></div>
        </div>
    );
};

export default Navbar;