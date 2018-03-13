import React from 'react';
import { Component } from 'react';
import { View,Text } from 'react-native';
import Presentational from './presentational.component';
import ListComp from './list.component';

export default class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            myState : "Initial State"
        };
    }
    updateState = () => this.setState({myState : "Updated"}) 
    
    render(){
        return (
            <View style={{flex: 1}}>
                <Presentational updateState={this.updateState} myState={this.state.myState} />
                <ListComp style={{flex: 1}}/>
            </View>
        );
    }
}
