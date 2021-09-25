import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MyHeader } from '../components/common/Header';
import { HomeScreen } from '../screens/Home/Home.screen';

const Stack = createStackNavigator();

export const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={({ route, navigation }) => ({
					header: () => <MyHeader route={route} options={'options'} back={navigation.back} />,
				})}
			>
				<Stack.Screen name="Home" component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
