import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

import {styles} from './styles';
import {colors} from '../../theme/colors';

interface Props {
	name: string;
	navigation: () => {};
	isDetails: boolean;
}

export const Header: React.FC<Props> = ({
	name,
	navigation,
	isDetails = false,
}) => (
	<View style={styles.wrapper}>
		{isDetails && (
			<TouchableOpacity
				style={styles.goBack}
				onPress={() => navigation.navigate('Home')}>
				<FontAwesomeIcon icon={faArrowLeft} color={colors.WHITE} />
			</TouchableOpacity>
		)}
		<Text style={styles.title}>{name}</Text>
	</View>
);
