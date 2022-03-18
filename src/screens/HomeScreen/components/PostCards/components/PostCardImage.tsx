import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { useAnimatedScrollHandler, useDerivedValue, useSharedValue } from "react-native-reanimated";
import IconSvgBookmark from "../../../../../assets/icons/IconSvgBookmark";
import { IconSvgFavorite } from "../../../../../assets/icons/IconSvgFavorite";
import { IconSvgMessage } from "../../../../../assets/icons/IconSvgMessage";
import IconSvgShare from "../../../../../assets/icons/IconSvgShare";
import { selectComments } from "../../../../../store/commentsReducer";
import { useAppSelector } from "../../../../../store/store";
import { Colors } from "../../../../../styles/colors";
import { AgEnum, Text } from "../../../../../ui/Text";
import { PaginationDot } from "./PaginationDot";
import {useNavigation} from '@react-navigation/native'
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../../../../navigation/NavigatorParamList";
import { GetSizes } from "../../../../../utils/getSizes";

const desription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
const PAGE_WIDTH = GetSizes.getWidth()

interface PostCardImageProps {
  post: {
    postId: string
    images: string[]
  }
}

type homeScreenProp = StackNavigationProp<StackParamList, 'Comments'>;

export const PostCardImage: React.FC<PostCardImageProps> = ({ post }) => {

  const comments = useAppSelector(selectComments)
  const translateX = useSharedValue(0)

  const navigation = useNavigation<homeScreenProp>()

  const [descriptionLength, setDescriptionLength] = useState(100)
   
  const activeDotIndex = useDerivedValue(() =>
    Math.round(translateX.value / PAGE_WIDTH)
  )

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      translateX.value = e.contentOffset.x
    }
  })

  const showMoreDescription = () => {
    setDescriptionLength(desription.length)
  }

  useEffect(() => {
   console.log(activeDotIndex.value)
  }, [activeDotIndex])

  return (
    <View>
      <Animated.ScrollView onScroll={scrollHandler} pagingEnabled horizontal>
        {post.images.map((image, index) =>
          <Image key={index.toString()} style={styles.image} source={{ uri: image }} />
        )}
      </Animated.ScrollView>
      <View style={styles.optionsContainer}>
        <View style={styles.buttons}>
          <IconSvgFavorite style={{ marginRight: 15 }} />
          <TouchableOpacity onPress={() => navigation.navigate('Comments', {postId: post.postId})}>
            <IconSvgMessage style={{ marginRight: 15 }} />
          </TouchableOpacity>
          <IconSvgShare />
        </View>
        <View style={styles.pagination}>
          {post.images.length > 1 &&
            post.images.map((_, index) =>
              <PaginationDot key={index.toString()} index={index} activeDot={activeDotIndex} />
            )
          }
        </View>
        <View style={styles.bookmark}>
          <IconSvgBookmark />
        </View>
      </View>
      <View style={styles.desriptionContainer}>
        <Text Ag={AgEnum.SUBTITLE} >
          <Text Ag={AgEnum.SUBTITLE_STRONG}>Sunboy</Text> {desription.slice(0, descriptionLength).trim()}
          {(desription.length > 100 && descriptionLength < desription.length) &&
            <Text Ag={AgEnum.SUBTITLE}>
              ...
              <Text onPress={showMoreDescription} style={{ color: Colors.gray }} Ag={AgEnum.SUBTITLE}> more</Text>
            </Text>
          }
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Comments', {postId: post.postId})}>
        <Text style={styles.showCommentsText} Ag={AgEnum.SUBTITLE}>
          {comments?.[post.postId]?.length > 0 &&
            `Show all comments (${comments?.[post.postId]?.length})`
          }
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  image: {
    width: GetSizes.getWidth(),
    height: 375
  },
  optionsContainer: {
    flexDirection: 'row',
    padding: 12,
  },
  buttons: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  pagination: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bookmark: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  desriptionContainer: {
    paddingHorizontal: 12,
  },
  showCommentsText: {
    marginTop: 6,
    marginLeft: 12,
    fontSize: 14,
    color: 'gray'
  }
})