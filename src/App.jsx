import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import MovieList from './components/MovieList/MovieList.jsx';
import MovieDetail from './components/MovieDetail/MovieDetail.jsx';
import Wishlist from './components/Wishlist/Wishlist.jsx';
import {WishlistProvider} from "./contexts/WishlistContext.jsx";

const App = () => {
    return (
		<WishlistProvider>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<MovieList />} />
					<Route path="/movie/:id" element={<MovieDetail />} />
					<Route path="/wishlist" element={<Wishlist />} />
				</Routes>
			</Router>
		</WishlistProvider>
    );
};

export default App;
