import React from 'react';
import MenuAdmin from '../../Composants/Menu/MenuAdmin';
import NavAdmin from '../../Composants/NavBar/NavAdmin';
import '../standardStyle.css'
import './AjoutMobile.css'

const AjoutMobile = () => {
    return (
        <div className='Admin_Container'>
            <MenuAdmin />

            <div className='Admin'>
                <NavAdmin />
                <div className="containerAdmin">
                    <div className="from_NMobile">
                        <div id="Title_NMobile">
                            <span>Nouveau Mobile</span>
                        </div>
                        <form id="NouveauMobile">
                            <label htmlFor="Nom_Mobile">Nom <span>*</span></label><input id="Nom_Mobile" type="text" name="Nom_Mobile"
                                className="champ_NMobile" required />
                            <label htmlFor="Nom_poste">Poste (Ville )<span>*</span></label><input id="Nom_poste" type="text" name="Nom_poste"
                                className="champ_NMobile" required />
                            <label htmlFor="Type_Mobile">Type du Mobile<span>*</span></label><input id="Type_Mobile" type="text" name="Type_Mobile"
                                className="champ_NMobile" required />

                            <input type="submit" name="BtEnvoi" value="Enregistrer" className="submit_NMobile" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AjoutMobile;