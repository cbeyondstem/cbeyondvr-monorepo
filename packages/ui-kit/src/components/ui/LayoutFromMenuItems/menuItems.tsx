import { MenuItem } from '../../../types/interfaces'

export const menuItems: MenuItem[] = [
  { name: '', path: '/', Icon: 'HomeLogo' },
  { name: 'Buy', path: '/' },
  { name: 'Own', _path: '/own' },
  { name: 'Sell', _path: '/sell' },
  {
    name: 'How It Works',
    Icon: 'HowItWorks',
    path: '/how-it-works',
    popup: true,
  },

  {
    name: 'User',
    Icon: 'sign-in',
    only: 'authenticated',
    dropdown: [
      {
        name: 'Favorites',
        path: '/favorites',
        Icon: 'heart outline',
      },
      {
        name: 'Recommended',
        path: '/recommended',
        Icon: 'thumbs up outline',
      },
      {
        name: 'Calendar',
        path: '/calendar',
        Icon: 'calendar alternate outline',
      },
      {
        name: 'OpenHouse Log',
        path: '/openhouselog',
        Icon: 'Reviews',
      },
      {
        name: 'Messages',
        _path: '/messages',
        Icon: 'mail outline',
      },
      { name: 'Subscriptions', _path: '/subscriptions' },
      { name: 'Saved Searches', _path: '/saved-searches' },
      {
        name: 'Account Settings',
        _path: '/account',
        divider: false,
      },
      { name: 'Sign Out', Icon: 'sign-out' },
    ],
  },
  { name: 'Log In', only: 'unauthenticated', Icon: 'sign-in' },
  // { name: "Sign Up", only: "unauthenticated" },
]
