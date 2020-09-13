import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
	detailsHeader: {
		fontSize: 17,
		lineHeight: 20,
		fontWeight: 'bold',
		color: colors.RAVN_BLACK,
		marginTop: 32,
		marginBottom: 21,
		marginLeft: 16,
	},
	vehicleName: {
		fontSize: 17,
		lineHeight: 20,
		fontWeight: 'bold',
		textTransform: 'capitalize',
		color: colors.TEXT_LIGHT,
	},
});
