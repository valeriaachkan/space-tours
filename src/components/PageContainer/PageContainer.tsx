import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	font-family: 'Syne', sans-serif;
	padding: 0 80px;
	max-width: 1440px;
	margin: 0 auto;
`;

const PageContainer: React.FC<{ children: React.ReactElement }> = ({
	children,
}) => <Container>{children}</Container>;

export default PageContainer;
