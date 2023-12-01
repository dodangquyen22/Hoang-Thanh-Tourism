import * as React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import BottomButtonBar from "../components/NavigatorBottomBar";
import MapView, { Marker, Polygon } from 'react-native-maps';
import * as Location from 'expo-location'
import { Button } from "react-native-elements";
import mapData from "../../data/mapData.json";

export default function MapScreen() {
    const navigation = useNavigation();
    const [mapRegion, setMapRegion] = React.useState({
        ...mapData.rootCoordinate,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,

    });
    const [markLocation, setMarkLocation] = React.useState(mapData.rootCoordinate);

    // const location = async () => {
    //     // let { status } = await Location.requestForegroundPermissionsAsync();
    //     // if (status !== 'granted') {
    //     //     setErrorMsg('Permission to access location was denied');
    //     // }
    //     // let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    //     setMapRegion({
    //         latitude: 21.035362,
    //         longitude: 105.840191,
    //         latitudeDelta: 0.01,
    //         longitudeDelta: 0.01,
    //     })
    // }

    // React.useEffect(() => {
    //     location();
    // }, [])
    return (
        <View style={styles.container}>
            <View style={styles.mapField}>
                <MapView style={styles.map}
                  // initialRegion={mapRegion}
                  region={mapRegion}>
                    <Marker draggable
                      coordinate={mapData.rootCoordinate}
                      title="Hoàng Thành Thăng Long"
                      description="Hà Nội, Việt Nam"
                      onDragEnd={(e) => {
                        const { latitude, longitude } = e.nativeEvent.coordinate;
                        setMarkLocation({ latitude, longitude })
                      }}>
                    </Marker>
                    <Polygon 
                      coordinates={mapData.citadelRegion}
                      strokeWidth={2}
                      strokeColor="orange"
                      fillColor="rgba(255,254,172,0.6)">
                    </Polygon>
                </MapView>
                <Text style={styles.text}>Lat:{markLocation.latitude}, Lng:{markLocation.longitude}</Text>
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
    }, 
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    text: {
        position: "absolute",
        bottom: 40,
        width: Dimensions.get('window').width *3 / 5,
        color: "black",
        fontSize: 20,
        fontWeight: "bold"
    },
    
});