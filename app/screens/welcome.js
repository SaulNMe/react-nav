import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button
} from 'react-native';

export default class HomeScreen extends Component {
	render () {
		return (
			<View>
				<Text>Beer ipsum dolor sit amet</Text>
				<Text>Proident, sunt in culpa qui officia deserun mollit anim id est laborum</Text>
				<Button 
					title="Comenzar"
					onPress={() => this.props.navigation.navigate('Login')}
				/>
			</View>
		);
	}
}
