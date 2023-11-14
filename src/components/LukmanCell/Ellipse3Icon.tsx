import { memo, SVGProps } from 'react';

const Ellipse3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 73 73' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={36.5} cy={36.5} r={36.5} fill='#9DCBEF' />
  </svg>
);
const Memo = memo(Ellipse3Icon);
export { Memo as Ellipse3Icon };
