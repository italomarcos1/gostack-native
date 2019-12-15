import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
    createStackNavigator(
    {
        Main,
        User
    },
    {
        headerLayoutPreset: 'center',
        // headerBackTitleVisible: false, // para iOS
        defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: '#e6b32a',
          },
          headerTintColor: '#333',
        },
      }
    ),
);

export default Routes;

