import React , {Component} from 'react';
import {View , Text, Image,Dimensions } from 'react-native';

export default class UserDetail extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={{ width: Dimensions.get("window").width, flexDirection: 'row',margin : 2 }}>
                <View>
                    <Text>{this.props.user.first_name}</Text>
                </View>            
                <View>
                    <Image style={ { width: 100,height : 100 } } source= { { uri : this.props.user.avatar } } ></Image>
                </View>
            </View>
        );
    }
}