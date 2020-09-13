import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

export const ErrorMessage = () => (
	<View style={styles.wrapper}>
		<Text style={styles.error}>Failed to Load Data</Text>
	</View>
);
