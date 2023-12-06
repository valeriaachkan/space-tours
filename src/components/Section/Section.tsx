import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import Card from '../Card';
import PageContainer from '../PageContainer';
import { Heading, ToursSection } from './Section.styled';
import { gql, useQuery } from '@apollo/client';
import { useRecoilState } from 'recoil';
import { favouritesState } from '../../recoil/state';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Rocket } from '../Card/Card.types';

const fetchedRockets = gql`
	query GetRockets {
		rockets {
			description
			id
			name
		}
	}
`;

const Section: React.FC = () => {
	const { loading, data } = useQuery(fetchedRockets);
	const [favourites, setFavourites] = useRecoilState(favouritesState);

	const isAlreadyFavourited = (rocketId: string): boolean => {
		const index = favourites.findIndex(({ id }: Rocket) => id === rocketId);
		return index !== -1 ? true : false;
	};

	const addToFavourites = (favourite: Rocket) => {
		if (isAlreadyFavourited(favourite.id)) {
			Notify.warning(`${favourite.name} is alreday in Favourites :)`);
			return;
		}

		setFavourites([...favourites, favourite]);
		Notify.success(`${favourite.name} is added to Favourites :)`);
	};

	const onCardClick = (e: any, data: Rocket, index?: number) => {
		const clickedEl = e.target;
		if (clickedEl.name !== 'addToFavourites') {
			return;
		}
		addToFavourites({ ...data, imageIndex: index });
	};

	return (
		<ToursSection id="popular-tours">
			<PageContainer>
				<>
					<Swiper
						spaceBetween={24}
						slidesPerView={3}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Navigation, Pagination]}
					>
						<Heading style={{ marginBottom: '43px' }}>popular tours</Heading>

						{!loading &&
							data.rockets.length > 0 &&
							data.rockets.map((rocket: Rocket, index: number) => {
								const imageIndex = index % 3;
								return (
									<SwiperSlide key={rocket.id}>
										<Card
											data={rocket}
											imageIndex={imageIndex}
											deleteIcon={false}
											onCardClick={onCardClick}
										/>
									</SwiperSlide>
								);
							})}
					</Swiper>
				</>
			</PageContainer>
		</ToursSection>
	);
};

export default Section;
