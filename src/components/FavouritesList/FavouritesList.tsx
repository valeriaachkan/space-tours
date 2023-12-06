import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { favouritesState } from '../../recoil/state';
import Card from '../Card';
import { Rocket } from '../Card/Card.types';
import PageContainer from '../PageContainer';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Section = styled.section`
	padding: 90px 0 100px;
`;

const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
	margin-top: 40px;
`;

const Item = styled.li`
	width: calc((100% - 2 * 24px) / 3);
`;

const FavouritesList: React.FC = () => {
	const [favourites, setFavourites] = useRecoilState(favouritesState);

	const removeFromFavourites = (data: Rocket) => {
		setFavourites(
			favourites.filter((favourite: Rocket) => favourite.id !== data.id)
		);
		Notify.success(`${data.name} is successfully removed`);
	};

	const removeAllFavourites = () => {
		setFavourites([]);
		Notify.success(`Favourites list is cleared`);
	};
	const onCardClick = (e: any, data: Rocket) => {
		const clickedEl = e.target;
		if (clickedEl.name !== 'removeFromFavourites') {
			return;
		}
		removeFromFavourites(data);
	};

	return (
		<Section>
			<PageContainer>
				<>
					{favourites.length === 0 && (
						<p style={{ textAlign: 'center' }}>Your favourites list is empty</p>
					)}
					{favourites.length > 0 && (
						<>
							<p
								style={{ textAlign: 'right', cursor: 'pointer' }}
								onClick={() => removeAllFavourites()}
							>
								Clear all
							</p>
							<List>
								{favourites.map((favourite: Rocket) => (
									<Item key={favourite.id}>
										<Card
											data={favourite}
											deleteIcon={true}
											onCardClick={onCardClick}
										/>
									</Item>
								))}
							</List>
						</>
					)}
				</>
			</PageContainer>
		</Section>
	);
};

export default FavouritesList;
