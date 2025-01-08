import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';
import {WishlistContext} from "../../contexts/WishlistContext.jsx";

const MovieCard = ({ id, title, posterPath, voteAverage }) => {
	const { addToWishlist } = useContext(WishlistContext);
	const movie = {
		id,
		title,
		poster_path: posterPath,
		vote_average: voteAverage,
	};

	return (
        <div className="movie-card">
            <img
                src={`https://image.tmdb.org/t/p/w200${posterPath}`}
                alt={title}
                className="movie-card-poster"
            />
            <h2 className="movie-card-title">{title}</h2>
            <p className="movie-card-rating">⭐ {voteAverage}</p>
			<div className="movie-card-buttons">
				<Link to={`/movie/${id}`} className="movie-card-details-button">
					Voir les détails
				</Link>
				<button className="movie-card-wishlist-button" onClick={() => addToWishlist(movie)}>
					Ajouter à la Wishlist
				</button>
			</div>
		</div>
	);
};

export default MovieCard;
