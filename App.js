import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from './components/Navbar.js';
import BlogList from './components/BlogList.js';
import About from './components/About.js';
import Create from './components/Create.js';
import Home from './components/Home.js';
import BlogDetails from './components/BlogDetails.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Navbar' component={Navbar} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='BlogList' component={BlogList} />
        <Stack.Screen
          name='BlogDetails'
          component={BlogDetails}
          options={({ route }) => ({
            title: 'Blog Title : ' + route.params.title,
          })}
        />
        <Stack.Screen
          name='About'
          component={About}
          options={{ title: 'About Us' }}
        />
        <Stack.Screen
          name='Create'
          component={Create}
          options={{ title: 'Create A New Blog' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
