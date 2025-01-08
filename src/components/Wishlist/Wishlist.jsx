import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../../contexts/WishlistContext.jsx';
import './Wishlist.css';

const Wishlist = () => {
	const { wishlist, removeFromWishlist } = useContext(WishlistContext);

	if (wishlist.length === 0) {
		return <p className="wishlist-empty">Votre Wishlist est vide.</p>;
	}

	return (
		<div className="wishlist-container">
			<h1>Ma Wishlist</h1>
			<div className="wishlist-grid">
				{wishlist.map((movie) => (
					<div key={movie.id} className="wishlist-card">
						<img
							src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
							alt={movie.title}
							className="wishlist-poster"
						/>
						<h2 className="wishlist-title">{movie.title}</h2>
						<p>Note moyenne : ⭐ {movie.vote_average}</p>
						<div className="wishlist-buttons">
							<Link to={`/movie/${movie.id}`} className="wishlist-details">
								Voir les détails
							</Link>
							<button className="wishlist-remove" onClick={() => removeFromWishlist(movie.id)}>
								Retirer
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Wishlist;
