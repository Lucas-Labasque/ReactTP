import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../MovieCard/MovieCard.jsx';
import './MovieList.css';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
                    headers: {
						Authorization: 'Bearer JeSaisPas',
                        accept: 'application/json',
                    },
                    params: {
                        language: 'fr-FR',
                        page: 1,
                        sort_by: 'popularity.desc',
                    },
                });
                setMovies(response.data.results);
            } catch (error) {
                console.error('Erreur lors de la récupération des films :', error);
            }
        };

        fetchMovies();
    }, []);

    const filteredMovies = search
        ? movies.filter((movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase())
        )
        : movies;

    return (
        <div className="movie-list-container">
            <h1 className="movie-list-title">Liste des Films Populaires</h1>
            <input
                type="text"
                placeholder="Rechercher un film"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="movie-list-search-bar"
            />
            <div className="movie-list-grid">
                {filteredMovies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        posterPath={movie.poster_path}
                        voteAverage={movie.vote_average}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
