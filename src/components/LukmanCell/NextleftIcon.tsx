import { memo, SVGProps } from 'react';

const NextleftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={17.5} cy={17.3938} rx={17.5} ry={17.148} fill='#025782' />
    <path d='M21 29.1824L8.91554 17.6537L21 6.12509V29.1824Z' fill='white' />
  </svg>
);
const Memo = memo(NextleftIcon);
export { Memo as NextleftIcon };
