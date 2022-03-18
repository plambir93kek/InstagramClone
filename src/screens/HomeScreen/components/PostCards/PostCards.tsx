import React from "react"
import { View } from "react-native"
import {useNavigation} from '@react-navigation/native'
import { StackNavigationProp } from "@react-navigation/stack"
import { PostCardHeader } from "./components/PostCardHeader"
import { PostCardImage } from "./components/PostCardImage"
import { Posts } from "./Posts"

export type RootStackParamList = {Comments: undefined;Auth: undefined;};

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Comments'>;

export const PostCards = () => {
  const navigation = useNavigation<HomeScreenProp>()
  return (
    <>
      {Object.values(Posts).map((post, index) =>
        <View key={index.toString()}>
          <PostCardHeader />
          <PostCardImage post={post} />
        </View>
      )}
    </>
  )
}
