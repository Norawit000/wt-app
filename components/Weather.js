import React from "react";
import { ImageBackground, StyleSheet, Text  } from "react-native-web";
import Forecast from "./Forecast";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',  
        description: '-',  
        temp: 0
    })

    return (
        <view>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}> 
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo}/>
             </ImageBackground>
        </view>
    );    
}

const styles = StyleSheet.create({ 
    backdrop: {
        alignItems: 'center', 
        width: '100%', 
        height: '100%' 
    },
});                                                                