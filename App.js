import React, { useEffect, useRef, useState } from 'react'
import { View, PermissionsAndroid } from 'react-native'
import MapboxGL from '@react-native-mapbox-gl/maps';
import GeolocationLib from "react-native-geolocation-service";
import { scaledSize } from './src/helper/util/Utilities'
MapboxGL.setAccessToken(
  "pk.eyJ1Ijoic2hvcGF4IiwiYSI6ImNsN3Zlc3IyYjAyYXEzd3BiamljNTlsNzEifQ.UKKhtejhtvJTtfzwQHa1XA"
);
export default App = () => {
  const [userLocation, setUserLocation] = useState();
  const [currentUserLocation, setCurrentUserLocation] = useState();
  let cameraRef = useRef();
  const touchable = useRef();
  useEffect(() => {
    requestPermission()
  }, [])

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
        'title': 'Example App',
        'message': 'Example App access to your location '
      }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // console.log("You can use the location")
        GeolocationLib.getCurrentPosition(
          (position) => {
            const { longitude, latitude } = position.coords;
            if (longitude && latitude) {
              setUserLocation([...[longitude, latitude]]);
              setCurrentUserLocation([...[longitude, latitude]])
            }
          })
      } else {
        // console.log("location permission denied")
        alert("Location permission denied");
      }
    } catch (err) {
      console.warn(err)
      throw err
    }
  }
  return (
    // <Dashboard/>
    <View style={{ height: "100%", width: "100%" }}>
      <MapboxGL.MapView
        style={{ flex: 1 }}
        styleURL={"mapbox://styles/shopax/cl7vex1yq007u14qlmnvnsdrh"}
      >
        <MapboxGL.Camera
          ref={cameraRef}
          zoomLevel={16}
          animationMode="flyTo"
          animationDuration={0}
          centerCoordinate={currentUserLocation}
        />

        {userLocation ? (
          <MapboxGL.PointAnnotation
            id={"key12"}
            coordinate={userLocation}
            ref={touchable}
          >
            <UserMarker />
          </MapboxGL.PointAnnotation>
        ) : null}
      </MapboxGL.MapView>
    </View>
  )
}


const UserMarker = () => {
  return (
    <View
      style={{
        height: scaledSize(14),
        width: scaledSize(14),
        borderRadius: scaledSize(22/2),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
        borderWidth: 1,
        borderColor: "white",
      }}
    />
  );
}