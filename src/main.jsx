import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { WishlistProvider } from './contexts/WishlistContext';

createRoot(document.getElementById('root')).render(
	<WishlistProvider>
		<App />
	</WishlistProvider>
);
