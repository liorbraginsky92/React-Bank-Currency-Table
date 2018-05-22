import { StackNavigator } from 'react-navigation'

import LoginPage from '@pages/login'
import HomePage from '@pages/HomePage'
import ItemPage from '@pages/InsideItem'
import PerformancePage from '@pages/Performance'
import ScalpingPage from '@pages/Scalping'

const MainNavigataion = StackNavigator({
  Login: {
    screen: LoginPage,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  HomePage: {
    screen: HomePage,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  ItemPage: {
    screen: ItemPage,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  PerformancePage: {
    screen: PerformancePage,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  ScalpingPage: {
    screen: ScalpingPage,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  }
},{
  initialRouteName: 'Login'
})

export default MainNavigataion;