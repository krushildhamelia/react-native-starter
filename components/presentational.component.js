import React,{ Component } from "react";
import {Text , View, StyleSheet } from 'react-native';



export default class Presentational extends Component{
    render(){
        return (
            <View>
                <Text style={styles.persent} onPress={ this.props.updateState}>
                    { this.props.myState }
                </Text>
                <View style={styles.container} >
                    <View style={styles.yellowBox}></View>
                    <View style={styles.redBox}></View>
                    <View style={styles.blueBox}></View>
                    <View style={styles.blueBox}></View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    persent : {
        textAlign : 'center',
        color : 'red',
        fontWeight: 'bold',
        fontSize : 20
    },
    container:{
        flexDirection : 'column',
        justifyContent  :'center',
        alignItems : 'center',
        // backgroundColor: 'grey',s
    },
    redBox : {
        width : 100,
        height : 100,
        backgroundColor: 'black'
    },
    yellowBox : {
        width : 100,
        height : 100,
        backgroundColor: 'yellow',
        borderColor: "transparent"
    },
    blueBox : {
        width : 100,
        height : 100,
        backgroundColor: 'blue'
    }
});