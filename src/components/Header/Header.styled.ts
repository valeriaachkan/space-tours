import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	padding: 14px 0;
	background-color: rgba(30, 30, 30, 0.48);
	z-index: 3;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export const Logo = styled.img`
	width: 229px;
	cursor: pointer;
	mix-blend-mode: difference;
`;

export const Nav = styled.ul`
	display: flex;
	align-items: center;
	gap: 32px;
`;

export const NavItem = styled.li`
	color: #fff;
	font-family: 'Lato', sans-serif;
	font-size: 16px;
	font-weight: 500;
	text-transform: uppercase;
	position: relative;
	padding-bottom: 4px;
	cursor: pointer;

	&::after {
		content: ' ';
		display: inline-block;
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1px;
		background-color: #fff;
		transform: scale(0);
		transform-origin: left;
		transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	&:hover::after {
		transform: scale(1);
	}
`;

export const ItemLink = styled(NavLink)`
	color: #fff;
	position: relative;
	padding-bottom: 4px;

	&.active::after {
		content: ' ';
		display: inline-block;
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1px;
		background-color: #fff;
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;
