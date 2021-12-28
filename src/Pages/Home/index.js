import React, { useEffect } from 'react';
import { Text } from 'react-native';
import Api from '../../Api';

export default function Home(){

    useEffect(()=>{
        getCurrentClimate();
    },[]);

    const getCurrentClimate = ()=>{
        Api.get()
        .then((reponse)=>{
            console.log(JSON.stringify(reponse.data));
        })
        .catch((error)=>{
            console.log('erro ao buscar dados' + error)
        })
    }

    return(
        <>
            <Text>Estou funcionando</Text>
        </>
    );
}