/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {
	ApolloClient,
	ApolloProvider,
	HttpLink,
	InMemoryCache,
} from '@apollo/client';

import RootNavigator from './src/config/routes';
import {colors} from './src/theme/colors';

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: new HttpLink({
		uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
	}),
});

const App = () => (
	<ApolloProvider client={client}>
		<StatusBar barStyle="light-content" backgroundColor={colors.RAVN_BLACK} />
		<RootNavigator />
	</ApolloProvider>
);

export default App;
