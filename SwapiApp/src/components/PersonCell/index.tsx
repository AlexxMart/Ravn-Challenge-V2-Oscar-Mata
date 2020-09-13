import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {RootObject} from '../../helpers/interfaces';

import {styles} from './styles';

export const PersonCell: React.FC<RootObject> = ({
	id,
	name,
	homeworld,
	species = 'Human',
	navigation,
}) => {
	return (
		<TouchableOpacity
			style={styles.wrapper}
			onPress={() =>
				navigation.navigate('Details', {
					id,
					name,
				})
			}>
			<View>
				<Text style={styles.personName}>{name}</Text>
				<Text style={styles.personDetails}>
					{species} from {homeworld}
				</Text>
			</View>
			<FontAwesomeIcon icon={faChevronRight} />
		</TouchableOpacity>
	);
};
