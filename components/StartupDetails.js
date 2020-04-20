import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class StartupDetails extends Component {
    state = {
        startupProperties: {}
    }
    componentDidMount() {
        const startupProperties = {
            name: this.props.navigation.getParam('title'),
            logo: this.props.navigation.getParam('logo'),
            shortDescription: this.props.navigation.getParam('shortDescription'),
            domain: this.props.navigation.getParam('domain'),
            facebookUrl: this.props.navigation.getParam('facebookUrl'),
            linkedinUrl: this.props.navigation.getParam('linkedinUrl'),
            countryCode: this.props.navigation.getParam('countryCode')
        }
        this.setState({startupProperties});
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{alignItems: 'center'}}>
                    <Image resizeMode="contain" style={styles.logo} source={{uri: this.state.startupProperties.logo}}/>
                    <Text style={{fontSize: 30, fontWeight: 'bold', color: '#046267'}}>{this.state.startupProperties.name}</Text>
                    <Text style={{fontSize: 18, color: '#353535'}}>{this.state.startupProperties.shortDescription}</Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text style={{color: '#256AF3', fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}
                        onPress={() => {}}>
                        {this.state.startupProperties.domain}
                    </Text>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 20}}>
                        <TouchableOpacity style={styles.imgLink} onPress={() => {}}>
                            <Image style={{width: 50, height: 50}} source={{uri: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-256.png'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imgLink} onPress={() => {}}>
                            <Image style={{width: 50, height: 50}} source={{uri: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-256.png'}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <Image style={{width: 20, height: 20}} source={{uri: 'https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/66-512.png'}}/>
                        <Text style={{color: '#353535', fontSize: 18}}>{this.state.startupProperties.countryCode}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

StartupDetails.navigationOptions = navData => {
    const title = navData.navigation.getParam('title');
    return {
        headerTitle: title   
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#EEEEEE'
    },
    innerContainer: {
        marginVertical: 50, 
        paddingVertical: 20, 
        borderTopColor: 'lightgrey', 
        borderTopWidth: 1
    },
    logo: {
        width: '100%',
        height: 120,
        marginVertical: 20
    },
    imgLink: {
        padding: 5
    }
});

export default StartupDetails;