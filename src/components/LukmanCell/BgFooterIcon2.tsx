import { memo, SVGProps } from 'react';

const BgFooterIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1440 100' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      opacity={0.7}
      d='M0 20C0 8.9543 8.95431 0 20 0H1420C1431.05 0 1440 8.95431 1440 20V80C1440 91.0457 1431.05 100 1420 100H20C8.95431 100 0 91.0457 0 80V20Z'
      fill='black'
      fillOpacity={0.9}
    />
  </svg>
);
const Memo = memo(BgFooterIcon2);
export { Memo as BgFooterIcon2 };
