import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Header } from "../../ui/Header";
import { GetSizes } from "../../utils/getSizes";

export const SearchScreen = () => {
  return (
    <>
    <Header />
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.flexContainer}>
            <View style={styles.topLeftContainer}>
              {[...Array(4)].map((_, index) => {
                return <Image key={index.toString()} style={styles.smallImage} source={{ uri: 'https://i.imgur.com/M2r6YOM.jpg' }} />
              })}
            </View>
            <Image style={styles.highImage} source={{ uri: 'https://i.imgur.com/M2r6YOM.jpg' }} />
          </View>
          <View style={styles.centerContainer}>
            {[...Array(6)].map((_, index) => {
              return <Image key={index.toString()} style={styles.smallImage} source={{ uri: 'https://i10.fotocdn.net/s127/7f9be7bd855da714/user_xl/2889252191.jpg' }} />
            })}
          </View>
          <View style={styles.flexContainer}>
            <Image style={styles.leftBottomContainer} source={{ uri: 'https://pbs.twimg.com/media/EXbunqOWsAAxwl4.jpg' }} />
            <View>
              {[...Array(2)].map((_, index) => {
                return <Image key={index.toString()} style={styles.smallImage} source={{ uri: 'https://avatars.mds.yandex.net/i?id=e49a77f09e248d06016242730b0dbf01-5650958-images-thumbs&n=13' }} />
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  smallImage: {
    width: GetSizes.getWidth() / 3 - 0.3,
    height: GetSizes.getWidth() / 3 - 0.3,
    marginTop: 0.5
  },
  highImage: {
    width: GetSizes.getWidth() / 3 - 0.3,
    height: GetSizes.getWidth() * 2 / 3,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topLeftContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: GetSizes.getWidth() * 0.667,
  },
  centerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: GetSizes.getWidth()
  },
  leftBottomContainer: {
    width: GetSizes.getWidth() * 2 / 3 - 0.3,
    height: GetSizes.getWidth() * 2 / 3,
  },
  rightBottomContainer: {

  }
})