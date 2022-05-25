import React from 'react';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './style.css'

const newExp = () => {
    return (
        <div className='expcover'>
        <div className="profilTop">
            <span className="title">
                <h3>Nouvelle EXP</h3>
            </span>
            <span className="deconnexion">
            <h4>Déconnexion</h4>
            <FontAwesomeIcon icon={faRightFromBracket}/>
            </span>
        </div>
    <div className="profilContenair">
       <form action="" className='grid'>
       
            <div className="exp it">
                <label htmlFor="exp">UserName de l'éxpediteur :</label>
                <input type="text" name="" id="exp" />
            </div>
            <div className="dest it">
                <label htmlFor="dest">UserName du destinataire :</label>
                <input type="text" id='dest'/>
            </div>
            <div className="villeDest it ">
                <label htmlFor="villeDest">Ville de livraison :</label>
                <input type="text" id='villeDest' />
            </div>
            <div className="mobile it">
                <label htmlFor="mobile">Mobile :</label>
                <input type="text" id='mobile' />
            </div>
            <div className="type it">
                <label htmlFor="type">Type du colis :</label>
                <input type="text" id='type' />
            </div>
            <div  id='submitEXP'>
                <input type="submit" name="" value='SOUMETTRE' id="submit" />
            </div>
        
       </form>
    </div>
</div>
    );
};

export default newExp;