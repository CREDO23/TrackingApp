import React from 'react';
import MenuAdmin from '../../Composants/Menu/MenuAdmin';
import NavAdmin from '../../Composants/NavBar/NavAdmin';
import '../standardStyle.css'
import './HomeAdmin.css'

const HomeAdmin = () => {
    return (
        <div className='Admin_Container'>
            <MenuAdmin />

            <div className='Admin'>
                <NavAdmin />
                <div className="containerAdmin">
                    <section className="AccueilAdmin">
                        <div className="DescriptionAdm">
                            <h1 className='h1'> CRES TRACKING COLIS</h1>
                            <p className="text_descAd">
                                Nous acheminons vos biens professionnels,<br />
                                Effets personnels, valises diplomatiques par AIR, MER et ROUTE.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HomeAdmin;