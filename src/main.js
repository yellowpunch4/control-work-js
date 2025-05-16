import FilmsModel from './model/movies-model.js';
import FilmsBoardPresenter from './presenter/moviess-board-presenter.js';
import AddFilmComponent from './view/add-movie-component.js';
import { render } from './framework/render.js';
import FilterMovieComponent from './view/filter-movie-component.js';
const filmsModel = new FilmsModel();

const boardElement = document.querySelector('.container');

const filmsBoardPresenter = new FilmsBoardPresenter({
  boardContainer: boardElement,
  filmsModel: filmsModel,
});
const addFilmComponent = new AddFilmComponent();
const filterFilmComponent = new FilterMovieComponent();

render(addFilmComponent, boardElement, 'afterbegin');
render(filterFilmComponent,boardElement);
filmsBoardPresenter.init();
