import React from 'react';
import FavouritesList from '../components/FavouritesList';
import Header from '../components/Header';
import HeroFavourites from '../components/HeroFavourites';

export const FavoritesPage: React.FC = () => {
	return (
		<main>
			<Header isFavouritesPage={true} />
			<HeroFavourites />
			<FavouritesList />
		</main>
	);
};
