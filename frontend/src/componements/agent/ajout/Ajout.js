import React from 'react';
import './style.css'

const Ajout = () => {
    return (
        <>
        <form action="">
            <div className="icon">
 
            </div>
            <div className="form">
            <div>
                <input type="text" placeholder="userName" name="userName" id="userName" />
            </div>
             <div>
                <input type="text" placeholder='FirstName' name="firstName" id="firstName" />
            </div>
            <div>
                <input type="text" placeholder='LastName' name="lastName" id="lastName" />
            </div>
            <div>
                <input type="text" placeholder='Pays(poste)' name="pays" id="pays" />
            </div>
            <div>
                <input type="text" placeholder='Ville(Poste)' name="ville" id="ville" />
            </div>
            <div>
                <input type="mail" placeholder='Email' name="mail" id="mail" />
            </div>   
            <div>
                <input type="password" placeholder='Password' name="passowrd" id="password" />
            </div>
             <div className='btn'>
                 <input type="submit" name="" id="submit" value="SOUMETTRE" />
             </div>
            </div>
            
        </form>
        </>
    );
};

export default Ajout;