import { memo, SVGProps } from 'react';

const FbIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 61 61' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11 24.6145C11 34.8064 18.4022 43.2814 28.0833 45V30.1939H22.9583V24.5H28.0833V19.9439C28.0833 14.8189 31.3855 11.9728 36.0561 11.9728C37.5355 11.9728 39.1311 12.2 40.6105 12.4272V17.6667H37.9917C35.4855 17.6667 34.9167 18.9189 34.9167 20.5145V24.5H40.3833L39.4728 30.1939H34.9167V45C44.5978 43.2814 52 34.8081 52 24.6145C52 13.2763 42.775 4 31.5 4C20.225 4 11 13.2763 11 24.6145Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(FbIcon);
export { Memo as FbIcon };
