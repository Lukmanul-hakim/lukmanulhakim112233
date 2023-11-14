import { memo, SVGProps } from 'react';

const IconWalletIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 53 58' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0.988892H53V57.5635H0V0.988892Z' fill='white' fillOpacity={0.01} />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19.855 14.6241L35.0954 5.23169L40.1882 14.6477L19.855 14.6241Z'
      stroke='black'
      strokeWidth={2.81197}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M4.41656 17.018C4.41656 15.7161 5.40527 14.6607 6.6249 14.6607H46.3749C47.5946 14.6607 48.5832 15.7161 48.5832 17.018V50.0199C48.5832 51.3218 47.5946 52.3771 46.3749 52.3771H6.6249C5.40527 52.3771 4.41656 51.3218 4.41656 50.0199V17.018Z'
      fill='#2F88FF'
      stroke='black'
      strokeWidth={2.81197}
      strokeLinejoin='round'
    />
    <path
      d='M38.9219 39.4121H48.5834V27.6257H38.9219C35.7204 27.6257 33.1251 30.2642 33.1251 33.5189C33.1251 36.7736 35.7204 39.4121 38.9219 39.4121Z'
      fill='#43CCF8'
      stroke='white'
      strokeWidth={2.81197}
      strokeLinejoin='round'
    />
    <path d='M48.5832 19.9646V48.2519' stroke='black' strokeWidth={2.81197} strokeLinecap='round' />
  </svg>
);
const Memo = memo(IconWalletIcon);
export { Memo as IconWalletIcon };
