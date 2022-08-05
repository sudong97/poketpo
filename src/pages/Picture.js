import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

export default function App() {
  const [startCamera, setStartCamera] = React.useState(false);

  let camera = Camera;

  const __startCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      // start the camera
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  const __takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    console.log(photo);
    setPreviewVisible(true);
    setCapturedImage(photo);
  };

  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  return (
    <View style={styles.container}>
      {startCamera ? (
        previewVisible && capturedImage ? (
          <CameraPreview photo={capturedImage} />
        ) : (
          <Camera
            style={{ flex: 1 }}
            ref={(r) => {
              camera = r;
            }}
          >
            <View
              style={{
                flex: 1,
                width: "100%",
                backgroundColor: "transparent",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  flexDirection: "row",
                  flex: 1,
                  width: "100%",
                  padding: 20,
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    alignSelf: "center",
                    flex: 1,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={__takePicture}
                    style={{
                      width: 70,
                      height: 70,
                      bottom: 0,
                      borderRadius: 50,
                      backgroundColor: "#fff",
                    }}
                  />
                </View>
              </View>
            </View>
          </Camera>
        )
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={__startCamera}
            style={{
              width: 130,
              borderRadius: 4,
              backgroundColor: "#14274e",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Take picture
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
