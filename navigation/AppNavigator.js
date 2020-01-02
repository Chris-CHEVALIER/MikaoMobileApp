import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../src/views/HomeScreen';
import TreatmentScreen from '../src/views/TreatmentScreen';
import DescriptionScreen from '../src/views/DescriptionScreen';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    // Main: MainTabNavigator,
    Home: HomeScreen,
    Treatment: TreatmentScreen,
    Description: DescriptionScreen,
  }, {
    initialRouteName: 'Home',
  })
);
