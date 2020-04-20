import React, { Component } from 'react';
import { StyleSheet, Image, View, FlatList, StatusBar } from 'react-native';
import axios from 'axios';
import StartupWrapper from './StartupWrapper';

import { SearchBar } from 'react-native-elements';

class Main extends Component {
    state = {
        startups: [],
        searchQuery: ''
    }
    componentDidMount() {
        axios.get('https://crunchbase-crunchbase-v1.p.rapidapi.com/odm-organizations', {
            headers: {
                "x-rapidapi-host": "crunchbase-crunchbase-v1.p.rapidapi.com",
                "x-rapidapi-key": "b6fa25f36amsh243a7350b3e7967p14a420jsne313f3a87f80"
            }    
        }).then(doc => {
            this.setState({startups: doc.data.data.items});
        }).catch(e => {
            console.log(e);
        });
    }   
    typingTimer;  
    updateSearchQuery = query => {
        this.setState({searchQuery: query, startups: []});
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(() => {
            axios.get('https://crunchbase-crunchbase-v1.p.rapidapi.com/odm-organizations', {
                params: {
                    query
                },
                headers: {
                    "x-rapidapi-host": "crunchbase-crunchbase-v1.p.rapidapi.com",
                    "x-rapidapi-key": "b6fa25f36amsh243a7350b3e7967p14a420jsne313f3a87f80"
                }
            }).then(doc => {
                console.log(doc.data.data.items);
                this.setState({startups: doc.data.data.items});
            }).catch(e => {
                console.log(e);
            });
        }, 2000);
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent {...this.props} barStyle="dark-content" />
                <SearchBar
                    placeholder="Search startups"
                    onChangeText={this.updateSearchQuery}
                    value={this.state.searchQuery}
                    lightTheme={true}
                    round={true}
                />
                {
                    this.state.startups.length > 0 ?
                        <FlatList
                            style={{borderRadius: 5, marginVertical: 5}}
                            data={this.state.startups}
                            keyExtractor={item => item.uuid}
                            renderItem={({item}) => {
                                return (
                                    <StartupWrapper 
                                        name={item.properties.name} 
                                        logo={item.properties.profile_image_url} 
                                        shortDescription={item.properties.short_description}
                                        toStartupDetails={() => this.props.navigation.navigate({
                                            routeName: 'StartupDetails',
                                            params: {
                                                title: item.properties.name,
                                                logo: item.properties.profile_image_url,
                                                shortDescription: item.properties.short_description,
                                                domain: item.properties.domain,
                                                facebookUrl: item.properties.facebook_url,
                                                linkedinUrl: item.properties.linkedin_url,
                                                countryCode: item.properties.country_code
                                            }
                                        })}
                                    />                
                                )
                            }}
                        />
                    :
                        <Image style={{width: 100, height: 100, alignSelf: 'center'}} source={{uri: 'https://k.nooncdn.com/s/app/2018/com-www-bigalog/yXNBO3qi2QxGziOkKEPBz/static/images/loader-white.gif'}}/>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#EEEEEE'
    }
});

export default Main;