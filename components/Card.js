import React from 'react';
import {StyleSheet, Image, Text, View} from "react-native";

const Card = (props) => {
    return (
        <View key={props.item.id} style={styles.container}>
            <Image
                style={{width: 50, height: 50}}
                source={{uri: props.item.thumbnail}}
            />
            <Text style={styles.text}>{props.item.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: '#fafafa',
        padding: 5,
    },
    text: {
        padding: 10,
        marginLeft: 15,
    }

});

export default Card;