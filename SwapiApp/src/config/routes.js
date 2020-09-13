import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Home} from '../screens/Home';
import {PeopleDetails} from '../screens/PeopleDetails';

const AppNavigator = createStackNavigator(
	{
		Home: {
			screen: Home,
		},
		Details: {
			screen: PeopleDetails,
		},
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			header: null,
		},
	},
);

export default createAppContainer(AppNavigator);
