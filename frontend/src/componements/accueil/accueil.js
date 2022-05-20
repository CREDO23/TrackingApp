import React from 'react';
import './style.css'

const Accueil = () => {
    return (
        <div >

               <div className='top'>
                    <h1> Nous acheminons vos biens professionnels,
                    effets personnels, valises diplomatiques par AIR, MER et ROUTE .</h1>
                    <button>EN SAVOIR PLUS</button>
                    <div cover></div>
               </div>

                <div className='mid'>
                    <h3>BIENVENU À L'AGENCE ....</h3>
                    <div className='categories'>
                        <div className='item'>
                            <h4>ENTREPRISES</h4>
                        </div>
                        <div className='item'>
                            <h4>PARTICULIERS</h4>
                        </div>
                        <div className='item'>
                            <h4>DIPLOMATES</h4>
                        </div>
                    </div>
                </div>

                <div className='bottom'>
                    <h4> Nos spécialistes sont à la pointe de l’ingénierie logistique et sont aptes à acheminer vos marchandises et effets personnels en toute transparence, fiabilité et sécurité .</h4>
                </div>

        </div>
    );
};

export default Accueil;