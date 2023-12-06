import styled from 'styled-components';

export const CardWrapper = styled.div`
	width: 100%;
	border: 1px solid #d3eaff;
`;

export const ImageOverlay = styled.div`
	height: 296px;
	width: 100%;

	img {
		object-fit: cover;
		height: 100%;
	}
`;

export const Content = styled.div`
	padding: 32px 32px 24px;
`;

export const Text = styled.div`
	min-height: 335px;
	text-align: center;
`;

export const ButtonsWrapper = styled.div`
	display: inline-flex;
	gap: 16px;
	width: 100%;
	margin-top: 32px;
`;
