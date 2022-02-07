import { chakra } from '@chakra-ui/react';
import Discord from '../public/images/discord.svg';
import Substack from '../public/images/substack.svg';
import Medium from '../public/images/medium.svg';
import Twitter from '../public/images/twitter.svg';
import Github from '../public/images/github.svg';

import AnalyticsEventTracker from './AnalyticsEventTracker';
import Link from './Link';

// Should I lift this out to a common directory?
export interface socialLink {
  alt: string;
  href: string;
  src: any;
}

// feel link I should be able to declar this on a config file instead of here.
const SOCIAL: socialLink[] = [
  {
    alt: 'Medium Icon',
    href: 'https://medium.com/bankless-dao',
    src: <Medium />,
  },
  {
    alt: 'Substack Icon',
    href: 'https://banklessdao.substack.com/',
    src: <Substack />,
  },
  {
    alt: 'Discord Icon',
    href: 'https://discord.gg/bjPz2w9Zts',
    src: <Discord />,
  },
  {
    alt: 'Twitter Icon',
    href: 'https://twitter.com/banklessDAO',
    src: <Twitter />,
  },
  {
    alt: 'Github Icon',
    href: 'https://github.com/BanklessDAO',
    src: <Github />,
  },
];

const SocialLink = chakra(Link, {
  baseStyle: {
    lineHeight: 1,
    display: 'inline-block',
    width: '32px',
    height: '32px',
    margin: '0 7px 7px 0',
    padding: 0,
    '& svg': {
      width: '19px',
      height: '19px',
      transition: 'fill .15s ease-in-out',
      fill: 'white',
      _hover: {
        fill: 'var(--color-details)',
      },
    },
  },
});

export default function SocialIcons(): JSX.Element {
  return (
    <>
      {SOCIAL.map((icon: socialLink, index: number) => (
        <AnalyticsEventTracker
          key={index}
          events={[{
            eventType: "click",
            eventName: "CLICK_FOOTER_SOCIAL",
            data: {
              link: icon.href,
              title: icon.alt
            }
          }]}>
          <SocialLink href={icon.href} target="_blank" key={index}>
            {icon.src}
          </SocialLink>
        </AnalyticsEventTracker>
      ))}
    </>
  );
}
