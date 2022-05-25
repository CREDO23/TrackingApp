import React from 'react';
import './style.css'

const Footer = () => {
    return (
        <div className='fcontenair'>
         <div className="Footcover"></div>

           <div className='fleft'>
           <div className='card'>
                <h4>À PROPOS</h4>
                <ul>
                    <li>L'agence...</li>
                    <li>Notre reseau internationnal</li>
                    <li>Nos partenaires</li>
                </ul>
            </div>
            <div className='card'>
                <h4>ENTREPRISES</h4>
                <ul>
                    <li>L'agence...</li>
                    <li>Notre reseau internationnal</li>
                    <li>Nos partenaires</li>
                </ul>
            </div>
            <div className='card'>
                <h4>PARTICULIERS</h4>
                <ul>
                    <li>L'agence...</li>
                    <li>Notre reseau internationnal</li>
                    <li>Nos partenaires</li>
                </ul>
            </div>
            <div className='card'>
                <h4>DIPLOMATES</h4>
                <ul>
                    <li>L'agence...</li>
                    <li>Notre reseau internationnal</li>
                    <li>Nos partenaires</li>
                </ul>
            </div>
            </div>
            <div className='contact'>
                <h3>CONTACTER NOUS</h3>
                <div>
                    LOGO
                </div>
                <div></div>
                <h5>Genève Aéroport, Voie-des-Traz 20,
                 1215 Le Grand-Saconnex suisse</h5>
            </div>
           </div>
    );
};

export default Footer;