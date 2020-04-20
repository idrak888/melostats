import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
	
import { Image } from 'react-native-elements';

const StartupWrapper = props => {
    return (
        <View>
            {
                props.logo && props.name && props.name.length < 30 && props.shortDescription ? 
                    <View style={styles.wrapper}>
                        <View>
                            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 12, backgroundColor: 'white'}}>
                                
                                <Image resizeMode="contain" style={styles.logo} source={{uri: props.logo}}/>
                                <Text style={styles.name}>{props.name}</Text>
                            </View>
                            <View style={{padding: 12}}>
                                <Text style={styles.shortDescription}>{props.shortDescription}</Text>
                                <TouchableOpacity onPress={props.toStartupDetails} activeOpacity={0.7} style={styles.buttonContainer}>
                                    <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>View details</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View> 
                : <Text style={{display: 'none'}}></Text>
            } 
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#F8F9F9',
        marginTop: 12,
        overflow: 'hidden',
        elevation: 1,
        borderLeftColor: '#046267',
        borderLeftWidth: 6,
        paddingBottom: 10,
        borderRadius: 6
    },
    name: {
        fontWeight: 'bold',
        fontSize: 22,
        paddingVertical: 10,
        color: '#023E80'
    },
    shortDescription: {
        fontSize: 18,
        color: 'grey'
    },
    logo: {
        width: 80,
        height: 80
    },
    buttonContainer: {
        backgroundColor: '#046267',
        padding: 6,
        width: 130,
        borderRadius: 5,
        marginTop: 15
    }
});

export default StartupWrapper;