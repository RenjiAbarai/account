import * as types from '../types';
import {fetchMovieById, fetchSearchMovies, fetchMoviesInTheaters, fetchMoviesComingSoon} from '../api';

const state = {
  movies: [],
  movieList: {
    title: '',
    total: 0,
    subjects: [],
  },
  busy: false,
  movie: {},
};

const action = {

  // [types.FETCH_MOVIES](context,payload){
  //   fetchMoviesByType(payload.type, payload.start, payload.count)
  //     .then(data=>{
  //       data.type = payload.type;
  //       return context.commit([types.FETCH_MOVIES], data)
  //     });
  // },
  [types.FETCH_MOVIES](content, payload){

  }
  // FETCH_MOVIE_LIST
  // FETCH_MOVIE_BY_ID
  // SET_INFINITE_BUSY
  // CLEAN_MOVIES
  // CLEAN_MOVIE_LIST
  // CLEAN_MOVIE
};
