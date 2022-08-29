import React from 'react';
import {faCircleUser } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

const Ajout = () => {
    const 
    return (
        <>
        <form className='agent'  onSubmit={handleSubmit}>
            <div className="icon">
            <FontAwesomeIcon icon={faCircleUser} color="#E5E5E5" size="5x"/>
            </div>
            <div className="agentForm">
            <div>
                <input type="text" placeholder="userName"  required  name="userName" id="userName"  />
            </div>
             <div>
                <input type="text" placeholder='FirstName'  required name="firstName" id="firstName" />
            </div>
            <div>
                <input type="text" placeholder='LastName'  required name="lastName" id="lastName" />
            </div>
            <div>
                <input type="text" placeholder='Pays(poste)'  required name="pays" id="pays" />
            </div>
            <div>
                <input type="text" placeholder='Ville(Poste)' required name="ville" id="ville" />
            </div>
            <div>
                <input type="mail" placeholder='Email' required  name="mail" id="mail" />
            </div>   
            <div>
                <input type="password" placeholder='Password' required name="passowrd" id="password" />
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