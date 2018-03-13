import React,{Component} from 'react';
import {Text,View, TouchableOpacity, LayoutAnimation,StyleSheet,Animated, Dimensions } from 'react-native';

export default class Animations extends Component{
  
    state = {
        myStyle : {
            height: 100,
            backgroundColor: 'red'
        }
    }

    collapse = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

        let myStyle = {
            height: 100,
            backgroundColor: 'red'
        }
        this.setState({myStyle});
    }

    expand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

        let myStyle = {
            height: 400,
            backgroundColor: 'blue'
        }
        this.setState({myStyle});
    }

    render(){
        return (
            <View>
                <View style={this.state.myStyle}>

                </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.expand}
                    >
                        <Text>
                            Expand
                        </Text>
                    </TouchableOpacity>

                    
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.collapse}
                    >
                        <Text>
                            Collapse
                        </Text>
                    </TouchableOpacity>


              
            </View>
            

        );
        
    }
}

const styles = StyleSheet.create({
    button : {
        padding: 4,
        margin: 2,
        backgroundColor : '#ff6969'
    },
    box: {
        width: 50,
        height : 100
    }
});