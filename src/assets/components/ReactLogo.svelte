<!-- Adapted from https://github.com/herbowicz/react-logo-animated -->
<svg width="200" height="200">
  <g>
    <ellipse cx="100" cy="100" rx="160" ry="60" />
    <ellipse cx="100" cy="100" rx="160" ry="60" transform="rotate(60, 100, 100)" />
    <ellipse cx="100" cy="100" rx="160" ry="60" transform="rotate(120, 100, 100)" />
    <circle cx="100" cy="100" r="30" />
  </g>
</svg>

<style>
  svg {
    position: absolute;
    inset: 0;
    margin: auto;
    overflow: visible;
    transform: scale(0.1);
    animation: scale 20s ease-in forwards;
  }

  g {
    transform-origin: 50% 50%;
    animation: rotate 10s linear infinite;
  }

  ellipse {
    fill: none;
    stroke: #61dafb;
    stroke-dasharray: 212.3285, 30;
    stroke-dashoffset: 721;
    stroke-linecap: round;
    stroke-width: 16px;
    animation: animate 2s linear infinite;
  }

  circle {
    fill: #61dafb;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes scale {
    from {
      transform: scale(0.1);
    }

    to {
      transform: scale(2.5);
    }
  }

  @keyframes animate {
    100% {
      stroke-dashoffset: 0;
    }
  }
</style>
