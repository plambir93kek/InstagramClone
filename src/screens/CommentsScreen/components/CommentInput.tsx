import React, { useState } from "react"
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native"
import { addComment } from "../../../store/commentsReducer"
import { useAppDispatch } from "../../../store/store"
import { Colors } from "../../../styles/colors"
import { AgEnum, Text } from "../../../ui/Text"

interface CommentInputProps {
  postId: string
}

export const CommentInput:React.FC<CommentInputProps> = ({postId}) => {

  const [comment, setComment] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleSend = () => {
   if(comment && postId){
    dispatch(addComment({text: comment, postId}))
    setComment('')
   }
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://sun6-23.userapi.com/s/v1/ig2/1jysPR-0_DJ0cR4humrp_ku8Vhd6mj-inrhnVpD7L-GpJ3iuhdUZB8SjNxp-CwWuuiuqZYuSdFx7q8GV3ClXdUsi.jpg?size=400x400&quality=96&crop=0,0,1134,1134&ava=1' }} style={styles.avatar} />
      <TextInput
        onChangeText={text => setComment(text)}
        multiline numberOfLines={2} style={styles.input}
        placeholder='Enter your comment...'
        value={comment}
      />
      <TouchableOpacity onPress={handleSend} style={styles.button}>
        <Text style={{ color: Colors.blue }} Ag={AgEnum.SUBTITLE}>
          Send
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const AVATAR_SIZE = 30
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10
  },
  avatar: {
    height: AVATAR_SIZE,
    aspectRatio: 1,
    borderRadius: AVATAR_SIZE / 2,
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  button: {
    justifyContent:'center',
    marginLeft: 10,
  }
})