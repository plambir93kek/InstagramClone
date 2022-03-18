import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { selectComments } from '../../store/commentsReducer'
import { useAppSelector } from '../../store/store'
import { CommentsHeader } from './components/CommentsHeader'
import { RouteProp } from '@react-navigation/native'
import { CommentsList } from './components/CommentsList'
import { CommentInput } from './components/CommentInput'

interface CommentsScreenProps {
  route: RouteProp<{ params: { postId: string } }, 'params'>
}

export const CommentsScreen:React.FC<CommentsScreenProps> = ({route}) => {
  const comments = useAppSelector(selectComments)

  const postId = route.params?.postId

  return (
    <SafeAreaView style={styles.container}>
      <CommentsHeader />
      <CommentsList comments={comments[postId]} />
      <CommentInput postId={postId} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});