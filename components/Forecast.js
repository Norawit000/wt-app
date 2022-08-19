import React from "react";
import { View, Text } from "react-native-web";

export default function Forecast(props) {
    return (
        <view>
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
            <Text>{props.temp}</Text>
            <Text>°C</Text>
                 
        </view>
    )
}