import { memo, SVGProps } from 'react';

const NextrightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={17.5} cy={17.148} rx={17.5} ry={17.148} transform='matrix(-1 0 0 1 35 0.245789)' fill='#025782' />
    <path d='M13 29.1824L25.0845 17.6537L13 6.12509V29.1824Z' fill='white' />
  </svg>
);
const Memo = memo(NextrightIcon);
export { Memo as NextrightIcon };
