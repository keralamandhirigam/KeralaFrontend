import React from 'react'

export const CardSVG = (props) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 51 51"
        width={256}
        height={256}
        {...props}
      >
        <path
          fill="#4084dd"
          d="M49.5 12.867v25.266a2.3 2.3 0 01-2.3 2.3H3.8a2.3 2.3 0 01-2.3-2.3V12.867a2.3 2.3 0 012.3-2.3h43.4a2.3 2.3 0 012.3 2.3z"
          className="color4084DD svgShape"
        />
        <path
          fill="#ebf5e9"
          d="M49.5 12.867v25.266a2.3 2.3 0 01-2.3 2.3H24.625c-2.89-4.256-4.576-9.397-4.576-14.933s1.686-10.677 4.576-14.933H47.2a2.3 2.3 0 012.3 2.3z"
          opacity={0.1}
          className="colorEBF5E9 svgShape"
        />
        <path
          fill="#f6ce51"
          d="M15.386 15.802v4.943a1.24 1.24 0 01-1.236 1.236H6.736A1.24 1.24 0 015.5 20.745v-4.943c0-.68.556-1.235 1.236-1.235h7.414c.68 0 1.236.556 1.236 1.235z"
          className="colorF6CE51 svgShape"
        />
        <path
          fill="#efa43a"
          d="M15.386 17.579v-.65h-3.33v-.367a1.614 1.614 0 00-3.226 0v.366H5.5v.65h3.33v1.39H5.5v.651h3.33v.366c0 .89.724 1.614 1.613 1.614s1.614-.724 1.614-1.614v-.366h3.329v-.65h-3.33v-1.39h3.33zM9.48 16.562a.964.964 0 011.926 0v.366H9.48v-.366zm1.926 3.423a.964.964 0 01-1.926 0v-.366h1.926v.366zm0-1.016H9.48v-1.39h1.926v1.39z"
          className="colorEFA43A svgShape"
        />
        <circle
          cx={36.251}
          cy={33.618}
          r={3.556}
          fill="#ebf5e9"
          className="colorEBF5E9 svgShape"
        />
        <circle
          cx={39.806}
          cy={33.618}
          r={3.556}
          fill="#df493f"
          className="colorDF493F svgShape"
        />
        <path
          fill="#99c6f3"
          d="M5.5 30.764h18.702v1.5H5.5zm0 4.209h24.026v1.5H5.5z"
          className="color99C6F3 svgShape"
        />
      </svg>
    )
}
