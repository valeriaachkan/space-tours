import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';
import './services/API-service.ts';
import { ApolloProvider } from '@apollo/client';
import { client } from './services/API-service';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter basename="space-tours">
			<ApolloProvider client={client}>
				<RecoilRoot>
					<App />
				</RecoilRoot>
			</ApolloProvider>
			<GlobalStyles />
		</BrowserRouter>
	</React.StrictMode>
);
