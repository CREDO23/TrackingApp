import React from 'react';
import MenuAdmin from '../../Composants/Menu/MenuAdmin';
import NavAdmin from '../../Composants/NavBar/NavAdmin';
import '../standardStyle.css'
import './AjoutAgent.css'


const AjoutAgent = () => {
    return (
        <div className='Admin_Container'>
            <MenuAdmin />

            <div className='Admin'>
                <NavAdmin />
                <div className="containerAdmin">
                    <div className="from_NAgent">
                        <div id="TitleNagent">
                            <span>Nouveau Agent</span>
                        </div>
                        <form id="NouveauAgent">
                            <label htmlFor="Nom">Nom <span>*</span></label><input id="Nom" type="text" name="Nom"
                                className="champ_NAgent" required />
                            <label htmlFor="Post-Nom">Post-Nom<span>*</span></label><input id="Post-Nom" type="text" name="Post-Nom"
                                className="champ_NAgent" required />
                            <label htmlFor="User_Name">User_Name<span>*</span></label><input id="UserNAme" type="text" name="UserNAme"
                                className="champ_NAgent" required />
                            <label htmlFor="Mail">Mail<span>*</span></label><input id="Mail" type="text" name="Mail"
                                className="champ_NAgent" required />

                            <label htmlFor="passWord">passWord<span>*</span></label><input id="passWord" type="text" name="passWord"
                                className="champ_NAgent" required />

                            <input type="submit" name="BtEnvoi" value="Enregistrer" className="submit_NAgent" />
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AjoutAgent;