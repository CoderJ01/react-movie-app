import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=96e2619f';

const App = () => {
    const [movies, setMovies] = useState([]); // useState is a state, default values of movie set to empty array

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`); // call API
        const data = await response.json(); // get data from API

        console.log(data);
    }

    // fetch data from API as soon as component loads
    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input 
                placeholder="Search for movies"
                value="Superman"
                onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} /> // movie is a prop
                        ))}
                    </div>
                    ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                    )
            }
        </div>
    );
}

export default App;