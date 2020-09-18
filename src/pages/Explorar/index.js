import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Spoon from '../../images/spoon.png';
import Drink from '../../images/martini.png';

const Explorar = () => (
  <div className="explore middle">
    <Header hideSearch>explore</Header>
    <Link to="/explorar/comidas" data-testid="explore-food" className="btn">
      <img src={Spoon} alt="spoon pic" className="btnPic" />
      EXPLORE MEALS
    </Link>
    <Link to="/explorar/bebidas"data-testid="explore-drinks" className="btn">
      <img src={Drink} alt="spoon pic" className="btnPic2" />
      EXPLORE COCKTAILS
    </Link>
    <Footer />
  </div>
);

export default Explorar;
