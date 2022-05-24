import React from 'react';
import './style.css'

const Misajour = () => {
    return (
        <div className='cover'>
        <div className="profilTop">
            <span className="title">
                <h3>MIS À JOUR</h3>
            </span>
            <span id="deconnexion">
                <button>Déconnexion</button>
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