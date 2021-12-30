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
        width:'90%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(255, 255, 255, 0.2)',
        color:'#fff',
        borderRadius:Dimens.borderRadios,
        marginTop:Dimens.marginSize
    },

    textTitle:{
        fontSize:Dimens.fontSize,
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center',

    },

    textSubTitle:{
        fontSize:Dimens.fontSiZeSubTitle,
        color:'#fff',
    },

    textStrong:{
        fontSize:Dimens.fontSizeStrong,
        color:'#fff',
        
    },
    secundaryContent:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%'
    },

    conditionIcon:{
        width:64,
        height:64
    }
})

export default styles;