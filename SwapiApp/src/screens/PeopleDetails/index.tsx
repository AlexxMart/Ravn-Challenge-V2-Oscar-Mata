import React from 'react';
import {ScrollView, Text} from 'react-native';
import {useQuery, gql} from '@apollo/client';

import {Header} from '../../components/Header';
import {LoadingIndicator} from '../../components/LoadingIndicator';
import {ErrorMessage} from '../../components/ErrorMessage';

export const PeopleDetails = ({navigation}) => {
	const id = navigation.getParam('id', 'NO-ID');
	const name = navigation.getParam('name', '');

	const GET_CHARACTER = gql`
		{
			person(id: "${id}") {
				eyeColor
				hairColor
				skinColor
				birthYear
				vehicleConnection {
					vehicles {
						name
					}
				}
			}
		}
	`;

	const {loading, error, data} = useQuery(GET_CHARACTER);

	if (loading || !data) {
		return <LoadingIndicator />;
	}

	if (error) {
		return <ErrorMessage />;
	}

	return (
		<>
			<Header name={name} navigation={navigation} />
			<ScrollView>
				<Text>{name}</Text>
			</ScrollView>
		</>
	);
};
