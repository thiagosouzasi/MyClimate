import React, { useEffect, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { Alert, ImageBackground, PermissionsAndroid, Platform, Text, View } from 'react-native';
import Api from '../../Api';
import RainDay from '../../Assets/rainday.png';

export default function Home(){

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(()=>{
        getCurrentLocation();
    },[])

    useEffect(()=>{
        getCurrentClimate();
    },[latitude]);

    const getCurrentLocation = ()=>{
        try {
            if(getUserPermitions()){
                Geolocation.getCurrentPosition(
                    (position) => {
                        setLatitude(position.coords.latitude);
                        setLongitude(position.coords.longitude);                      
                    },
                    (error) => {                      
                      console.log(error.code, error.message);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                );
            }
        } catch (error) {
            console.log(`eErro ao buscar localizacao do usuario ${error}`);
        }
    }

    const getUserPermitions = async ()=>{
        try {
            if(Platform.OS === `ios`){

            }else{
                //caso a versão do android seja anterior a 23 as permissões são concedidas no androidMainfest
                if(Platform.OS === 'android' && Platform.Version < 23){
                    return true;
                }

                //verificando se a permissão já foi concedida antes 
                const permitionGranted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,);                
                if(permitionGranted){
                    return true;
                }

                //requisitando permissão caso ainda não tenha cido consedida
                const requestPermition = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
                if(requestPermition === PermissionsAndroid.RESULTS.GRANTED){
                    return true;
                }else{
                    Alert.alert(`O App precisa de permissão para acessar sua localização`);
                }


            }
        } catch (error) {
            console.log(`Erro ao buscar permissao do usuario ${error}`);
        }
    }

    const getCurrentClimate = ()=>{
        Api.get(`&q=${latitude},${longitude}`)
        .then((reponse)=>{
            console.log(JSON.stringify(reponse.data));
        })
        .catch((error)=>{
            console.log('erro ao buscar dados' + error)
        })
    }

    return(
        <View style={{flex:1}}>
            <ImageBackground style={{flex:1}} source={RainDay} resizeMode='cover'>

            </ImageBackground>
        </View>
    );
}