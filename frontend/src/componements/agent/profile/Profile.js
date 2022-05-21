import React from 'react';
import './style.css'
const Profile = () => {
    return (
        <div className='cover'>
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
                    <div className="ville it">
                        <p>Ville :</p>
                        <h3>Goma</h3>
                    </div>
                    <div className="pays it">
                        <p>Pays :</p>
                        <h3>Rep. Dem. du Congo</h3>
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