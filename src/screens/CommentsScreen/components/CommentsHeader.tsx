import React from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { AntDesign } from '@expo/vector-icons'
import IconSvgShare from "../../../assets/icons/IconSvgShare"
import { AgEnum, Text } from "../../../ui/Text"
import {useNavigation} from '@react-navigation/native'
import { StackNavigationProp } from "@react-navigation/stack"
import { StackParamList } from "../../../navigation/NavigatorParamList"

type commenScreenProp = StackNavigationProp<StackParamList, 'Home'>;

export const CommentsHeader = () => {
  const navigation = useNavigation<commenScreenProp>()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text Ag={AgEnum.h1}>Comments</Text>
      </View>
      <IconSvgShare style={{ justifyContent: 'center' }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 40,
    paddingHorizontal: 15,
    alignItems: 'center'

  },
  textContainer: {
    flex: 1,
    marginLeft: 30
  }
})