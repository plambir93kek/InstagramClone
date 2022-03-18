import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { AgEnum, Text } from "../../../ui/Text";
import { Colors } from "../../../styles/colors";
import { Story } from "./Story";
import { LinearGradient } from 'expo-linear-gradient';

export const ScrollStories = () => {
  const [showStory, setShowStory] = useState(false)

  return (
    <View>
      {showStory && <Story onShowStory={setShowStory} />}
      <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
        {[...Array(10)].map((_, index) =>
          <View style={styles.storyItemContainer} key={index.toString()}>
            <TouchableOpacity onPress={() => setShowStory(true)}>
              <LinearGradient start={[0, 0.5]}
                end={[1, 0.5]}
                colors={['#DE0046', '#F7A34B']}
                style={styles.storyItem}
              >
                  <Image style={styles.image} source={{ uri: 'https://im0-tub-ru.yandex.net/i?id=04f5755ca9c594fafba0bb9f3ba7b58d-l&n=13' }} />
              </LinearGradient>
            </TouchableOpacity>
            <Text
              Ag={AgEnum.SUBTITLE}
              style={{ textAlign: 'center', width: 70 }}
              numberOfLines={1}
              ellipsizeMode='tail'
            >
              Lol.kek93
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  )
}

const STORY_ITEM_SIZE = 70
const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grayLight
  },
  storyItemContainer: {
    alignItems: 'center',
  },
  storyItem: {
    height: STORY_ITEM_SIZE,
    width: STORY_ITEM_SIZE,
    borderRadius: STORY_ITEM_SIZE / 2,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'white'
  }
})