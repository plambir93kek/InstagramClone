import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { IconSvgFavorite } from '../assets/icons/IconSvgFavorite'
import { IconSvgLogo } from '../assets/icons/IconSvgLogo'
import { IconSvgMessage } from '../assets/icons/IconSvgMessage'
import { IconSvgPlus } from '../assets/icons/IconSvgPlus'

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <IconSvgLogo />
      </View>
      <View style={styles.items}>
        <TouchableOpacity style={{ marginRight: 20 }}>
          <IconSvgPlus />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 20 }}>
          <IconSvgFavorite />
        </TouchableOpacity>
        <TouchableOpacity>
          <IconSvgMessage />
        </TouchableOpacity>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  logo: {

  },
  items: {
    flexDirection: 'row'
  }
})