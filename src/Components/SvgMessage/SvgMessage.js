import React from "react";

function SvgMessage(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={30} cy={30} r={30} fill="#30C2FF" />
      <circle cx={30} cy={30} r={30} fill="url(#message_svg__paint0_linear)" />
      <path
        d="M40.666 16.667H19.333a2.675 2.675 0 00-2.667 2.666v24L21.999 38h18.667c1.467 0 2.667-1.2 2.667-2.667v-16c0-1.466-1.2-2.666-2.667-2.666z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="message_svg__paint0_linear"
          x1={60}
          y1={0}
          x2={-6.34}
          y2={8.104}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#30C2FF" />
          <stop offset={1} stopColor="#0BA3E3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgMessage;
