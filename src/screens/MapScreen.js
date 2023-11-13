import * as React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import BottomButtonBar from "../components/NavigatorBottomBar";
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'
import { Button } from "react-native-elements";

export default function MapScreen() {
    const navigation = useNavigation();
    const [mapRegion, setMapRegion] = React.useState({
        latitude: 21.03460,
        longitude: 105.84024,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,

    });

    const location = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
        }
        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        setMapRegion({
            latitude: 21.03460,
            longitude: 105.84024,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        })
    }

    React.useEffect(() => {
        location();
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.mapField}>
                <MapView style={styles.map}
                initialRegion={mapRegion}
                region={mapRegion}>
                <Marker
                    coordinate={{ latitude: 21.0285, longitude: 105.8369 }}
                    title="Hoàng Thành Thăng Long"
                    description="Hà Nội, Việt Nam"></Marker>

            </MapView>
            </View>
            <BottomButtonBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    mapField: {
        position: 'absolute',
        top:0,
    }, map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
    
});