import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class UserDetails extends Component {
    render() {
        return (
            <View>
                <Text> user Details </Text>
                <Text >User Id:{this.props.navigation.state.params.id}</Text>
                <Text  >User name : {this.props.navigation.state.params.username}</Text>
                <Text > name : {this.props.navigation.state.params.name}</Text>
                <Text > email : {this.props.navigation.state.params.email}</Text>
            </View>
        )
    }
}
