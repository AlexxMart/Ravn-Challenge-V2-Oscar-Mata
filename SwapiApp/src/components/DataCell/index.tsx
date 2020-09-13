import React from 'react';
import {Text, View} from 'react-native';

import {Cell} from '../../helpers/interfaces';
import {styles} from './styles';

export const DataCell: React.FC<Cell> = ({property, value = ''}) => (
	<View style={styles.wrapper}>
		<Text style={styles.property}>{property}</Text>
		<Text style={{...styles.property, ...styles.value}}>{value}</Text>
	</View>
);
