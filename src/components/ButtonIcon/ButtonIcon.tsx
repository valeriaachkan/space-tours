import styled from 'styled-components';

interface ButtonProps {
	current?: string;
}
const ButtonIcon = styled.button<ButtonProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 53px;
	height: 53px;
	padding: 14.5px;
	background-color: ${(props) =>
		props.current === 'true' ? '#DD377D' : '#ECECEC'};
	fill: ${(props) => (props.current === 'true' ? '#FFFFFF' : '#1E1E1E')};
	border: none;
	cursor: pointer;
`;

export default ButtonIcon;
