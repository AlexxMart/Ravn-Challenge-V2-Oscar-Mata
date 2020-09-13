import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {colors} from '../../theme/colors';

import {styles} from './styles';

export const LoadingIndicator = () => (
	<View style={styles.wrapper}>
		<ActivityIndicator size="small" color={colors.TEXT_LIGHT} />
		<Text style={styles.loading}>Loading</Text>
	</View>
);
