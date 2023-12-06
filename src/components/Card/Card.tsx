import {
	ButtonsWrapper,
	CardWrapper,
	Content,
	ImageOverlay,
	Text,
} from './Card.styled';
import Button from '../Button';
import ButtonIcon from '../ButtonIcon';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import { ReactComponent as DeleteIcon } from '../../assets/delete.svg';
import img1 from '../../assets/card-img1.png';
import img2 from '../../assets/card-img2.png';
import img3 from '../../assets/card-img3.png';
import { Rocket } from './Card.types';

const images = [img1, img2, img3];

const Card: React.FC<{
	data: Rocket;
	imageIndex?: number;
	deleteIcon: boolean;
	onCardClick?: any;
}> = ({ data, imageIndex = -1, deleteIcon, onCardClick }) => {
	return (
		<CardWrapper onClick={(e) => onCardClick(e, data, imageIndex)}>
			<ImageOverlay>
				{data.imageIndex !== undefined && (
					<img src={images[data.imageIndex]} alt="Tour cover" />
				)}
				{imageIndex !== -1 && <img src={images[imageIndex]} alt="Tour cover" />}
			</ImageOverlay>
			<Content>
				<Text>
					<h4>{data.name}</h4>
					<p style={{ marginTop: '16px' }}>{data.description}</p>
				</Text>
				<ButtonsWrapper>
					<Button style={{ width: '276px' }}>buy</Button>

					{!deleteIcon && (
						<ButtonIcon name="addToFavourites">
							<HeartIcon style={{ pointerEvents: 'none' }} />
						</ButtonIcon>
					)}
					{deleteIcon && (
						<ButtonIcon name="removeFromFavourites">
							<DeleteIcon style={{ pointerEvents: 'none' }} />
						</ButtonIcon>
					)}
				</ButtonsWrapper>
			</Content>
		</CardWrapper>
	);
};

export default Card;
