import React from 'react';
import Accueil from '../componements/accueil/accueil';
import Footer from '../componements/footer/Footer';
import About from '../componements/about/about';
import Sevice from '../componements/service/service';
import Prix from '../componements/prix/prix';
import Team from '../componements/team/team';

const Paccueil = () => {
    return (
      <>
        {/* <Navbar></Navbar> */}
        <Accueil></Accueil>
        <About></About>
        <Sevice></Sevice>
        <Prix></Prix>
        <Team></Team>
        <Footer></Footer>
      </>
    );
};

export default Paccueil;