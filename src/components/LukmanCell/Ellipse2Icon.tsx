import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 73 73' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M73 36.5C73 56.6584 56.6584 73 36.5 73C16.3416 73 0 56.6584 0 36.5C0 16.3416 16.3416 0 36.5 0C56.6584 0 73 16.3416 73 36.5Z'
      fill='#9DCBEF'
    />
  </svg>
);
const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };
