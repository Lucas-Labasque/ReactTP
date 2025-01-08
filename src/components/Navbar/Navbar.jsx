import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { WishlistContext } from '../../contexts/WishlistContext.jsx';


const Navbar = () => {
	const { wishlist } = useContext(WishlistContext);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    🎬 MovieApp
                </Link>
                <ul className="navbar-links">
                    <li>
                        <Link to="/" className="navbar-link">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/wishlist" className="navbar-link">
							Wishlist <span className="wishlist-count">({wishlist.length})</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
