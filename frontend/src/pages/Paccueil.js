import React from 'react';
import Navbar from '../componements/navbar/Navbar'
import Accueil from '../componements/accueil/accueil';
import Footer from '../componements/footer/Footer';

const Paccueil = () => {
    return (
      <>
        <Navbar></Navbar>
        <Accueil></Accueil>
        <Footer></Footer>
      </>
    );
};

export default Paccueil;