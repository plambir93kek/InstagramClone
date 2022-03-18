import { Dimensions } from "react-native"

export class GetSizes {
  
  static getWidth = () => {
    return Dimensions.get('window').width
  }
  static getHeight = () => {
    return Dimensions.get('window').height
  }
}