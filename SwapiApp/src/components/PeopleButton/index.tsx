import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {RootObject} from '../../helpers/interfaces';

export const PeopleButton: React.FC<RootObject> = ({
	id,
	name,
	homeworld,
	species = 'human',
	navigation,
}) => {
	return (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate('Details', {
					id,
					name,
				})
			}>
			<View>
				<Text>{name}</Text>
				<Text>
					{species} from {homeworld}
				</Text>
			</View>
			<FontAwesomeIcon icon={faChevronRight} />
		</TouchableOpacity>
	);
};
