import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Section from '../components/Section';

export const HomePage: React.FC = () => {
	return (
		<main>
			<Header />
			<Hero />
			<Section />
		</main>
	);
};
