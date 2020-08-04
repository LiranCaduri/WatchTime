import React, { Component } from 'react';
import { 
    View,
    Text, 
    StyleSheet, 
    FlatList, 
    YellowBox,  
    Platform, 
    ActivityIndicator, 
    StatusBar,
} from 'react-native';
import axios from 'axios';
import Footer from '../Components/NameFooter';
import { SearchBar } from 'react-native-elements';
import ShowItem from '../Components/ShowItem';

YellowBox.ignoreWarnings([
    //'Warning: Async Storage has been extracted',
    'componentWillMount',
    'componentWillUpdate',
    'componentWillReceiveProps',
    'RCTRootView cancelTouches', // https://github.com/kmagiera/react-native-gesture-handler/issues/746
    'virtualizedCell.cellKey'
]);

class Shows extends Component {
    constructor(){
        super();
        this.arrayholder = [];
    }

    state = {
        isLoading : true,
        Shows : [],
        search : '',
    }

    

    componentDidMount(){
        axios.get(`http://api.tvmaze.com/shows`)
        .then(response =>  {
            this.setState({ Shows : response.data, isLoading : false }); 
            this.arrayholder = response.data;
        })
        .catch(err => {throw err})
    }

    searchFilterByName = text => {    
        const newData = this.arrayholder.filter(item => { 
            const itemData = `${item.name.toUpperCase()}` ;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;    
        });
        this.setState({ Shows: newData, search : text });  
      };

    renderHeader = () => (      
        <SearchBar
            platform = {Platform.OS}        
            placeholder="Search a show ..."        
            containerStyle = {{backgroundColor : '#212121'}}
            inputContainerStyle = {{backgroundColor : '#333333'}}
            inputStyle = {{color : '#fff'}}
            onChangeText={text => this.searchFilterByName(text)}
            value={this.state.search}
            autoCorrect
            keyboardAppearance = 'dark'
        />  
    )

    listEmptyComponent = () => (
        <View style = {{alignItems : 'center'}}>
            <Text style = {{color : '#888888', fontWeight : 'bold'}}>
                No Shows Found ):
            </Text>
        </View>
    )

    render() {
        if(!this.state.isLoading){
            return (
                <View style = {{backgroundColor : '#212121', flex :1}}>
                    <StatusBar barStyle = 'light-content'/>
                    <FlatList
                        data={this.state.Shows}
                        renderItem={({item}) => <ShowItem show = {item} navigation ={this.props.navigation}/>}
                        keyExtractor={show => show.id.toString()}
                        ListHeaderComponent = {this.renderHeader()}
                        style = {{marginBottom : 40}}
                        ListEmptyComponent = {this.listEmptyComponent()}
                    />
                    <View style = {Styles.FooterContainer}>
                        <Footer/>
                    </View>
                </View>
            );
        } else {
            return(
                <View style = {{backgroundColor : '#212121', flex : 1, justifyContent : 'center' , alignItems : 'center'}}>
                    <StatusBar barStyle = 'light-content'/>
                    <ActivityIndicator
                        size = 'large'
                        color = 'white'
                    />
                    <View style = {Styles.FooterContainer}>
                            <Footer/>
                    </View>
                </View>
            )
        }
    }
}

const Styles = StyleSheet.create({
    FooterContainer:{
        position : 'absolute',
        bottom : 0,
        width : '100%'
    },
})

export default Shows;