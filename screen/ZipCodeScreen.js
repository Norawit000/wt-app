import React from "react";
import { TouchableHighlight } from "react-native";
import { FlatList, View, Text } from "react-native-web";

export default function zipCodeScreen(){

const availableZipItems = [ 
    { place: 'Hatyai', code: '90110' }, 
    { place: 'Trang', code: '92000' }, 
    { place: 'Chiangmai', code: '50000' },  
    { place: 'Khonkaen', code: '40000' },  
    { place: 'Chonburi', code: '20000' }, 
    ]
}    

const ZipItem = ({place, code, navigation}) => ( 
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
       <view Style ={Style.ZipItem}>
          <Text>{place}</Text> 
          <Text>{code}</Text> 
        </view>
    </TouchableHighlight>
)    

export default function ZipCodeScreen(){ 
    const navigation = useNavigation()
    return (
        <FlatList 
             data={availableZipItems} 
             keyExtractor={item => item.code} 
             renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>} 
        />
    )    
}

const StyleS = StyleSheet.create({
    ZipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    }
})