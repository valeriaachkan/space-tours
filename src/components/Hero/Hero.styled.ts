import styled from 'styled-components';
import BulletOutline from '../../assets/dot-outline.svg';
import Bullet from '../../assets/dot.svg';

export const HeroSection = styled.section`
	position: relative;
	width: 100%;
	height: 740px;

	/* Styles for Swiper Pagination */
	.swiper {
		z-index: unset;
	}
	.swiper-pagination {
		position: absolute;
		left: 625px !important;
		display: block;
		width: 96px !important;
		z-index: 4 !important;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 230px !important;
	}

	.swiper-pagination-bullet {
		position: relative;
		width: 24px;
		height: 24px;
		display: inline-block;
		background: url(${BulletOutline}) no-repeat center center fixed;
		background-color: transparent !important;
		opacity: 1 !important;
	}

	.swiper-pagination-bullet-active {
		position: relative;
		background: url(${Bullet}) no-repeat center center fixed;
		background-color: transparent !important;
	}
`;

export const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(30, 30, 30, 0.48);
	z-index: 2;
`;

export const Image = styled.img`
	height: 740px;
`;

export const HeadingWrapper = styled.div`
	width: 1122px;
	text-align: center;
	margin: 239px auto 0;
`;

export const AnchorLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	font-family: 'Lato', sans-serif;
	font-size: 32px;
	font-weight: 300;
`;
