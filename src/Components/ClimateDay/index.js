import React from "react";
import { View,Text } from "react-native";
import styles from './styles.js';

export default  function MyCLimate({day,max,min}){

    const dayOfWeek = ()=>{
        let convertedDay = new Date(day).getDay();
        try {
            switch (convertedDay){
                case 0:
                    return 'DOM';                
                case 1:
                    return 'SEG';
                case 2:
                    return 'TER';
                case 3:
                    return 'QUA';
                case 4:
                    return 'QUI';
                case 5:
                    return 'SEX';
                case 6:
                    return 'SAB'
                default:
                    return '';
            }
        } catch (error) {
            console.log('Erro ao converter dia da semana'+ error)
        }
    }
    
    return(
        <View style={styles.contianer}>
            <Text  style={styles.textNormal}>DIA</Text>
            <Text style={styles.textStrong}>{dayOfWeek()}</Text>
            <View style={styles.maxims}>
                <Text  style={styles.textNormal}>MÁX {max}°</Text>
                <Text  style={styles.textNormal}>MIN {min}°</Text>
            </View>
        </View>
    );
}