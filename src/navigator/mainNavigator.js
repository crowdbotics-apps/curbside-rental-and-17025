import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile45258Navigator from '../features/UserProfile45258/navigator';
import Tutorial45257Navigator from '../features/Tutorial45257/navigator';
import NotificationList45229Navigator from '../features/NotificationList45229/navigator';
import Settings45228Navigator from '../features/Settings45228/navigator';
import Settings45220Navigator from '../features/Settings45220/navigator';
import UserProfile45218Navigator from '../features/UserProfile45218/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile45258: { screen: UserProfile45258Navigator },
Tutorial45257: { screen: Tutorial45257Navigator },
NotificationList45229: { screen: NotificationList45229Navigator },
Settings45228: { screen: Settings45228Navigator },
Settings45220: { screen: Settings45220Navigator },
UserProfile45218: { screen: UserProfile45218Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
