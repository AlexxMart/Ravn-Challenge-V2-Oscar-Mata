import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 16,
		paddingRight: 24,
		marginLeft: 16,
		borderBottomColor: colors.LIGHT_GRAY,
		borderBottomWidth: 1,
	},
	personName: {
		fontSize: 17,
		lineHeight: 20,
		fontWeight: 'bold',
		color: colors.RAVN_BLACK,
	},
	personDetails: {
		fontSize: 13,
		lineHeight: 17,
		color: colors.TEXT_LIGHT,
	},
});
