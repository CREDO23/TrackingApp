import React from 'react';
import './style.css'

const Notif = () => {
    return (
    <div className='notifcover'>
        <div className="notifTop">
            <span className="title">
                <h3>AVISER</h3>
            </span>
            <span className="deconnexion">
                <button id="deconnexionn">Déconnexion</button>
            </span>
        </div>
        <div className="notifContenair">
            <div id="MOBILE1">
                <h3>MOBILE 1</h3>
                <div>
                    <div>
                        
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className="MOBILE2">
                <h3>MOBILE 2</h3>
                <div>
                    <div>
                        
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div id="MOBILE3">
                <h3>MOBILE 3</h3>
                <div>
                    <div>
                        
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div id="MOBILE4">
                <h3>MOBILE 4</h3>
                <div>
                    <div>
                        
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Notif;