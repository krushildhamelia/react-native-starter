import React from 'react';
import { Component } from 'react';
import { View,Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import Presentational from './presentational.component';
import ListComp from './list.component';
import Inputs from "./inputs.component";
import UsersList from './users.list';
import Animations from './animations.component';

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
            <ScrollView style={{flex: 1}}>
                <UsersList style={{ width: Dimensions.get("window").width }}/>
                <Inputs style={styles.container} />
                <Presentational style={styles.container} updateState={this.updateState} myState={this.state.myState} />
                <ListComp style={{flex: 1}} style={styles.container} />
                <Animations />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: "black",
        borderWidth: 2,
        margin: 2
    }
});
