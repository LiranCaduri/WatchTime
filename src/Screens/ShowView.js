import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Footer from '../Components/NameFooter';
import Moment from 'moment';
import RatingStars from '../Components/ratingStars';

class ShowView extends Component {

  static navigationOptions = ({ navigation }) => {
    // changing header text to fit the name of the show
    const { params } = navigation.state;
    return {
      headerTitle: params.name,
    }
  };

  render(){       
    const params = this.props.navigation.state.params; // destructure
    const Genres = params.genres.toString().replace(/,/g , ', ') //adjusting data;
    const Summary = params.summary.replace(/<b>/g ,'').replace(/<\/i>/g ,'')
    .replace(/<\/p>/g ,'').replace(/<i>/g ,'').replace(/<p>/g, '').replace(/<\/b>/,'')
    // making the summary value usable with RN
  
    return (
      <View style = {{flex : 1, backgroundColor : '#212121'}}>
        <ScrollView style = {Styles.ShowContainer}>
          <View style = {{flexDirection : 'row' , justifyContent:'space-between'}}>
            {/* -------Info-by-the-photo-------- */}
            <View style = {Styles.defaultTextContainer}>
              <Text style = {Styles.defaultTextStyle}>
                Premiered : {Moment(params.premiered).format('do MMMM YYYY')}
              </Text>
              <Text style = {Styles.defaultTextStyle}>
                Genres : {Genres}
              </Text>
              <Text style = {Styles.defaultTextStyle}>Rating : {params.rating.average}</Text>
              <RatingStars rating = {params.rating.average} />
              <Text style= {Styles.defaultTextStyle}>Language - {params.language}</Text>
            </View>
            {/* -------photo-------- */}
              <Image
                source ={{uri : `${params.image.original}`}}
                resizeMode = 'contain'
                style = {{height : 230, width : 160, margin : 5}}
              />      
          </View>
            {/* -------below-photo------- */}
          <Text style = {Styles.defaultTextStyle}>
            Schedule - {params.schedule.days.toString()} at {params.schedule.time}
          </Text>
          <Text style = {Styles.defaultTextStyle}>Network - {params.network.name}</Text>
          {/* -------summery------- */}
          <View style = {Styles.summaryContainer}>
            <Text style = {Styles.summaryStyle}>{Summary}</Text>
          </View>
        </ScrollView>
        {/*------footer------*/}
        
        <View style = {Styles.FooterContainer}><Footer/></View>  
      </View>
    );
  }
}

const Styles= StyleSheet.create({ // Styling Tree
  FooterContainer:{
    flex : 1,
    position : 'absolute',
    bottom : 0,
    width : '100%',
  },
  ShowContainer : {
    margin : 10,
    backgroundColor : '#333333',
    borderRadius : 5,
    marginBottom : 47,
  },
  defaultTextContainer : {
    flexDirection : 'column', 
    marginTop : 12,
    alignItems : 'flex-start',
    width : '50%'
  },
  defaultTextStyle : {
    color : '#fff',
    fontWeight : 'bold',
    fontSize : 16,
    marginVertical : 8,
    paddingHorizontal : 7,
  },
  summaryContainer : {
    width : '100%' ,
    borderTopWidth : 9, 
    borderColor : '#212121',
    padding : 8,
  },
  summaryStyle : {
    color : 'white',
    fontSize : 16,
    textAlign : 'left',
    letterSpacing : 0.5,
    lineHeight : 24
  },
});

export default ShowView;
