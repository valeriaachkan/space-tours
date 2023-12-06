import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {
	AnchorLink,
	Container,
	HeadingWrapper,
	HeroSection,
	Image,
	Overlay,
} from './Hero.styled';
import img1 from '../../assets/hero-img1.png';
import img2 from '../../assets/hero-img2.png';
import img3 from '../../assets/hero-img3.png';
import { ReactComponent as ArrowIcon } from '../../assets/arrow-down.svg';

const Hero: React.FC = () => {
	return (
		<HeroSection>
			<Swiper
				pagination={{
					clickable: true,
				}}
				modules={[Scrollbar, Pagination, Autoplay]}
				slidesPerView={1}
				loop={true}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
			>
				<SwiperSlide>
					<Image src={img1} alt="Space" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={img2} alt="Space" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={img3} alt="Space" />
				</SwiperSlide>
			</Swiper>
			<Overlay>
				<HeadingWrapper>
					<h1>the space is waiting for</h1>
					<h2>you</h2>
				</HeadingWrapper>
				<AnchorLink href="#popular-tours">
					Explore tours
					<ArrowIcon style={{ marginLeft: '19px' }} />
				</AnchorLink>
			</Overlay>
		</HeroSection>
	);
};

export default Hero;
