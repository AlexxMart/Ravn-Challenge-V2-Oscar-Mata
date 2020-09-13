import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginVertical: 20,
	},
	error: {
		fontSize: 17,
		fontWeight: 'bold',
		lineHeight: 20,
		color: colors.TEXT_EMPHASIS,
	},
});
