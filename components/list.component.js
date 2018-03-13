import React, { Component } from 'react';
import {Text, TouchableOpacity, View, StyleSheet,Dimensions } from 'react-native';

export default class List extends Component{
    state = {
        names: [
            {
                id: 1,
                name: "Krushil Dhamelia"
            }, {
                id: 2,
                name: "Selena Gomez"
            }
        ]
    };

    alertItemSelected(item){
        alert(item.name);
    }

    render(){
        return (
            <View style={styles.container}>
                {
                    this.state.names.map((item,index) => {
                        return (
                        <TouchableOpacity 
                            key={item.id}
                            style={styles.list}
                            onPress={ () => this.alertItemSelected(item) }>
                                <Text style={styles.text}> { item.name } </Text>
                        </TouchableOpacity>
                        );
                    })
                }
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container : {
        backgroundColor: 'black'
    },
    list:{
        width: Dimensions.get("screen").width,
        justifyContent: 'center',
        alignItems : 'center'
    },
    text:{
        color : 'red'
    }
});