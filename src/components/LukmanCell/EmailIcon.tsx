import { memo, SVGProps } from 'react';

const EmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M37.5 7.5H11.25C9.18187 7.5 7.5 9.18187 7.5 11.25V20.625H11.25V15L23.25 24C23.5747 24.2431 23.9694 24.3745 24.375 24.3745C24.7806 24.3745 25.1753 24.2431 25.5 24L37.5 15V31.875H22.5V35.625H37.5C39.5681 35.625 41.25 33.9431 41.25 31.875V11.25C41.25 9.18187 39.5681 7.5 37.5 7.5ZM24.375 20.1562L12.4987 11.25H36.2512L24.375 20.1562Z'
      fill='white'
    />
    <path
      d='M3.75 22.5H16.875V26.25H3.75V22.5ZM7.5 28.125H18.75V31.875H7.5V28.125ZM13.125 33.75H20.625V37.5H13.125V33.75Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(EmailIcon);
export { Memo as EmailIcon };
