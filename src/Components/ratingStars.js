import React from 'react';
import { View } from 'react-native';
import StarRating from 'react-native-star-rating';

export default Stars = ({rating}) => {
    const numOfStars = rating / 2;
    return (
        <View style = {{width :140}}>

        <StarRating
          disabled
          emptyStar={'ios-star-outline'}
          fullStar={'ios-star'}
          halfStar={'ios-star-half'}
          iconSet={'Ionicons'}
          maxStars={5}
          rating={numOfStars}
          fullStarColor={'gold'}
          starSize = {20}
          starStyle = {{padding : 3}}
        />
  
        </View>
      );
}
