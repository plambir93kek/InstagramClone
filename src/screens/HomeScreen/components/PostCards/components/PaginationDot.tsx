import React from "react";
import { StyleSheet } from "react-native";
import Animated, { SharedValue, useAnimatedStyle } from "react-native-reanimated";
import { Colors } from "../../../../../styles/colors";


interface PaginationDotProps {
  activeDot: SharedValue<number>,
  index: number
}

export const PaginationDot: React.FC<PaginationDotProps> = ({ activeDot, index }) => {

  const rStyle = useAnimatedStyle(() => {
    const isActive = activeDot.value === index
    return {
       backgroundColor: isActive ? Colors.blue : Colors.grayLight
    }
  })

  return (
    <Animated.View style={[styles.dot, rStyle]} />
  )
}

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  }
})