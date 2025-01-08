import React, { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
	const [wishlist, setWishlist] = useState([]);

	useEffect(() => {
		const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
		setWishlist(storedWishlist);
	}, []);

	const addToWishlist = (movie) => {
		const isAlreadyInWishlist = wishlist.some((item) => item.id === movie.id);
		if (!isAlreadyInWishlist) {
			const updatedWishlist = [...wishlist, movie];
			setWishlist(updatedWishlist);
			localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
		} else {
			console.log(`Le film "${movie.title}" est déjà dans la wishlist.`);
		}
	};

	const removeFromWishlist = (id) => {
		const updatedWishlist = wishlist.filter((movie) => movie.id !== id);
		setWishlist(updatedWishlist);
		localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
	};

	return (
		<WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
			{children}
		</WishlistContext.Provider>
	);
};
