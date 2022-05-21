import React from 'react';
import './style.css'

const Connexion = () => {
    return (
       <>
       <form action="">
           <div className="icon">

           </div>
           <div className='choix'>
               <span>S'inscrire</span>
               <span>Se connecter</span>
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

export default Connexion; 