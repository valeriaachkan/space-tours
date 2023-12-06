import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../PageContainer';
import ButtonIcon from '../ButtonIcon';
import {
	HeaderContainer,
	Logo,
	Nav,
	NavItem,
	Wrapper,
	ItemLink,
	ButtonWrapper,
} from './Header.styled';
import LogoImg from '../../assets/logo-img.png';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import Button from '../Button';

const Header: React.FC<{ isFavouritesPage?: boolean }> = ({
	isFavouritesPage,
}) => {
	return (
		<HeaderContainer>
			<PageContainer>
				<Wrapper>
					<Link to="/">
						<Logo src={LogoImg} />
					</Link>
					<Nav>
						<NavItem>
							<ItemLink to="/">Home</ItemLink>
						</NavItem>
						<NavItem>Tours</NavItem>
						<NavItem>About</NavItem>
						<NavItem>Help</NavItem>
					</Nav>
					<ButtonWrapper>
						<Link to="/favorites">
							<ButtonIcon current={isFavouritesPage?.toString()}>
								<HeartIcon />
							</ButtonIcon>
						</Link>
						<Button>sign in</Button>
					</ButtonWrapper>
				</Wrapper>
			</PageContainer>
		</HeaderContainer>
	);
};

export default Header;
