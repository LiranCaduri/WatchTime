import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = ({style}) =>{
    return (
        <View style = {[Styles.FooterContainer ,style]}>
            <Text style = {Styles.FooterText}>Liran Caduri</Text>
        </View>
    );
}

const Styles= StyleSheet.create({
    FooterContainer: {
        backgroundColor : '#282828',
        alignItems : 'center',
        padding : 7,
    },
    FooterText : {
        fontSize : 20,
        color : 'white'
    }
});

export default Footer;