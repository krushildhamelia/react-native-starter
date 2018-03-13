import React,{ Component } from "react";
import {Text , View } from 'react-native';



export default class Presentational extends Component{
    render(){
        return (
            <View>
                <Text onPress={ this.props.updateState}>
                    { this.props.myState }
                </Text>
            </View>
        );
    }
}