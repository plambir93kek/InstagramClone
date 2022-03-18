import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const IconSvgBookmark = (props: SvgProps) => (
  <Svg
    width={20}
    height={23}
    fill="none"
    {...props}
  >
    <Path
      d="M17.875 1H2.125C1.506 1 1 1.45 1 2.005v19.46c0 .555.366.697.821.308l7.723-6.574a.54.54 0 0 1 .659-.005l7.97 6.594c.456.379.827.232.827-.323V2.005C19 1.449 18.5 1 17.875 1Zm-.563 18.02-5.968-4.937a2.302 2.302 0 0 0-1.468-.515c-.54 0-1.074.176-1.49.53L2.688 18.95V2.515h14.624V19.02Z"
      fill="#000"
      stroke="#000"
      strokeWidth={0.7}
    />
  </Svg>
)

export default IconSvgBookmark
