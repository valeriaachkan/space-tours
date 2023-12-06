import styled from 'styled-components';

const Button = styled.button`
	padding: 12px 33px;
	background-color: #d3eaff;
	border: none;
	cursor: pointer;

	color: #000;
	font-family: 'Syne', sans-serif;
	font-size: 24px;
	font-weight: 600;
	text-transform: uppercase;

	outline: none;
	transition: 0.2s all;

	&:active {
		transform: scale(0.98);
	}
`;

export default Button;
