import React , { Component } from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class Inputs extends Component{
    state = {
        email : '',
        password : ''
    }

    setEmail = (email) => {
        this.setState({email});
    }

    setPass = (password) => this.setState({password})

    login(){
        alert("Login with username :" + this.state.email);
    }
    
    render(){
        return (
            <View>
                    <TextInput 
                        placeholder="Email"
                        autoFocus="true"
                        keyboardType="email-address"
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        placeholderTextColor="#ccc"
                        onChangeText={ (e) => this.setEmail(e) }
                    >
                    </TextInput>

                    <TextInput 
                        placeholder="Password"
                        keyboardType="decimal-pad"
                        secureTextEntry={ true }
                        maxLength={10}
                        autoCapitalize="none"
                        placeholderTextColor="#ccc"
                        underlineColorAndroid="transparent"
                        onChangeText={ (e) => this.setPass(e) }
                    >
                    </TextInput>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={ () => this.login() }
                        >
                        <Text>
                            Login
                        </Text>
                    </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    button:{
        padding: 5,
        margin: 2,
        backgroundColor: "blue"
    }
});