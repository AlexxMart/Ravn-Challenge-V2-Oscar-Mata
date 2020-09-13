import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginVertical: 20,
	},
	loading: {
		fontSize: 17,
		lineHeight: 20,
		fontWeight: 'bold',
		color: colors.TEXT_LIGHT,
		marginLeft: 8,
	},
});
