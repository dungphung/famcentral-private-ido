import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg
      width={17}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.696 1.624V0a8 8 0 00-4.277 1.777l1.141 1.15a6.385 6.385 0 013.136-1.303zm5.885.153A7.999 7.999 0 009.304 0v1.624a6.385 6.385 0 013.136 1.303l1.141-1.15zm1.295 5.419H16.5a7.999 7.999 0 00-1.777-4.277l-1.15 1.141a6.385 6.385 0 011.303 3.136zM3.426 4.06L2.277 2.92A8 8 0 00.5 7.196h1.624A6.385 6.385 0 013.427 4.06zM2.125 8.804H.5a7.999 7.999 0 001.777 4.277l1.15-1.15a6.326 6.326 0 01-1.303-3.127zM10.912 8A2.409 2.409 0 008.5 5.588 2.409 2.409 0 006.088 8 2.409 2.409 0 008.5 10.412 2.409 2.409 0 0010.912 8zm2.661 3.94l1.15 1.15A8.025 8.025 0 0016.5 8.811h-1.624a6.389 6.389 0 01-1.303 3.128zm-4.269 2.436V16a7.999 7.999 0 004.277-1.777l-1.15-1.15a6.327 6.327 0 01-3.127 1.303zm-5.885-.153A8.025 8.025 0 007.696 16v-1.624a6.385 6.385 0 01-3.136-1.303l-1.141 1.15z"
        fill="#F4C31C"
      />
    </svg>
  )
}

export default SvgComponent
