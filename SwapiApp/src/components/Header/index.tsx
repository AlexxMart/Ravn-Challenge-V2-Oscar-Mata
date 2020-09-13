import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface Props {
	name: string;
	navigation: () => {};
}

import {styles} from './styles';

export const Header: React.FC<Props> = ({name, navigation}) => (
	<View style={styles.wrapper}>
		<TouchableOpacity onPress={() => navigation.navigate('Home')}>
			<Text>Back</Text>
		</TouchableOpacity>
		<Text style={styles.title}>{name}</Text>
	</View>
);
