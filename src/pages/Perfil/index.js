import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './index.css';
import Tick from '../../images/orngeTick.png';
import Heart from '../../images/newOrangeHeart.png';
import Exit from '../../images/exit.png';


const Perfil = () => {
  const user = JSON.parse(localStorage.getItem('user')) || { email: '' };
  const userEmail = user.email;

  const [clickOk, setClickOk] = useState(false);

  const clickF = () => {
    localStorage.clear();
    setClickOk(true);
  };

  return (
    <div>
      <Header hideSearch>profile</Header>
      {clickOk && <Redirect to="/" />}
      {userEmail &&
      <div className="mainProfile">
        <p data-testid="profile-email" className="txt">E-mail: {userEmail}</p>
        <div className="btns">
          <Link className="botao" to="/receitas-feitas" data-testid="profile-done-btn" >
            <img src={Tick} alt="tick pic" className="btnPic" />
            DONE RECIPES
          </Link>
          <Link className="botao" to="/receitas-favoritas" data-testid="profile-favorite-btn" >
            <img src={Heart} alt="heart pic" className="btnPic" />
            FAVORITE RECIPES
          </Link>
          <Link className="botao" to="/" data-testid="profile-logout-btn" onClick={() => clickF()}>
            <img src={Exit} alt="exit pic" className="btnPic" />
            EXIT
          </Link>
        </div>
      </div>
      }
      <Footer />
    </div>
  );
};

export default Perfil;
