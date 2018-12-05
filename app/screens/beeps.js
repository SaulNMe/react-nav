import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button
} from 'react-native';
import moment from 'moment';
export default class HomeScreen extends Component {
	constructor(props){
		super(props);
		this.state = {
			beeps:[
				{
					id: 1,
					user: 'Saul Narvaez',
					hour: moment().fromNow()
				}
			],
			user:''
		};
		this.createBeep = this.createBeep.bind(this);
		this.logOut = this.logOut.bind(this);
	}
	createBeep(){
		const { navigation } = this.props;
		const user = navigation.getParam('user', 'NO-USER');
		this.setState({user});
		let id = 0;
		let beeps = this.state.beeps.slice(0);
		beeps.map((item) => { if(item.id >= id) id = item.id+1});
		id = id;
		let hour = moment().fromNow();
		beeps.unshift({
			id,
			user, 
			hour
		});
		this.setState({beeps});
	}

	logOut(){
		this.props.navigation.navigate("Home");
	}
	render () {
		return (
			<View>
				<View>
					{
						this.state.beeps.map((item) =>(
						<View key={item.id}>
							<Text>{item.user} beeped!</Text>
							<Text>{item.hour}</Text>
						</View>	
						))
					}
				</View>
				<Button 
					title="Beep!"
					onPress={this.createBeep}
					style={styles.button}
				/><Button 
					title="Exit!"
					onPress={this.logOut}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
    	flex: 1,
	    backgroundColor: '#000',
	    alignItems: 'center',
	    justifyContent: 'center',
	    width: 100
	},
	button: {
		borderWidth: 1,
		borderColor: '#1F40FF'
  	}
});
