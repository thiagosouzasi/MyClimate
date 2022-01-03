import React from "react";
import { View,Text } from "react-native";
import styles from './styles.js';

export default  function MyCLimate({day,max,min}){
    return(
        <View style={styles.contianer}>
            <Text  style={styles.textNormal}>DIA</Text>
            <Text style={styles.textStrong}>28</Text>
            <View style={styles.maxims}>
                <Text  style={styles.textNormal}>MÁX°</Text>
                <Text  style={styles.textNormal}>MIN°</Text>
            </View>
        </View>
    );
}