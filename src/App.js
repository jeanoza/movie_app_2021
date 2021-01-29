import "./reset.css"
import React, { useState, useEffect} from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

const API_KEY = "efe03a6d3db809fae4ff34eeb880e298";
const API_LANG = "fr-FR";

const API_EX = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;
const API_GENRE = `https://api.themoviedb.org/3/genre/movie/list?api_key=efe03a6d3db809fae4ff34eeb880e298&language=${API_LANG}`;
const API_TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=${API_LANG}`;
const API_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${API_LANG}`

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [genresCategory, setGenresCategory] = useState([]);

  useEffect(() => {
    axios
      .get(API_POPULAR)
      .then(
        ({ data: { results } }) => {
          setIsLoading(false);
          setMovies(results);
        });
  }, []); // [] is for call useEffect when updated.
    
  useEffect(() => {
    axios
      .get(API_GENRE)
      .then(
        ({ data: { genres } }) => {
          setGenresCategory(genres)
      });
  }, []);

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
            <div className="movies">
              { movies.map(movie => (
              <Movie
                  key={movie.id}
                  id={movie.id}
                  date={movie.release_date}
                  title={movie.title}
                  summary={movie.overview}
                  poster_path={movie.poster_path}
                  genre_ids={movie.genre_ids}
                  genres_category={genresCategory}
              />
            ))}
            </div>
          )}
      </section>
    );
}

export default App;

/*
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    genresCategory:[]
  };

  getMovies = async () => {
    const { data: { results } } = await axios.get(API_POPULAR); //this API don't have genre with form text but only id value.
    const { data: { genres } } = await axios.get(API_GENRE); //So, have to convert to text with this API.

    this.setState({ movies: results, isLoading: false });
    this.setState({ genresCategory: genres });
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies, genresCategory } = this.state;
    console.log(movies);
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
            <div className="movies">
              { movies.map(movie => (
              <Movie
                  key={movie.id}
                  id={movie.id}
                  date={movie.release_date}
                  title={movie.title}
                  summary={movie.overview}
                  poster_path={movie.poster_path}
                  genre_ids={movie.genre_ids}
                  genres_category={genresCategory}
              />
            ))}
            </div>
          )}
      </section>
    );
  }
}
export default App;
*/