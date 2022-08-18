import React from 'react';
import MenuAdmin from '../../Composants/Menu/MenuAdmin';
import NavAdmin from '../../Composants/NavBar/NavAdmin';
import './Tracking.css'
import '../standardStyle.css'

const Tracking = () => {
    return (
        <div className='Admin_Container'>
            <MenuAdmin />

            <div className='Admin'>
                <NavAdmin />
                <div className="containerAdmin">
                    <div className="from_Track">
                        <div className="TitleTrackAdmin">
                            <span>Tracker un coli</span>
                        </div>
                        <form id="TrackingAdmin">
                            <label htmlFor="keyAdmin">Entrer la clé<span>*</span></label><input id="keyAdmin" type="text" name="keyAdmin"
                                className="champ_TrackAdmin" required />
                            <input type="submit" name="BtEnvoiAdmin" value="Tracker" className="submit_TrackAdmin" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tracking;