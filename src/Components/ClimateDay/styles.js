    import { StyleSheet } from "react-native";
    import Dimens from '../../DefaultValues/Dimens.js'
    import Colors from '../../DefaultValues/Colors';
    const styles = StyleSheet.create({
        contianer:{
            width:100,
            height:100,
            backgroundColor:Colors.backgroundColor,
            borderRadius:Dimens.borderRadios,
            alignItems:"center",
            marginRight:Dimens.marginSize,
        },

        maxims:{
            flexDirection:"row",
            justifyContent:"space-evenly",
            width:'100%'
        },

        textNormal:{
            color:Colors.fontColor,
        },

        textStrong:{
            fontSize:40,
            color:Colors.fontColor,
        }
    });

    export default styles;