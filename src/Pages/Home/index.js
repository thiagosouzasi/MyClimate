import React, { useEffect, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { Alert, ImageBackground, PermissionsAndroid, Platform, Text, View,FlatList } from 'react-native';
import Api from '../../Api';
import ClimateDay from '../../Components/ClimateDay';

//importacao das imagens de background
import RainDay from '../../Assets/rainday.png';
import CloudyDay from '../../Assets/cloudyday.png';
import SunnyDay from '../../Assets/sunnyday.png';
import Nigth from '../../Assets/nigth.png';
import RainNigth from '../../Assets/rainnigth.png';
import CloudyNigth from '../../Assets/cloudynigth.png';
import SnowNigth from '../../Assets/snownigth.png';
import SnowDay from '../../Assets/snowday.png';

import styles from './styles';

export default function Home(){

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    //image of background
    const [backGround, setBackGround] = useState(SunnyDay);
    const [location, setLocation] = useState('');
    const [currentCLimate,setCurrentClimate] =useState();
    const [nextDays, setNextDays] =  useState([]);

    const CLOUDY_CONDITIONS = [1003,1006,1009,1030,1135];
    const RAIN_CONDITIONS   = [1063,1087,1150,1153,1168,1171,1180,1183,1186,1189,1192,1195,1198,1201,1240,1243,1246,1273,1276];
    const SNOW_CONDITIONS   = [1066,1069,1072,1114,1117,1147,1204,1207,1210,1213,1216,1919,1219,1225,1237,1249,1252,1255,1258,1261,1264,1279,1282];
    const SUNNY_CONDITIONS  = [1000];

    useEffect(()=>{
        getCurrentLocation();
    },[])

    useEffect(()=>{
        getCurrentClimate();
    },[latitude]);

    useEffect(()=>{
        setBackGroundImage();
    },[currentCLimate]);

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
        if(latitude){
            Api.get(`&q=${latitude},${longitude}&days=5`)
            .then((response)=>{
                setLocation(response.data.location.name);
                setCurrentClimate(response.data.current);      
                setNextDays(response.data.forecast.forecastday);                                
            })
            .catch((error)=>{
                console.log('erro ao buscar dados' + error)
            });
        }
    }

    const renderItem = (item)=>{
        try {                        
            return <ClimateDay day={item.item.date} max={item.item.day.maxtemp_c} min={item.item.day.mintemp_c}/>
        } catch (error) {
            console.log('Erro ao renderizar next days' + error);
        }
    }

    const setBackGroundImage = ()=>{        
        try {
            if(currentCLimate){
                let climateCode = currentCLimate.condition.code;
                if(SUNNY_CONDITIONS.includes(climateCode)){
                    currentCLimate.is_day === 1 ? setBackGround(SunnyDay) : setBackGround(Nigth);
                    
                }else if(RAIN_CONDITIONS.includes(climateCode)){                
                    currentCLimate.is_day === 1 ? setBackGround(RainDay) : setBackGround(RainNigth);
    
                }else if(CLOUDY_CONDITIONS.includes(climateCode)){
                    currentCLimate.is_day === 1 ? setBackGround(CloudyDay) : setBackGround(CloudyNigth);
    
                }else if(SNOW_CONDITIONS.includes(climateCode)){
                    currentCLimate.is_day === 1 ? setBackGround(SnowDay) : setBackGround(SnowNigth);
                }
            }

        } catch (error) {
            console.log(`Erro ao setar backgroudn ${error}`);
        }
    }

    return(
        <View style={{flex:1}}>
            <ImageBackground style={styles.imgBackground} source={backGround} resizeMode='cover'>
                <View style={styles.currentClimate}>
                    <Text style={styles.textSubTitle}>{location}</Text>                    
                    <Text style={styles.textTitle}>{currentCLimate ? currentCLimate.condition.text : ''}</Text>            
                    <Text style={styles.textSubTitle}>Temperatura</Text>            
                    <Text style={styles.textStrong}>{currentCLimate ? currentCLimate.temp_c : ''}°</Text>      
                    <View style={styles.secundaryContent}>
                        <Text style={styles.textSubTitle}>Vento {currentCLimate ? currentCLimate.wind_kph + ' Km' : ''}</Text>
                        <Text style={styles.textSubTitle}>Umidade {currentCLimate ? currentCLimate.humidity + '%' : ''}</Text>
                    </View>
                </View>
                <View style={styles.climateDays}>
                    <Text style={styles.textSubTitle}>Próximos Dias</Text>
                    <FlatList style={{width:'100%'}}
                        horizontal={true}
                        data={nextDays}
                        renderItem={renderItem}
                        keyExtractor={item => item.date_epoch}
                    />                    
                </View>
            </ImageBackground>
        </View>
    );
}