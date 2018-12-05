import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button,
	AppRegistry, 
	TextInput
} from 'react-native';

export default class HomeScreen extends Component {
	constructor(props){
		super(props)
		this.validateUser = this.validateUser.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			user: ""
		}
	}
	validateUser(){
		let user = this.state.user;
		if (this.state.user){
			this.props.navigation.navigate('Beep',{
				user
			})
		} else{
			alert("Ingresa un nombre");
		}
	}
	handleChange(event){
		this.setState({user: event})
	}
	render () {
		return (
			<View>
				<Text>Dinos tu nombre</Text>
				<Text>Tu nombre de usuario</Text>
				<TextInput 
					style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					onChangeText={this.handleChange}
					placeholder='Escribe tu nombre aquí'
				/>
				<Button 
					title="Continuar"
					onPress={this.validateUser}
				/>

			</View>
		);
	}
}
