import { memo, SVGProps } from 'react';

const Icon2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 55 55' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M46.5487 8.03516C41.3028 2.92801 34.3603 0 27.5 0C20.6397 0 13.6972 2.92801 8.45134 8.03516C3.00167 13.3412 0 20.1339 0 27.5C0 34.8661 3.29509 42.0468 5.57612 46.1914C7.85714 50.336 10.9263 55 13.75 55C17.6786 55 25.5357 51.0714 25.5357 51.0714L11.7857 25.5357L5.10469 29.4311C5.02246 28.6629 4.98148 27.8908 4.98192 27.1182C4.98192 21.1554 7.35379 15.5657 11.8753 11.1584C16.2348 6.91674 21.8527 4.66518 27.5 4.66518C33.1473 4.66518 38.7615 6.91674 43.1247 11.1633C47.6462 15.5657 50.0169 21.1554 50.0169 27.1231C50.0173 27.8949 49.9763 28.6662 49.8941 29.4336L43.2143 25.5357L29.4643 51.0714C29.4643 51.0714 37.3214 55 41.25 55C44.0737 55 47.1429 50.3348 49.4239 46.1914C51.7049 42.048 55 34.8661 55 27.5C55 20.1339 51.9983 13.3412 46.5487 8.03516Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(Icon2Icon);
export { Memo as Icon2Icon };
