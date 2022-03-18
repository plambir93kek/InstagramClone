import React from 'react'
import { FlatList, View, Image, StyleSheet } from 'react-native'
import { IComment } from '../../../store/commentsReducer'
import { AgEnum, Text } from '../../../ui/Text'

interface CommentsListProps {
  comments: IComment[]
}

export const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
  return (
    <View style={styles.container}>
      <FlatList keyExtractor={item => item.text} data={comments} renderItem={({ item }) => {
        return (
          <View style={styles.commentContainer}>
            <Image style={styles.avatar} source={{ uri: 'https://sun6-23.userapi.com/s/v1/ig2/1jysPR-0_DJ0cR4humrp_ku8Vhd6mj-inrhnVpD7L-GpJ3iuhdUZB8SjNxp-CwWuuiuqZYuSdFx7q8GV3ClXdUsi.jpg?size=400x400&quality=96&crop=0,0,1134,1134&ava=1' }} />
            <Text style={styles.commentsText} Ag={AgEnum.SUBTITLE} >
              <Text Ag={AgEnum.SUBTITLE_STRONG}>{item.author}</Text> {item.text}
            </Text>
          </View>
        )
      }} />
    </View>
  )
}

const AVATAR_SIZE = 30
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  commentContainer: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  commentsText: {
    marginRight: 61,
  },
  avatar: {
    height: AVATAR_SIZE,
    aspectRatio: 1,
    borderRadius: AVATAR_SIZE / 2,
    marginRight: 10,
    marginTop: 6,
  },
})