import styled from 'styled-components';
import BulletOutline from '../../assets/dot-outline-black.svg';
import Bullet from '../../assets/dot-black.svg';
import ArrowLeft from '../../assets/arrow-left.svg';
import ArrowRight from '../../assets/arrow-right.svg';

export const ToursSection = styled.section`
	padding: 96px 0;

	/* Styles for Swiper Pagination */
	.swiper {
		padding-top: 84px;
		padding-bottom: 64px;
	}

	.swiper-pagination {
		position: absolute;
		bottom: 0px;
		display: block;
		margin-left: auto;
		margin-right: auto;
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

	.swiper-button-prev {
		position: absolute;
		top: 0;
		right: 60px;
		width: 44px;
		height: 44px;
		background-color: #ececec !important;
		background: url(${ArrowLeft}) no-repeat center center;
	}
	.swiper-button-next {
		position: absolute;
		top: 0;
		right: 0;
		width: 44px;
		height: 44px;
		background-color: #ececec !important;
		background: url(${ArrowRight}) no-repeat center center;
	}
`;

export const Heading = styled.h3`
	position: absolute;
	top: 0;
	left: 0;
`;
