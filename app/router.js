import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './screens/welcome'

const MainApplication =  createStackNavigator({
	Home: {
		screen: HomeScreen
	}
});

export default createAppContainer(MainApplication);
