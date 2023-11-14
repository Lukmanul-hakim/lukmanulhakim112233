import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 24.1816L15 12.4229L0 0.664253V24.1816Z' fill='white' />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
