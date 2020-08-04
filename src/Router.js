import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Shows from './Screens/Shows';
import ShowView from './Screens/ShowView';

export const AppStack = () =>{
  return createAppContainer(createStackNavigator({
    Shows,
    ShowView
  },{
    initialRouteName : 'Shows',
    defaultNavigationOptions : {
      headerTitle : 'WatchTime',
      headerTitleStyle : {
        color : 'white',
        fontWeight : 'bold'
      },
      headerTintColor : '#fff',
      headerStyle : {
        backgroundColor : '#282828',
      },
    }
  }))
}