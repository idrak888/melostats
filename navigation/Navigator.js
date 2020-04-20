import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Text, View } from 'react-native';

import Main from '../components/Main';
import StartupDetails from '../components/StartupDetails';

const Navigator = createStackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            headerTitle: () => null,
            headerLeft: () => {
                return (
                    <View style={{padding: 20, marginLeft: 20, flexDirection: 'column', justifyContent: 'flex-start'}}>
                        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#023E80'}}>melostats</Text>
                        <Text style={{fontSize: 13, color: 'grey'}}>powered by <Text style={{fontSize: 15, fontWeight: 'bold', color: '#046267'}}>crunchbase</Text></Text>
                    </View>
                )
            } 
        }
    },
    StartupDetails: {
        screen: StartupDetails
    }
}, {
    defaultNavigationOptions: {
        headerStyle: { 
            height: 122,
            borderBottomColor: '#023E80',
            borderBottomWidth: 1
        }
    }
});

export default createAppContainer(Navigator);