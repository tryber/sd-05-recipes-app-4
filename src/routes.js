import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Bebidas,
  Comidas,
  Explorar,
  Login,
  Perfil,
  ReceitasFav,
  ReceitasFeitas,
} from './pages/';

const Rotas = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/comidas" component={Comidas} />
    <Route path="/comidas/{id-da-receita}" component={Comidas} />
    <Route path="/comidas/{id-da-receita}/progress" component={Comidas} />

    <Route path="/bebidas" component={Bebidas} />
    <Route path="/bebidas/{id-da-receita}" component={Bebidas} />
    <Route path="/bebidas/{id-da-receita}/progress" component={Bebidas} />

    <Route path="/explorar" component={Explorar} />
    <Route path="/explorar/comidas" component={Comidas} />
    <Route path="/explorar/bebidas" component={Bebidas} />
    <Route path="/explorar/comidas/ingredientes" component={Bebidas} />
    <Route path="/explorar/bebidas/ingredientes" component={Bebidas} />
    <Route path="/explorar/comidas/area" component={Bebidas} />

    <Route path="/perfil" component={Perfil} />

    <Route path="/receitas-feitas" component={ReceitasFeitas} />
    <Route path="/receitas-favoritas" component={ReceitasFav} />
  </Switch>
);

export default Rotas;
