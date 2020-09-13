import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 16,
		paddingRight: 16,
		marginLeft: 16,
		borderBottomColor: colors.LIGHT_GRAY,
		borderBottomWidth: 1,
	},
	property: {
		fontSize: 17,
		lineHeight: 20,
		fontWeight: 'bold',
		textTransform: 'capitalize',
		color: colors.TEXT_LIGHT,
	},
	value: {
		color: colors.RAVN_BLACK,
	},
});
