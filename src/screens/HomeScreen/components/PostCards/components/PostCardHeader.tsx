import React from "react"
import { View, StyleSheet, Image, TouchableOpacity } from "react-native"
import { AgEnum, Text } from "../../../../../ui/Text"

export const PostCardHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{ uri: 'https://sun6-23.userapi.com/s/v1/ig2/1jysPR-0_DJ0cR4humrp_ku8Vhd6mj-inrhnVpD7L-GpJ3iuhdUZB8SjNxp-CwWuuiuqZYuSdFx7q8GV3ClXdUsi.jpg?size=400x400&quality=96&crop=0,0,1134,1134&ava=1' }} />
        <Text Ag={AgEnum.SUBTITLE} style={{fontWeight: '700'}}>Sunboy</Text>
      </View>
      <TouchableOpacity style={styles.options}>
        <Text Ag={AgEnum.h1} align={'center'} style={{lineHeight: 15}}>...</Text>
      </TouchableOpacity>
    </View>
  )
}

const AVATAR_SIZE = 30
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    height: AVATAR_SIZE,
    aspectRatio: 1,
    borderRadius: AVATAR_SIZE / 2,
    marginRight: 10,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
})