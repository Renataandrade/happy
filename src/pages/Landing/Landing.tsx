import React from 'react';

import LogoSVG from '../../assets/images/logo.svg';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Landing = () => {

    return(
        <div id="page-landing">
          <div className="content-wrapper">
            <img src={LogoSVG} alt="Happy"/>
    
            <main>
              <h1>Leve felicidade para o mundo</h1>
              <p>Visite orfanatos e mude o dia de muitas crianças.</p>
            </main>
    
            <div className="location">
              <strong>Curitiba</strong>
              <span>Paraná</span>
            </div>
    
            <Link to="/map" className="enter-app">
              <FiArrowRight 
                size={26}
                color="rgba(0, 0, 0, 0.6)"
              />
            </Link>
          </div>
        </div>
    )
}

export default Landing;