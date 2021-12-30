import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg
      width={80}
      height={80}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path
        opacity={0.65}
        d="M40 80c22.091 0 40-17.909 40-40S62.091 0 40 0 0 17.909 0 40s17.909 40 40 40z"
        fill="url(#prefix__paint0_radial_2205:10638)"
      />
      <path
        d="M40 73.034c18.244 0 33.034-14.79 33.034-33.034S58.244 6.966 40 6.966 6.966 21.756 6.966 40 21.756 73.034 40 73.034z"
        fill="url(#prefix__paint1_radial_2205:10638)"
      />
      <path
        d="M41.088 66.068c14.397 0 26.068-11.671 26.068-26.068 0-14.397-11.67-26.068-26.068-26.068-14.397 0-26.068 11.67-26.068 26.068 0 14.397 11.671 26.068 26.068 26.068z"
        fill="url(#prefix__paint2_linear_2205:10638)"
      />
      <path
        d="M38.911 66.068C53.31 66.068 64.98 54.397 64.98 40c0-14.397-11.672-26.068-26.069-26.068-14.396 0-26.068 11.67-26.068 26.068 0 14.397 11.672 26.068 26.068 26.068z"
        fill="url(#prefix__paint3_linear_2205:10638)"
      />
      <path
        d="M38.912 61.932c12.112 0 21.932-9.819 21.932-21.932 0-12.112-9.82-21.932-21.932-21.932-12.113 0-21.932 9.82-21.932 21.932 0 12.113 9.819 21.932 21.932 21.932z"
        fill="url(#prefix__paint4_linear_2205:10638)"
      />
      <path
        d="M38.912 61.932c12.112 0 21.932-9.819 21.932-21.932 0-12.112-9.82-21.932-21.932-21.932-12.113 0-21.932 9.82-21.932 21.932 0 12.113 9.819 21.932 21.932 21.932z"
        stroke="#F78B8B"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <path
        fill="url(#prefix__pattern0)"
        d="M17.189 18.724h43.494v38.008H17.189z"
      />
      <path
        d="M38.857 34.557L25.415 48.381l13.497-21.442 13.496 21.55-13.55-13.931z"
        fill="#fff"
      />
      <path
        d="M40.816 40.054h-4.19l2.177-2.34 2.013 2.34zm-8.109 3.81H44.79l-2.449-2.45h-7.238l-2.395 2.45z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="prefix__paint2_linear_2205:10638"
          x1={49.295}
          y1={40.004}
          x2={95.777}
          y2={40.004}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.005} stopColor="#BA344A" />
          <stop offset={1} stopColor="#EF344A" />
        </linearGradient>
        <linearGradient
          id="prefix__paint3_linear_2205:10638"
          x1={58.471}
          y1={59.537}
          x2={17.935}
          y2={19.001}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.005} stopColor="#EF344A" />
          <stop offset={1} stopColor="#F16568" />
        </linearGradient>
        <linearGradient
          id="prefix__paint4_linear_2205:10638"
          x1={26.245}
          y1={29.111}
          x2={57.05}
          y2={55.549}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.005} stopColor="#EF344A" />
          <stop offset={1} stopColor="#F16568" />
        </linearGradient>
        <radialGradient
          id="prefix__paint0_radial_2205:10638"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(40.004 40.004) scale(49.7032)"
        >
          <stop stopColor="#F05860" />
          <stop offset={0.995} stopColor="#F18462" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="prefix__paint1_radial_2205:10638"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(40.004 40.004) scale(47.154)"
        >
          <stop stopColor="#F05960" />
          <stop offset={0.995} stopColor="#F15B62" stopOpacity={0} />
        </radialGradient>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#prefix__image0_2205:10638"
            transform="scale(.00296 .00338)"
          />
        </pattern>
        <image
          id="prefix__image0_2205:10638"
          width={338}
          height={296}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default SvgComponent
