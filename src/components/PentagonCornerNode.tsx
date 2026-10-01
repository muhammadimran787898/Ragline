type PentagonCornerNodeProps = {
  className?: string;
};

/**
 * Standard thin hexagon corner anchor node used across architectural section intersections.
 *
 * @param props - Component props containing optional className for positioning.
 * @returns An SVG regular rounded hexagon with hairline stroke and solid black fill matching #585858.
 */
export const PentagonCornerNode = (props: PentagonCornerNodeProps) => (
  <svg
    viewBox="0 0 24 24"
    className={`absolute size-[18px] -translate-x-1/2 -translate-y-1/2 fill-black stroke-[#585858] stroke-[1.5] overflow-visible pointer-events-none z-20 ${props.className ?? ''}`}
    aria-hidden="true"
  >
    <path
      d="M 13.73 3.5 L 18.5 6.25 Q 20.23 7.25 20.23 9.25 L 20.23 14.75 Q 20.23 16.75 18.5 17.75 L 13.73 20.5 Q 12 21.5 10.27 20.5 L 5.5 17.75 Q 3.77 16.75 3.77 14.75 L 3.77 9.25 Q 3.77 7.25 5.5 6.25 L 10.27 3.5 Q 12 2.5 13.73 3.5 Z"
    />
  </svg>
);


