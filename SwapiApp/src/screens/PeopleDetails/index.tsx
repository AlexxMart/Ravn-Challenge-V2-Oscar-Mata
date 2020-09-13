import React from 'react';
import {ScrollView, Text} from 'react-native';
import {useQuery, gql} from '@apollo/client';

import {Header} from '../../components/Header';
import {LoadingIndicator} from '../../components/LoadingIndicator';
import {ErrorMessage} from '../../components/ErrorMessage';
import {DataCell} from '../../components/DataCell';

import {styles} from './styles';
import {NameObject} from '../../helpers/interfaces';

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

	const {person} = data;
	const detailsArray = Object.keys(person);
	const lastKey = detailsArray.slice(-1);

	return (
		<>
			<Header isDetails name={name} navigation={navigation} />
			<ScrollView>
				<Text style={styles.detailsHeader}>General Information</Text>
				{detailsArray.slice(1, -1).map((element, index) => (
					<DataCell key={index} property={element} value={person[element]} />
				))}
				<Text style={styles.detailsHeader}>Vehicles</Text>
				{person[lastKey].vehicles.map((vehicle: NameObject, index: number) => (
					<DataCell key={index} property={vehicle.name} />
				))}
			</ScrollView>
		</>
	);
};
