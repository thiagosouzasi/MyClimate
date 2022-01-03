import { StyleSheet} from 'react-native';
import Colors from '../../DefaultValues/Colors';
import Dimens from '../../DefaultValues/Dimens';
const styles = StyleSheet.create({

    container:{
        flex:1,
    },

    imgBackground:{
        flex:1,
        padding:Dimens.padingSizeLarge,
        alignItems:"center",
        justifyContent:'space-around'
    },
    currentClimate:{
        width:'90%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.backgroundColor,
        color:Colors.fontColor,
        borderRadius:Dimens.borderRadios,
        marginTop:Dimens.marginSize,
        
    },

    textTitle:{
        fontSize:Dimens.fontSize,
        color:Colors.fontColor,
        fontWeight:'bold',
        textAlign:'center',

    },

    textSubTitle:{
        fontSize:Dimens.fontSiZeSubTitle,
        color:Colors.fontColor,
    },

    textStrong:{
        fontSize:Dimens.fontSizeStrong,
        color:Colors.fontColor,
        
    },
    secundaryContent:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%'
    },

    conditionIcon:{
        width:64,
        height:64
    },

    climateDays:{
        width:'100%',
        padding:Dimens.padingSizeLarge,

        justifyContent:'space-evenly',
        alignItems:'center',
        flex:1,
        marginTop:Dimens.marginLarge,
       
    }
})

export default styles;