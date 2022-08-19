import React from "react";
import { View } from "react-native-web";

export default function WeatherScreen({route}) {    
    return (
        <View>
             <Weather zipCode={route.params.zipCode} /> 
             <StatusBar style="auto" />  
        </View>
    )
}    