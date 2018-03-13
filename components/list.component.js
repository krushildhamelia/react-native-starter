import React, { Component } from 'react';
import {Text, TouchableOpacity, View, StyleSheet,Dimensions, ScrollView, Image } from 'react-native';

export default class List extends Component{
    state = {
        names: [
            {
                id: 1,
                name: "Krushil Dhamelia"
            }, {
                id: 2,
                name: "Selena Gomez"
            },
            {'name': 'Robert', 'id': 3},
            {'name': 'Mary', 'id': 4},
            {'name': 'Daniel', 'id': 5},
            {'name': 'Laura', 'id': 6},
            {'name': 'John', 'id': 7},
            {'name': 'Debra', 'id': 8},
            {'name': 'Aron', 'id': 9},
            {'name': 'Ann', 'id': 10},
            {'name': 'Steve', 'id': 11},
            {'name': 'Olivia', 'id': 12}
        ]
    };

    alertItemSelected(item){
        alert(item.name);
    }

    render(){
        return (
            <ScrollView>
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
                <ScrollView style={ {backgroundColor : 'skyblue'} }>
                    {
                        this.state.names.map((item,index) => {
                            return (
                            <View 
                                key={item.id}
                                style={styles.list}
                                onPress={ () => this.alertItemSelected(item) }>
                                    <Text style={styles.text}> { item.name } </Text>
                            </View>
                            );
                        })
                    }
                    <Image source = {require('../images/person.png') } >
                    </Image>
                    <Image source = { {uri : 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'} } 
                        style= { { width: 400, height: 400 }  }>
                    </Image>
                </ScrollView>
            </ScrollView>
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