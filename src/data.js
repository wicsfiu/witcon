// import icons
import { FaYoutube, FaInstagram, FaGithub, FaDiscord } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../src/assets/img/about.png';
import Feature1Img from '../src/assets/img/features/feature1.png';
import Feature2Img from '../src/assets/img/features/feature2.png';
import Feature3Img from '../src/assets/img/features/feature3.png';
import Feature4Img from '../src/assets/img/features/feature4.png';
import Avatar1Img from '../src/assets/img/testimonials/avatar1.png';
import Avatar2Img from '../src/assets/img/testimonials/avatar2.png';
import Avatar3Img from '../src/assets/img/testimonials/avatar3.png';
import LogoV2 from '../src/assets/img/logo-v2.png';
import HeroImage from '../src/assets/img/hero-img.png';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';

export const navigationData = [
  {
    name: 'About',
    href: '/About',
  },
  {
    name: 'Orgs',
    href: '#',
  },
  {
    name: 'Info',
    href: '#',
  },
  {
    name: 'Signup',
    href: 'https://lu.ma/event/evt-JD8DRxzzE3l3PCk',
  },
];

export const heroData = {
  title: ` Welcome to WiTCON!`,
  subtitle:
    'Women in Technology Conference 2023 @ FIU',
  btnText: 'Learn More',
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: 'Register now!',
  subtitle:
    'Witcon will be held the last week of March 2023 at FIU. Register now to stay up to date with event details such as panels, workshops, and having your resume seen by our sponsors',
    //add another register button
    //btnText: 'Learn More',
};

export const featuresData = {
  title: 'Participating Organizations',
  subtitle:
    'Check out our FIU Women in Tech Orgs who are working hard to make this event happen. Click connect to join each Org!',
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: 'Women in Computer Science',
      //description:
       // 'Women in Computer Science',
      linkText: 'Learn more',
      href: 'https://linktr.ee/wicsfiu?utm_source=qr_code',
      delay: '300',
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: 'Init',
      //description:
        //'Women in Cyber Security',
      linkText: 'Learn more',
      href:'https://linktr.ee/fiuwicys',
      delay: '600',
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: 'Women in Cyber Security',
      //description:
        //'Blockchain @ FIU',
      linkText: 'Learn more',
      href:'https://linktr.ee/fiuwicys',
      delay: '900',
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: 'Blockchain @ FIU',
      //description:
      //  'stay tuned to hear about more orgs participating',
      linkText: 'Learn more',
      //link to registration
      href:'https://linktr.ee/blockchainatfiu',
      delay: '1200',
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: 'What is WiTCON?',
    web: '',
    message:
      'WITCON is a revival of the previously held Women in C.S. Conference (WiCSCON). Though WiCSCON was held in high regard, we felt that the branding limited attendees to only those interested in C.S. By focusing on technology as a whole, we are able to reach women in C.S., but also women in Cybersecurity, Web3, Engineering, etc.',
    delay: '300',
  },
  {
    image: Avatar2Img,
    name: 'Our Mission',
    web: '',
    message:
      'Our overarching mission is to create a space for women in tech at the university. By hosting female-led panels, workshops, and activities, we hope to both encourage girls to begin careers in tech and ensure that those who are already in tech see themselves properly represented in the field.',
    delay: '600',
  },
  {
    image: Avatar3Img,
    name: 'Why WiTCON?',
    web: '',
    message:
      'This event will serve as an opportunity to connect with talented young women that represent the future of the tech industry. Because it will be held in collaboration with several other organizations at both FIU and MDC, the attendee pool will include students interested in a variety of tech fields.',
    delay: '900',
  },
];

export const ctaData = {
  title: "Let's Stay In Touch!",
  subtitle: '',
 // btnText1: 'LinkTree',
  btnText2: 'Sign Up',
};

export const footerData = {
  logo: LogoV2,
  address: 'WiTCON @ FIU ',
  email: 'wics@fiu.edu',
  list1: [
    {
      name: 'About',
      href: 'components.About',
    },
    {
      name: 'Orgs',
      href: 'id= features',
    },
    {
      name: 'Info',
      href: '#Testimonials',
    },
  ],
  list2: [
  ],
  socialList: [
    {
      icon: <FaDiscord />,
      href: 'https://discord.gg/rNFsFStx8V',
    },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/wicsfiu/',
    },
    {
      icon: <FaGithub />,
      href: 'https://github.com/barbare11a/WiTCONsite',
    },
  ],
};

export const copyrightData = {
  text: 'Witcon 2023 - made by Women in Tech ',
  //icon: <BsChatDotsFill />,
};