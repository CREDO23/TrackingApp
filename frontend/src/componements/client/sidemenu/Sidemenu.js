import React from 'react';
import {faHome , faClockRotateLeft , faMapLocationDot ,faUser} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './style.css'

const Sidemenu = () => {
    return (
        <div className='sidemenuC'>
            <div className="topA">
                <div className="imgProfile"></div>
                <h5>CHIMPAYE CREDO Thierry</h5>
                <h5>bakerathierry@gmail.com</h5>
            </div>
            <div className="bottomA">
                <div className='menu'>
                    <h4>Dashboard</h4>
                    <FontAwesomeIcon icon={faHome}/>
                </div>
                <div className='menu'>
                    <h4>Historique</h4>
                    <FontAwesomeIcon icon={faClockRotateLeft}/>
                </div>
                <div className='menu'>
                    <h4>Tracker</h4>
                <FontAwesomeIcon icon={faMapLocationDot}/>
                </div>
                <div className='menu'>
                    <h4>Profil</h4>
                <FontAwesomeIcon icon={faUser}/>
                </div>
            </div>
        </div>
    );
};

export default Sidemenu;