import React, {useState, useEffect, useContext} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import './MovieDetail.css';
import { WishlistContext } from '../../contexts/WishlistContext.jsx';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [actors, setActors] = useState([]);
	const { addToWishlist } = useContext(WishlistContext);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}`,
                    {
                        headers: {
                            Authorization: 'Bearer JeSaisPas',
                            accept: 'application/json',
                        },
                        params: {
                            language: 'fr-FR',
                        },
                    }
                );
                setMovie(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des détails du film :', error);
            }
        };
        const fetchSimilarMovies = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}/similar`,
                    {
                        headers: {
							Authorization: 'Bearer JeSaisPas',
                            accept: 'application/json',
                        },
                        params: {
                            language: 'fr-FR',
                            page: 1,
                        },
                    }
                );
                setSimilarMovies(response.data.results);
            } catch (error) {
                console.error('Erreur lors de la récupération des films similaires :', error);
            }
        };

        const fetchActors = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}/credits`,
                    {
                        headers: {
							Authorization: 'Bearer JeSaisPas',
                            accept: 'application/json',
                        },
                    }
                );
                setActors(response.data.cast.slice(0, 10));
            } catch (error) {
                console.error('Erreur lors de la récupération des acteurs :', error);
            }
        };

        fetchSimilarMovies();
        fetchMovieDetails();
        fetchActors();
    }, [id]);


    if (!movie) return <p>Chargement...</p>;

    return (
        <div className="movie-detail-container">
            <div className="movie-detail-main">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-detail-poster"
                />

				<div className="movie-detail-content">
					<h1>{movie.title}</h1>
					<p>{movie.overview}</p>
					<p>Date de sortie : {movie.release_date}</p>
					<p>Note moyenne : ⭐ {movie.vote_average}</p>

					<button className="wishlist-button" onClick={ () => addToWishlist(movie.id)}>
						Ajouter à la Wishlist
					</button>

				</div>

				<div className="similar-movies-sidebar">
					<h2>Films Similaires</h2>
					<div className="similar-movies-scroll">
                        {similarMovies.map((similarMovie) => (
                            <div key={similarMovie.id} className="similar-movie-card">
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${similarMovie.poster_path}`}
                                    alt={similarMovie.title}
                                    className="similar-movie-poster"
                                />
                                <Link to={`/movie/${similarMovie.id}`} className="similar-movie-title">
                                    {similarMovie.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="actor-detail-content">
                <h2>Acteurs Principaux</h2>
                <div className="actors-list">
                    {actors.map((actor) => (
                        <div key={actor.id} className="actor-card">
                            <img
                                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                                alt={actor.name}
                                className="actor-photo"
                            />
                            <p className="actor-name">{actor.name}</p>
                            <p className="actor-character">Rôle : {actor.character}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
