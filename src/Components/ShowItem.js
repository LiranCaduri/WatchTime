import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import RatingStars from './ratingStars';

const ShowItem = ({show , navigation}) => (
    <TouchableOpacity
            onPress = {() => navigation.navigate('ShowView',{...show})}
        >
            <View style = {Styles.ShowCard}>
                <Image
                    source = {{uri : `${show.image.medium}`}}
                    style = {Styles.ShowImage}
                    resizeMode = 'contain'
                />
                <View style = {Styles.ShowTitleCard}>
                    <Text style = {[Styles.cardInfo, {fontWeight : 'bold'}]}>{show.name}</Text>
                    <Text style = {[Styles.cardInfo, {fontSize : 14}]}> Rating - {show.rating.average}</Text>
                    <RatingStars rating = {show.rating.average}/>
                </View>
            </View>
        </TouchableOpacity>
)

const Styles = StyleSheet.create({
    ShowCard : {
        marginHorizontal : 10,
        marginVertical : 5,
        backgroundColor : '#333333',
        borderRadius : 5,
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    ShowImage : {
        height : 200, 
        width : 150, 
        margin : 10
    },
    ShowTitleCard : {
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        width : '50%',
        paddingRight : '5%'
    },
    cardInfo : {
        fontSize : 20, 
        color : 'white', 
        marginBottom : 5 ,
        textAlign : 'center',
    },
})

export default ShowItem;