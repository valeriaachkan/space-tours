import React from 'react';
import styled from 'styled-components';
import HeroImg from '../../assets/hero-img3.png';

const Section = styled.section`
	position: relative;
	padding: 220px 0;
	background: url(${HeroImg}) no-repeat top;
`;

export const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(30, 30, 30, 0.64);
	z-index: 2;
	padding-top: 220px;
`;

const HeroFavourites: React.FC = () => {
	return (
		<Section>
			<Overlay>
				<h1>favourites</h1>
			</Overlay>
		</Section>
	);
};

export default HeroFavourites;
