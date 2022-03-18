import React, { Dispatch, useEffect } from "react";
import { View, StyleSheet, Modal, ImageBackground } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { Colors } from "../../../styles/colors";
import { GetSizes } from "../../../utils/getSizes";

interface StoryProps {
  onShowStory: Dispatch<React.SetStateAction<boolean>>
}

export const Story: React.FC<StoryProps> = ({ onShowStory }) => {

  const progress = useSharedValue(0)


  useEffect(() => {
    progress.value = withTiming(GetSizes.getWidth(), { duration: 5000 })
    const timeOut = setTimeout(() => {
      onShowStory(false)
    }, 5000)
    return () => {
      clearTimeout(timeOut)
    }
  }, [])

  const rStyle = useAnimatedStyle(() => {
    return {
      width: progress.value
    }
  })

  return (
    <Modal animationType='fade'>
      <ImageBackground style={{flex: 1}} source={{ uri: 'https://im0-tub-ru.yandex.net/i?id=04f5755ca9c594fafba0bb9f3ba7b58d-l&n=13' }}>
        <View style={styles.container}>
          <View style={styles.progressBarContainer}>
            <Animated.View style={[styles.progressBar, rStyle]} />
          </View>
        </View>
      </ImageBackground>
    </Modal>
  )
}

const progressHeight = 2
const borderRadius = 10

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: GetSizes.getWidth(),
    height: GetSizes.getHeight(),
  },
  progressBarContainer: {
    marginTop: 10,
    width: GetSizes.getWidth(),
    height: progressHeight,
    backgroundColor: Colors.gray,
    borderRadius
  },
  progressBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    height: progressHeight,
    borderRadius
  }
})