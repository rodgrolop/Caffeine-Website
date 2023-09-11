import type { VNode } from "preact";

const ViteIcon = (): VNode => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24.03"
      width="100%"
      height="100%"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="5.99"
          y1="269.64"
          x2="20.02"
          y2="250.58"
          gradientTransform="translate(0 267.01) scale(1 -1)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#41d1ff" />
          <stop offset="1" stop-color="#bd34fe" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="12.61"
          y1="266.74"
          x2="15.15"
          y2="249.33"
          gradientTransform="translate(0 267.01) scale(1 -1)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ffea83" />
          <stop offset=".08" stop-color="#ffdd35" />
          <stop offset="1" stop-color="#ffa800" />
        </linearGradient>
      </defs>
      <path
        fill="url(#linear-gradient)"
        class="cls-2"
        d="m23.92,3.56l-11.27,20.16c-.23.42-.83.42-1.07,0L.08,3.56c-.26-.45.13-1,.64-.91l11.29,2.02c.07.01.15.01.22,0l11.05-2.01c.51-.09.9.45.64.9Z"
      />
      <path
        fill="url(#linear-gradient-2)"
        class="cls-1"
        d="m17.38,0l-8.34,1.63c-.14.03-.24.14-.25.28l-.51,8.67c-.01.2.18.36.37.32l2.32-.54c.22-.05.41.14.37.36l-.69,3.38c-.05.23.17.42.39.35l1.43-.44c.22-.07.44.13.39.36l-1.1,5.31c-.07.33.37.51.56.23l.12-.19,6.8-13.57c.11-.23-.08-.49-.33-.44l-2.39.46c-.22.04-.42-.17-.35-.39l1.56-5.41c.06-.22-.13-.43-.35-.39Z"
      />
    </svg>
  );
};
export default ViteIcon;
