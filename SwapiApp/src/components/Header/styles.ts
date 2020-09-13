import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
		backgroundColor: colors.RAVN_BLACK,
	},
	title: {
		fontSize: 17,
		fontWeight: 'bold',
		color: colors.WHITE,
		lineHeight: 20,
	},
	goBack: {
		position: 'absolute',
		left: 16,
		top: 16,
	},
});
