import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Spoon from '../../images/spoon.png';
import Drink from '../../images/martini.png'

const Explorar = () => (
  <div className="main">
    <Header hideSearch>Explorar</Header>
    <div className="middle">
      <Link to="/explorar/comidas" data-testid="explore-food" className="btn">
        <img src={Spoon} alt="spoon pic" className="btnPic"/>
        Explorar Comidas
      </Link>
      <Link to="/explorar/bebidas"data-testid="explore-drinks" className="btn">
        <img src={Drink} alt="spoon pic" className="btnPic2"/>
        Explorar Bebidas
      </Link>
    </div>
    <Footer />
  </div>
);

export default Explorar;
