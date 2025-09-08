import {NavLink, ThemeConfig} from './theme.interfaces';
import { environment } from '../../environments/environment';

const domeHeaderLinks: NavLink[] = [
  {
    label: 'HEADER._verify',
    id: 'verifyDropdown', // ID para el toggle de Flowbite
    children: [
      { label: 'HEADER._guidelines', url: environment.KB_ONBOARDING_GUIDELINES_URL, isRouterLink: false },
      { label: 'HEADER._registration', url: environment.REGISTRATION_FORM_URL, isRouterLink: false },
      { label: 'HEADER._guideline_publish', url: environment.KB_GUIDELNES_URL, isRouterLink: false }
    ]
  },
  {
    label: 'HEADER._browse',
    id: 'searchDropdown', // ID para el toggle de Flowbite
    children: [
      { label: 'HEADER._services', url: '/search', isRouterLink: true },
      { label: 'HEADER._catalogs', url: '/catalogues', isRouterLink: true }
    ]
  },
  {
    label: 'HEADER._about',
    url: '/about',
    isRouterLink: true
  }
];


const domeFooterLinks: NavLink[] = [
  { label: 'FOOTER._privacy', url: 'assets/documents/privacy.pdf', isRouterLink: false },
  { label: 'FOOTER._cookies', url: 'assets/documents/cookies.pdf', isRouterLink: false },
  { label: 'FOOTER._licensing', url: 'assets/documents/terms.pdf', isRouterLink: false },
  { label: 'FOOTER._contact', url: '/contact-us', isRouterLink: true },
];


export const DOME_THEME_CONFIG: ThemeConfig = {
  name: 'DOME',
  displayName: 'Dome Marketplace',
  assets: {
    logoUrl: 'assets/logos/project-logo-white.svg',
    jumboBgUrl: 'assets/themes/dome/jumboBackground.png',
    cardDefaultBgUrl: 'assets/logos(project-logo-element-colour.png'
  },
  links: {
    headerLinks: domeHeaderLinks,
    footerLinks: domeFooterLinks,

    linkedin: environment.DOME_LINKEDIN,
    youtube: environment.DOME_YOUTUBE,
    twitter: environment.DOME_X,
    privacyPolicy: 'assets/documents/privacy.pdf',

  },
  dashboard: {
    showFeaturedOfferings: true,
    showPlatformBenefits: true,
  }
};
