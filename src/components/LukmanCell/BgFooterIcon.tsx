import { memo, SVGProps } from 'react';

const BgFooterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1440 250' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 20C0 8.9543 8.95431 0 20 0H1420C1431.05 0 1440 8.95431 1440 20V230C1440 241.046 1431.05 250 1420 250H20C8.95431 250 0 241.046 0 230V20Z'
      fill='black'
      fillOpacity={0.9}
    />
  </svg>
);
const Memo = memo(BgFooterIcon);
export { Memo as BgFooterIcon };
