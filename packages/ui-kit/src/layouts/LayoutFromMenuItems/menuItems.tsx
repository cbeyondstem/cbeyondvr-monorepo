import { MenuItem } from '../../types/interfaces'

export const menuItems: MenuItem[] = [
  { name: '', path: '/', icon: 'HomeLogo' },
  { name: 'Buy', path: '/' },
  { name: 'Own', _path: '/own' },
  { name: 'Sell', _path: '/sell' },
  {
    name: 'How It Works',
    icon: 'HowItWorks',
    path: '/how-it-works',
    popup: true,
  },

  {
    name: 'User',
    icon: 'sign-in',
    only: 'authenticated',
    dropdown: [
      {
        name: 'Favorites',
        path: '/favorites',
        icon: 'heart outline',
      },
      {
        name: 'Recommended',
        path: '/recommended',
        icon: 'thumbs up outline',
      },
      {
        name: 'Calendar',
        path: '/calendar',
        icon: 'calendar alternate outline',
      },
      {
        name: 'OpenHouse Log',
        path: '/openhouselog',
        icon: 'Reviews',
      },
      {
        name: 'Messages',
        _path: '/messages',
        icon: 'mail outline',
      },
      { name: 'Subscriptions', _path: '/subscriptions' },
      { name: 'Saved Searches', _path: '/saved-searches' },
      {
        name: 'Account Settings',
        _path: '/account',
        divider: false,
      },
      { name: 'Sign Out', icon: 'sign-out' },
    ],
  },
  { name: 'Log In', only: 'unauthenticated', icon: 'sign-in' },
  // { name: "Sign Up", only: "unauthenticated" },
]
