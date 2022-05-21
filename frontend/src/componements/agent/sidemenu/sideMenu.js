import React from 'react';
import './style.css'

const sideMenu = () => {
    return (
        <div className='sidemenuA'>
            <div className="topA">
                <div className="imgProfile"></div>
                <h5>CHIMPAYE CREDO Thierry</h5>
                <h5>bakerathierry@gmail.com</h5>
            </div>
            <div className="bottomA">
                <div className='menu'>
                    <h4>Dashboard</h4>
                </div>
                <div className='menu'> 
                    <h4>Nouvelle EXP</h4>
                </div>
                <div className='menu'>
                    <h4>Mis à jour</h4>
                </div>
                <div className='menu'>
                    <h4>Aviser</h4>
                </div>
                <div className='menu'>
                    <h4>Historique</h4>
                </div>
                <div className='menu'>
                    <h4>Tracker</h4>
                </div>
                <div className='menu'>
                    <h4>Profil</h4>
                </div>
            </div>
        </div>
    );
};

export default sideMenu;