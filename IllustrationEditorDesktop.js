import React from 'react';

const IllustrationEditorDesktop=()=>{
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="925"
          height="882"
        >
          <defs>
            <linearGradient id="c" x1="0%" x2="100%" y1="27.881%" y2="72.119%">
              <stop offset="0%" stopColor="#FF8F71"></stop>
              <stop offset="100%" stopColor="#FF3E55"></stop>
            </linearGradient>
            <linearGradient id="e" x1="0%" x2="100%" y1="41.725%" y2="58.275%">
              <stop offset="0%" stopColor="#FF8F71"></stop>
              <stop offset="100%" stopColor="#FF3E55"></stop>
            </linearGradient>
            <filter
              id="b"
              width="121.8%"
              height="132.8%"
              x="-10.9%"
              y="-11.7%"
              filterUnits="objectBoundingBox"
            >
              <feOffset
                dy="20"
                in="SourceAlpha"
                result="shadowOffsetOuter1"
              ></feOffset>
              <feGaussianBlur
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
                stdDeviation="20"
              ></feGaussianBlur>
              <feColorMatrix
                in="shadowBlurOuter1"
                values="0 0 0 0 0.421821759 0 0 0 0 0.554338424 0 0 0 0 0.893710371 0 0 0 0.243444056 0"
              ></feColorMatrix>
            </filter>
            <rect id="a" width="642" height="427" x="0" y="0" rx="15"></rect>
          </defs>
          <g fill="none" fillRule="evenodd" transform="translate(40)">
            <rect
              width="600"
              height="602"
              x="145"
              y="144"
              fill="#2D2E40"
              opacity="0.08"
              rx="300"
              transform="matrix(1 0 0 -1 0 890)"
            ></rect>
            <rect
              width="679"
              height="681"
              x="105.5"
              y="100.5"
              stroke="#2D2E40"
              opacity="0.5"
              rx="339.5"
              transform="matrix(1 0 0 -1 0 882)"
            ></rect>
            <rect
              width="879"
              height="881"
              x="5.5"
              y="0.5"
              stroke="#2D2E40"
              opacity="0.25"
              rx="439.5"
              transform="matrix(1 0 0 -1 0 882)"
            ></rect>
            <g transform="translate(0 242)">
              <mask id="d" fill="#fff">
                <use xlinkHref="#a"></use>
              </mask>
              <g fillRule="nonzero">
                <use fill="#000" filter="url(#b)" xlinkHref="#a"></use>
                <use fill="url(#c)" xlinkHref="#a"></use>
              </g>
              <path
                fill="#2D2E40"
                fillRule="nonzero"
                d="M3 125h636a3 3 0 013 3v296a3 3 0 01-3 3H3a3 3 0 01-3-3V128a3 3 0 013-3z"
                mask="url(#d)"
              ></path>
              <rect
                width="135.785"
                height="137.165"
                x="90.523"
                y="47.709"
                fill="#FFF"
                fillRule="nonzero"
                mask="url(#d)"
                rx="3"
              ></rect>
              <ellipse
                cx="158.416"
                cy="116.888"
                fill="#2D2E40"
                mask="url(#d)"
                rx="39.306"
                ry="39.36"
              ></ellipse>
              <rect
                width="302.538"
                height="325.617"
                x="248.939"
                y="47.709"
                fill="#FFF"
                fillRule="nonzero"
                mask="url(#d)"
                rx="3"
              ></rect>
            </g>
            <path
              stroke="url(#e)"
              strokeLinecap="round"
              strokeWidth="8"
              d="M209 284c47.125-73.367 81.977-113.013 104.557-118.938 33.87-8.886 23.765 83.14 72.535 72.473 48.77-10.666 54.716-103.974 91.603-108.37 36.887-4.397 56.402 80.946 72.515 88.81 10.742 5.241 24.005-6.094 39.79-34.007"
              transform="translate(0 242)"
            ></path>
          </g>
        </svg>
      );
}

export default IllustrationEditorDesktop;