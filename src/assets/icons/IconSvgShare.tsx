import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconSvgShare = (props: SvgProps) => (
  <Svg
    width={23}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.855 1.445A.896.896 0 0 0 21.072 1l-19.157.014a.908.908 0 0 0-.854.594.9.9 0 0 0 .056.765c.05.084.116.163.195.232l7.381 6.366 1.8 9.563c.07.376.358.654.738.714a.923.923 0 0 0 .942-.445L21.851 2.35a.89.89 0 0 0 .005-.905Zm-18.638.947h15.6L9.425 7.75 3.217 2.39Zm8.408 14.592-1.513-8.036 9.405-5.364-7.892 13.4Z"
      fill="#000"
      stroke="#000"
      strokeWidth={0.7}
    />
  </Svg>
)

export default IconSvgShare 
