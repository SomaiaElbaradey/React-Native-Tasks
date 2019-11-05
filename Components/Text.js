import React, { Component } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

export default class TextT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      text1: ''
    };
  }

  showAlert = () =>{
    Alert.alert(
         this.state.text + ' ' + this.state.text1
      )
    }

  render() {
    return (
      <View style={{padding: 2,
                    borderWidth: 0.5,
                    borderColor: 'black',
                    borderStyle: "solid" ,}}>

        <TextInput
          style={{height: 40}}
          placeholder = 'first name'
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />

         <TextInput
          style={{height: 40}}
          placeholder = 'last name'
          onChangeText={(text1) => this.setState({text1})}
          value={this.state.text1}
        />
        
      <Button
        onPress={this.showAlert}
        title="Show your name"
        color="#841500"
        accessibilityLabel="Learn more about this purple button"
      />

      </View>
    );
  }
  
}
