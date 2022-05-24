import React from 'react';
import './style.css'

const Profile = () => {
    return (
        <div className='cover'>
        <div className="profilTop">
            <span className="title">
                <h3>PROFIL</h3>
            </span>
            <span className="deconnexion">
                <button id="deconnexionn">Déconnexion</button>
            </span>
        </div>
    <div className="profilContenair">
        <div className="img">

        </div>
        <div  className="grid ">
            <div className="userName it">
                <p>UserName :</p>
                <h3>Thierry23</h3>
            </div>
            <div className="firstName it">
                <p>FirstName :</p>
                <h3>CHIMPAYE</h3>
            </div>
            <div className="lastName it ">
                <p>LastName :</p>
                <h3>CREDO</h3>
            </div>
            <div className="email it">
                <p>Email :</p>
                <h3>bakerathierry@gmail.com</h3>
            </div>
            <div  id='change'>
               <button >Changer le mot de pass</button>
            </div>
            <div  id='edit'>
                <button >Editer le profil</button>
            </div>
        </div>
    </div>
</div>
    );
};

export default Profile;