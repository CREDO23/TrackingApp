import React from 'react';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './style.css'

const Misajour = () => {
    return (
        <div className='msjcover'>
        <div className="profilTop">
            <span className="title">
                <h3>MIS À JOUR</h3>
            </span>
            <span id="deconnexion">
                <h4>Déconnexion</h4>
            <FontAwesomeIcon icon={faRightFromBracket}/>
            </span>
        </div>
    <form className="profilContenair">
        <div  className="grid ">
            <div className="from it">
                <input type="text" placeholder='FROM' name="from" id="from" />
            </div>
            <div className="to it">
                <input type="text" placeholder='TO' name="from" id="to" />
            </div>
            <div  id='submit'>
                <input type="submit" name="" value="SOUMETTRE"/>
            </div>
        </div>
    </form>
</div>
    );
};

export default Misajour;