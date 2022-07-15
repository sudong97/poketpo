import React from 'react'
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native'
const { width, height} = Dimensions.get('window')

const CarouselItem = ({item}) => {
    return(
        <View style={styles.cardView}>
            <View style={styles.textView}>
                <Text style={styles.itemDescription}>{item.description1}</Text>
                <Text style={styles.itemDescription}>{item.description2}</Text>
            </View>
            <Image style={styles.image} source={{uri: item.url}}/>            
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    cardView: {
        width: width-20,
        height: height/1.75,
        marginTop: 10,
        margin: 10,
        alignItems: "center", 
    },
    textView: {
        width: width-50,
        alignItems: "flex-start",
    },
    itemDescription: {
        color: 'black',
        fontSize: 16,
    },
    image: {
      width: width-50,
      height: height/2.2,
      marginTop: 30,
    }
})

export default CarouselItem