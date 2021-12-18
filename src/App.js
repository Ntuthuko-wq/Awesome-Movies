import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import './App.css';
import Navbar from "../src/components/Navbar/Navbar"

//const Movies_API = "https://www.themoviedb.org/movie";
const Movies_API = "https://api.themoviedb.org/3/movie/popular?api_key=<<d4f7b87d7cedfdfbbb297f46aa3e8779>>&language=en-US&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<d4f7b87d7cedfdfbbb297f46aa3e8779>>&language=en-US";


function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getMovies = (API) => {
        fetch(API)
            .then(res => res.json()).then
            (data => {
                console.log(data);
                setMovies(data.results);
            });
    }

    useEffect(() => {
        getMovies(Movies_API);
    }, []);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            getMovies(SEARCH_API + searchTerm)
            setSearchTerm("");
        }
    };

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }

    <div className="Navbar-menu">
        <Navbar />
    </div>

    return (
        <>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <input className="search" type="search"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleOnChange} />
                </form>
            </div>
            <div className="movie-container">
                {movies.length >= 0 &&
                    movies.map((movie) =>
                        <Movie key={movie.id} {...movie} />
                    )}
            </div>
        </>
    );
}




export default App;