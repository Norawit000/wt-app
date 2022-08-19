import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, Text  } from "react-native-web";
import Forecast from "./Forecast";

export default function Weather(props) {
    useEffect(() => { 
        console.log(`fetching data with zipCode = ${props.zipCode}`) 
        if (props.zipCode) { 
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=afe7da17c740d8695ac8d53d196b3538`) 
            .then((response) => response.json())  
            .then((json) => { 
                setForecastInfo({ 
                    main: json.weather[0].main, 
                    description: json.weather[0].description, 
                    temp: json.main.temp 
                }); 
            }) 
            .catch((error) => { 
                console.warn(error); 
            });
        } 
    }, [props.zipCode])                    

    const [forecastInfo, setForecastInfo] = useState({
        main: '-',  
        description: '-',  
        temp: 0
    })

    return (
        <view>
            <ImageBackground source={require('../bg2.jpg')} style={styles.backdrop}> 
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo}/>
             </ImageBackground>
        </view>
    );    
}

const styles = StyleSheet.create({ 
    backdrop: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
        width: '100%', 
        height: '100%' 
    },
});                                                                