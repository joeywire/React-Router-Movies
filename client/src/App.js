import React, { useState, useEffect } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route, Link, Switch } from "react-router-dom";


export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <Switch>
        <Route exact path='/'>
            <MovieList />
        </Route>
        <Route path='/movies/:id'>
          <Movie />
        </Route>
      </Switch>
    </div>
  );
}
