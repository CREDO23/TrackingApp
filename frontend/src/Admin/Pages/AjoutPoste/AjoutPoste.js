import React from 'react';
import MenuAdmin from '../../Composants/Menu/MenuAdmin';
import NavAdmin from '../../Composants/NavBar/NavAdmin';
import '../standardStyle.css'
import './AjoutPoste.css'

const AjoutPoste = () => {
    return (
        <div className='Admin_Container'>
            <MenuAdmin />

            <div className='Admin'>
                <NavAdmin />
                <div className="containerAdmin">
                    <div className="from_NPoste">
                        <div id="TitleNPoste">
                            <span>Nouveau Poste</span>
                        </div>
                        <form action="#" id="NouveauPoste">
                            <label htmlFor="Nom_Poste">Nom du poste <span>*</span></label><input id="Nom_Poste" type="text" name="Nom_Poste"
                                className="champ_NPoste" required />
                            <label htmlFor="ville">Ville <span>*</span></label><input id="ville" type="text" name="ville"
                                className="champ_NPoste" required />
                            <label htmlFor="Responsable">Responsable (Agent)<span>*</span></label><input id="Responsable" type="text" name="Responsable"
                                className="champ_NPoste" required />

                            <input type="submit" name="BtEnvoi" value="Enregistrer" className="submit_NPoste" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AjoutPoste;