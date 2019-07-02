import {
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation'
import LoginScreen from './Screen/LoginScreen';
import HomeScreen from './Screen/HomeScreen';
import FeedScreen from './Screen/FeedScreen';



const MainNavigator = createDrawerNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
  Feed: {screen: FeedScreen},
})

const App = createAppContainer(MainNavigator);

export default App;