import React from 'react';
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import Notfound from './pages/NotFound';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <Router>
      <HashRouter basename='/movie-card-library-crud/'>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route component={Notfound} />
        </Switch>
      </HashRouter>
    </Router>
  );
}

export default App;
