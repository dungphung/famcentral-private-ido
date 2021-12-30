import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg
      width={21}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5.833a9.167 9.167 0 100 18.334 9.167 9.167 0 000-18.334zm3.973 7.617a.832.832 0 00-.384-1.346.833.833 0 00-.896.279l-3.583 4.3-1.854-1.856a.833.833 0 00-1.179 1.178l2.5 2.5a.835.835 0 001.23-.055l4.166-5z"
        fill="#00EB34"
      />
    </svg>
  )
}

export default SvgComponent
