import React , {Component} from 'react';
import {View} from 'react-native';
import UserDetail from "./users.detail";

export default class UserList extends Component{

    constructor(props){
        super(props);

        this.state = {
            users : []
        }
    }
    

    componentWillMount(){
        fetch("https://reqres.in/api/users?page=2",{
            method: "GET"
        }).then(res => res.json() ).then(res => {
            console.log("Response : ", res);

            let users = res.data;

            this.setState({users});
        })
    }

    render(){
        if(this.state.users.length == 0){
            return <View></View>;
        }
        return (
            <View>
                {console.log("current state",this.state)}
                {
                    this.state.users.map(( user,index) => {
                        return (
                            <UserDetail key={ user.id } user={user} />
                        );
                    })
                }
            </View>
        );
    }
}