import React from 'react'
import { StyleSheet, Text as RNText, TextProps } from "react-native";
import { Colors } from '../styles/colors';

export enum AgEnum {
  h1 = 'h1',
  SUBTITLE = 'SUBTITLE',
  SUBTITLE_STRONG = 'SUBTITLE_STRONG'
}

interface Itext extends TextProps {
  Ag: AgEnum,
  align?: 'auto' | 'left' | 'right' | 'justify' | 'center',
  color?: string
}

export const Text: React.FC<Itext> = (props) => {

  const { Ag, align, color } = props
  return (
    <RNText {...props} style={[
      styles[Ag],
      {
        color: color || Colors.black,
        textAlign: align || 'left',
      },
      props.style
    ]}>
    </RNText>
  )
}

const styles = StyleSheet.create({
  [AgEnum.h1]: {
    fontSize: 20,
    lineHeight: 34,
    letterSpacing: 0.36,
    fontWeight: '700'
  },
  [AgEnum.SUBTITLE]: {
    fontSize: 12,
    lineHeight: 22,
  },
  [AgEnum.SUBTITLE_STRONG]: {
    fontSize: 12,
    lineHeight: 22,
    fontWeight: '700',
  }
})