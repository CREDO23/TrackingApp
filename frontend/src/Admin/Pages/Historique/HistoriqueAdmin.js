import React from 'react';
import MenuAdmin from '../../Composants/Menu/MenuAdmin';
import NavAdmin from '../../Composants/NavBar/NavAdmin';
import '../standardStyle.css'
import './HistoriqueAdmin.css'

const HistoriqueAdmin = () => {
    return (
        <div className='Admin_Container'>
            <MenuAdmin />

            <div className='Admin'>
                <NavAdmin />

                <div className="HistoryAdmin">
                    <span className='AdminTitle'>Historique</span>

                    <table className='table'>
                        <thead className="TitreHistoryAdmin">
                            <th className='thA'>Date</th>
                            <th className='thA'>Poste</th>
                            <th className='thA'>Agent</th>
                            <th className='thA'>Description</th>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HistoriqueAdmin;