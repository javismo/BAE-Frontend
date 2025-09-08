import {NavLink, ThemeConfig} from './theme.interfaces';
import {environment} from "../../environments/environment";

const baeHeaderLinks: NavLink[] = [
  {
    label: 'HEADER._home',
    url: '/dashboard',
    isRouterLink: true
  },
  {
    label: 'HEADER._browse',
    id: 'searchDropdown', // ID para el toggle de Flowbite
    children: [
      { label: 'HEADER._services', url: '/search', isRouterLink: true },
      { label: 'HEADER._catalogs', url: '/catalogues', isRouterLink: true }
    ]
  }
  ];


export const BAE_THEME_CONFIG: ThemeConfig = {
  name: 'BAE',
  displayName: 'BAE Default Theme',
  isDefault: true,
  assets: {
    logoUrl: 'assets/logos/project-logo-white.svg',
    jumboBgUrl: 'assets/themes/bae/jumboBackground.png',
    cardDefaultBgUrl: 'assets/logos/project-logo-element-colour.png'
  },
  links: {
    headerLinks: baeHeaderLinks,

    linkedin: 'https://linkedin.com/company/ocean-theme-example',
    youtube: 'https://youtube.com/c/ocean-theme-example',
    twitter: 'https://twitter.com/ocean-theme-example',
  },
  dashboard: {
    showFeaturedOfferings: true,
    showPlatformBenefits: false,
  }
};
