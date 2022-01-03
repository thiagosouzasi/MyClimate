    import { StyleSheet } from "react-native";
    import Dimens from '../../DefaultValues/Dimens.js'
    import Colors from '../../DefaultValues/Colors';
    const styles = StyleSheet.create({
        contianer:{
            width:100,
            height:120,
            backgroundColor:Colors.backgroundColor,
            borderRadius:Dimens.borderRadios,
            alignItems:"center",
            marginRight:Dimens.marginSize,
        },

        maxims:{
            justifyContent:"space-evenly",
            alignItems:"center",
            width:'100%'
        },

        textNormal:{
            color:Colors.fontColor,
        },

        textStrong:{
            fontSize:Dimens.fontSize,
            color:Colors.fontColor,
        }
    });

    export default styles;