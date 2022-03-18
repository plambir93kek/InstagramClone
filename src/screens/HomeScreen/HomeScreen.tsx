import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { PostCards } from "./components/PostCards/PostCards";
import { Header } from "../../ui/Header";
import { ScrollStories } from "./components/ScrollStories";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollStories />
        <PostCards />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 5
  },
});