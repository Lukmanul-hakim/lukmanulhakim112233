import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 73 73' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={36.5} cy={36.5} r={36.5} fill='white' />
  </svg>
);
const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
