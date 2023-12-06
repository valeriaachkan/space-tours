import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { FavoritesPage } from '../pages/FavoritesPage';
import { HomePage } from '../pages/HomePage';

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/favorites" element={<FavoritesPage />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default App;
