import { StyleSheet} from 'react-native';

import Dimens from '../../DefaultValues/Dimens';
const styles = StyleSheet.create({

    container:{
        flex:1,
    },

    imgBackground:{
        flex:1,
        padding:Dimens.padingSizeLarge,
        alignItems:"center"
    },
    currentClimate:{
        width:'80%',
        justifyContent:'center',
        alignItems:'center',

        color:'#fff'
    },

    textTitle:{
        fontSize:Dimens.fontSize,
        color:'#fff',
        fontWeight:'bold'

    },

    textSubTitle:{
        fontSize:Dimens.fontSiZeSubTitle,
        color:'#fff',
    },

    textStrong:{
        fontSize:Dimens.fontSizeStrong,
        color:'#fff',
    },
    contentMAx:{
        flexDirection:'row',
        gap:10,
    }
})

export default styles;