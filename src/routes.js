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
  ExplorarComidas,
  ExplorarIngredientes,
  ExplorarBebidas,
  ExplorarOrigem,
  DetalhesComida,
  DetalhesBebida,
  NotFound,
} from './pages/';

const Rotas = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/comidas/:id/progress" component={DetalhesComida} />
    <Route path="/comidas/:id" component={DetalhesComida} />
    <Route path="/comidas" component={Comidas} />

    <Route path="/bebidas/:id/progress" component={DetalhesBebida} />
    <Route path="/bebidas/:id" component={DetalhesBebida} />
    <Route path="/bebidas" component={Bebidas} />

    <Route path="/explorar/comidas/ingredientes" component={ExplorarIngredientes} />
    <Route path="/explorar/bebidas/ingredientes" component={ExplorarIngredientes} />
    <Route path="/explorar/comidas/area" component={ExplorarOrigem} />
    <Route path="/explorar/comidas" component={ExplorarComidas} />
    <Route path="/explorar/bebidas/area" component={NotFound} />
    <Route path="/explorar/bebidas" component={ExplorarBebidas} />
    <Route path="/explorar" component={Explorar} />

    <Route path="/perfil" component={Perfil} />

    <Route path="/receitas-feitas" component={ReceitasFeitas} />
    <Route path="/receitas-favoritas" component={ReceitasFav} />

    <Route component={NotFound} />
  </Switch>
);

export default Rotas;
