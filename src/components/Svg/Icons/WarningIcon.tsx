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
      <g clipPath="url(#prefix__clip0_2289:11289)">
        <path
          d="M19.722 16.227l-7.717-14.2a1.789 1.789 0 00-3.144 0l-7.711 14.2a1.79 1.79 0 001.572 2.661H18.15a1.788 1.788 0 001.572-2.639v-.022zm-10-10.672a.778.778 0 111.556 0v6.667a.778.778 0 01-1.556 0V5.555zm.778 11.028a1 1 0 110-2 1 1 0 010 2z"
          fill="#F4C31C"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_2289:11289">
          <path fill="#fff" transform="translate(.5)" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgComponent
